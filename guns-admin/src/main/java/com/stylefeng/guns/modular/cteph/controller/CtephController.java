package com.stylefeng.guns.modular.cteph.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.common.billcode.impl.CTEPHGeneratorImpl;
import com.stylefeng.guns.core.common.constant.factory.ConstantFactory;
import com.stylefeng.guns.core.common.exception.BizExceptionEnum;
import com.stylefeng.guns.core.exception.GunsException;
import com.stylefeng.guns.core.shiro.ShiroKit;
import com.stylefeng.guns.core.shiro.ShiroUser;
import com.stylefeng.guns.modular.cteph.factory.CtephFactory;
import com.stylefeng.guns.modular.cteph.transfer.CtephDto;
import com.stylefeng.guns.modular.cteph.warpper.CtephWarpper;
import com.stylefeng.guns.modular.system.transfer.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Cteph;
import com.stylefeng.guns.modular.cteph.service.ICtephService;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * CTEPH调查表控制器
 *
 * @author chenguiwen
 * @Date 2019-02-23 14:34:37
 */
@Controller
@RequestMapping("/cteph")
public class CtephController extends BaseController {

    private String PREFIX = "/cteph/cteph/";

    @Autowired
    private ICtephService ctephService;

    @Autowired
    private CTEPHGeneratorImpl ctephGenerator;

    /**
     * 跳转到CTEPH调查表首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cteph.html";
    }

    /**
     * 跳转到添加CTEPH调查表
     */
    @RequestMapping("/cteph_add")
    public String ctephAdd(Model model) {
        ShiroUser user = ShiroKit.getUser();
        model.addAttribute("departmentName", ConstantFactory.me().getDeptName(user.deptId));
        model.addAttribute("fillingpersonName", ConstantFactory.me().getUserNameById(user.id));
        return PREFIX + "cteph_add.html";
    }

    /**
     * 跳转到修改CTEPH调查表
     */
    @RequestMapping("/cteph_update/{ctephId}")
    public String ctephUpdate(@PathVariable Integer ctephId, Model model) {
        Cteph cteph = ctephService.selectById(ctephId);
        model.addAttribute("departmentName", ConstantFactory.me().getDeptName(cteph.getDepartment()));
        model.addAttribute("fillingpersonName", ConstantFactory.me().getUserNameById(cteph.getFillingperson()));
        LogObjectHolder.me().set(cteph);
        return PREFIX + "cteph_edit.html";
    }

    /**
     * 跳转到查看详情CTEPH调查表 [likang 2019-2-25]
     */
    @RequestMapping("/cteph_view/{ctephId}")
    public String ctephView(@PathVariable Integer ctephId, Model model) {
        Cteph cteph = ctephService.selectById(ctephId);
        model.addAttribute("item",cteph);
        model.addAttribute("sexName", ConstantFactory.me().getSexName(cteph.getPatientSex()));
        model.addAttribute("departmentName", ConstantFactory.me().getDeptName(cteph.getDepartment()));
        model.addAttribute("fillingpersonName", ConstantFactory.me().getUserNameById(cteph.getFillingperson()));
        LogObjectHolder.me().set(cteph);
        return PREFIX + "cteph_view.html";
    }

    /**
     * 获取CTEPH调查表列表 [likang 2019-2-27]
     * 加入sexName
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String condition) {
        List<Map<String, Object>> ctephs = ctephService.selectCtephs(condition);
        List<Map<String, Object>> ctephs_new = ( List<Map<String, Object>>)new CtephWarpper(ctephs).warp();//多加了一个sexName
        return ctephs_new;

    }

    /**
     * 新增CTEPH调查表
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(@Valid CtephDto ctephDto, BindingResult result) {
        if (result.hasErrors()) {
            throw new GunsException(BizExceptionEnum.REQUEST_NULL);
        }
        if(null != ctephDto){
            String code = ctephGenerator.getCode();
            ctephDto.setCode(code);
        }
        ctephService.insert(CtephFactory.createCteph(ctephDto));
        return SUCCESS_TIP;
    }

    /**
     * 删除CTEPH调查表
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer ctephId) {
        ctephService.deleteById(ctephId);
        return SUCCESS_TIP;
    }

    /**
     * 修改CTEPH调查表
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Cteph cteph) {
        ctephService.updateById(cteph);
        return SUCCESS_TIP;
    }

    /**
     * CTEPH调查表详情
     */
    @RequestMapping(value = "/detail/{ctephId}")
    @ResponseBody
    public Object detail(@PathVariable("ctephId") Integer ctephId) {
        return ctephService.selectById(ctephId);
    }

}

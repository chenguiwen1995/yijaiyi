package com.stylefeng.guns.modular.patient.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.common.annotion.Permission;
import com.stylefeng.guns.core.datascope.DataScope;
import com.stylefeng.guns.core.shiro.ShiroKit;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.warpper.PatientWarpper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.YjyPatient;
import com.stylefeng.guns.modular.patient.service.IYjyPatientService;
import com.baomidou.mybatisplus.mapper.Wrapper;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 患者管理控制器
 *
 * @author fengshuonan
 * @Date 2018-11-07 20:13:46
 */
@Controller
@RequestMapping("/yjyPatient")
public class YjyPatientController extends BaseController {

    private String PREFIX = "/patient/yjyPatient/";

    @Autowired
    private IYjyPatientService yjyPatientService;

    /**
     * 跳转到患者管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "yjyPatient.html";
    }

    /**
     * 跳转到添加患者管理
     */
    @RequestMapping("/yjyPatient_add")
    public String yjyPatientAdd() {
        return PREFIX + "yjyPatient_add.html";
    }

    /**
     * 跳转到修改患者管理
     */
    @RequestMapping("/yjyPatient_update/{yjyPatientId}")
    public String yjyPatientUpdate(@PathVariable Integer yjyPatientId, Model model) {
        YjyPatient yjyPatient = yjyPatientService.selectById(yjyPatientId);
        model.addAttribute("item",yjyPatient);
        LogObjectHolder.me().set(yjyPatient);
        return PREFIX + "yjyPatient_edit.html";
    }

    /**
     * 跳转到修改患者管理
     */
    @RequestMapping("/yjyPatient_view/{yjyPatientId}")
    public String yjyPatientView(@PathVariable Integer yjyPatientId, Model model) {
        YjyPatient yjyPatient = yjyPatientService.selectById(yjyPatientId);
        model.addAttribute("item",yjyPatient);
        LogObjectHolder.me().set(yjyPatient);
        return PREFIX + "yjyPatient_view.html";
    }


    /**
     * 获取患者管理列表
     */
//    @RequestMapping(value = "/list")
//    @ResponseBody
//    public Object list(String condition) {
//        //判断condition的值是否为空，非空时按照工号查询
//        if(ToolUtil.isEmpty(condition)){
//            return yjyPatientService.selectList(null);
//        }else {
//            //如果condition非空，按照工号进行模糊查询
//            EntityWrapper<YjyPatient> entityWrapper = new EntityWrapper<>();
//            Wrapper wrapper = entityWrapper.like("code",condition);
//            return yjyPatientService.selectList(wrapper);
//        }
//
//
//        //return yjyPatientService.selectList(null);
//    }
    @RequestMapping("/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String code) {

        List<Map<String, Object>> patients = yjyPatientService.selectPatients(code,null);
        for(Map<String,Object> map:patients){
            System.out.println("likang"+map);
        }
       List<Map<String, Object>> patients_new = ( List<Map<String, Object>>)new PatientWarpper(patients).warp();//多加了一个sexName
        for(Map<String,Object> map:patients_new){
            System.out.println("李康"+map);
        }
        return patients_new;

    }
    /**
     * 新增患者管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(YjyPatient yjyPatient) {

        yjyPatient.setCreationTime(new Date());
        yjyPatient.setModifiedTime(new Date());
//        yjyPatient.setCode(yjyPatientService.getCode());
        yjyPatientService.insert(yjyPatient);
        return SUCCESS_TIP;
    }

    /**
     * 删除患者管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer yjyPatientId) {
        yjyPatientService.deleteById(yjyPatientId);
        return SUCCESS_TIP;
    }

    /**
     * 修改患者管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(YjyPatient yjyPatient) {
        yjyPatient.setModifiedTime(new Date());
        yjyPatientService.updateById(yjyPatient);
        return SUCCESS_TIP;
    }

    /**
     * 患者管理详情
     */
    @RequestMapping(value = "/detail/{yjyPatientId}")
    @ResponseBody
    public Object detail(@PathVariable("yjyPatientId") Integer yjyPatientId) {
        return yjyPatientService.selectById(yjyPatientId);
    }
}

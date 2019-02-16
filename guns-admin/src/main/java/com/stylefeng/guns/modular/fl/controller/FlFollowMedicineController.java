package com.stylefeng.guns.modular.fl.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.FlFollowMedicine;
import com.stylefeng.guns.modular.fl.service.IFlFollowMedicineService;

/**
 * 随访服药情况控制器
 *
 * @author fengshuonan
 * @Date 2018-11-21 10:40:10
 */
@Controller
@RequestMapping("/flFollowMedicine")
public class FlFollowMedicineController extends BaseController {

    private String PREFIX = "/fl/flFollowMedicine/";

    @Autowired
    private IFlFollowMedicineService flFollowMedicineService;

    /**
     * 跳转到随访服药情况首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "flFollowMedicine.html";
    }

    /**
     * 跳转到添加随访服药情况
     */
    @RequestMapping("/flFollowMedicine_add")
    public String flFollowMedicineAdd() {
        return PREFIX + "flFollowMedicine_add.html";
    }

    /**
     * 跳转到修改随访服药情况
     */
    @RequestMapping("/flFollowMedicine_update/{flFollowMedicineId}")
    public String flFollowMedicineUpdate(@PathVariable Integer flFollowMedicineId, Model model) {
        FlFollowMedicine flFollowMedicine = flFollowMedicineService.selectById(flFollowMedicineId);
        model.addAttribute("item",flFollowMedicine);
        LogObjectHolder.me().set(flFollowMedicine);
        return PREFIX + "flFollowMedicine_edit.html";
    }

    /**
     * 获取随访服药情况列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return flFollowMedicineService.selectList(null);
    }

    /**
     * 新增随访服药情况
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(FlFollowMedicine flFollowMedicine) {
        flFollowMedicineService.insert(flFollowMedicine);
        return SUCCESS_TIP;
    }

    /**
     * 删除随访服药情况
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer flFollowMedicineId) {
        flFollowMedicineService.deleteById(flFollowMedicineId);
        return SUCCESS_TIP;
    }

    /**
     * 修改随访服药情况
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(FlFollowMedicine flFollowMedicine) {
        flFollowMedicineService.updateById(flFollowMedicine);
        return SUCCESS_TIP;
    }

    /**
     * 随访服药情况详情
     */
    @RequestMapping(value = "/detail/{flFollowMedicineId}")
    @ResponseBody
    public Object detail(@PathVariable("flFollowMedicineId") Integer flFollowMedicineId) {
        return flFollowMedicineService.selectById(flFollowMedicineId);
    }
}

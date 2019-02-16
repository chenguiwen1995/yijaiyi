package com.stylefeng.guns.modular.medicine.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Medicine;
import com.stylefeng.guns.modular.medicine.service.IMedicineService;

/**
 * 药品控制器
 *
 * @author fengshuonan
 * @Date 2018-09-28 17:01:18
 */
@Controller
@RequestMapping("/medicine")
public class MedicineController extends BaseController {

    private String PREFIX = "/basedoc/medicine/";

    @Autowired
    private IMedicineService medicineService;

    /**
     * 跳转到药品首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "medicine.html";
    }

    /**
     * 跳转到添加药品
     */
    @RequestMapping("/medicine_add")
    public String medicineAdd() {
        return PREFIX + "medicine_add.html";
    }

    /**
     * 跳转到修改药品
     */
    @RequestMapping("/medicine_update/{medicineId}")
    public String medicineUpdate(@PathVariable Integer medicineId, Model model) {
        Medicine medicine = medicineService.selectById(medicineId);
        model.addAttribute("item",medicine);
        LogObjectHolder.me().set(medicine);
        return PREFIX + "medicine_edit.html";
    }

    /**
     * 获取药品列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        if (condition == null){
            return medicineService.selectList(null);
        }else {
            EntityWrapper<Medicine> entityWrapper = new EntityWrapper<>();
            Wrapper wrapper = entityWrapper.like("name",condition);
            return medicineService.selectList(wrapper);
        }

    }

    /**
     * 新增药品
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Medicine medicine) {
        medicineService.insert(medicine);
        return SUCCESS_TIP;
    }

    /**
     * 删除药品
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer medicineId) {
        medicineService.deleteById(medicineId);
        return SUCCESS_TIP;
    }

    /**
     * 修改药品
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Medicine medicine) {
        medicineService.updateById(medicine);
        return SUCCESS_TIP;
    }

    /**
     * 药品详情
     */
    @RequestMapping(value = "/detail/{medicineId}")
    @ResponseBody
    public Object detail(@PathVariable("medicineId") Integer medicineId) {
        return medicineService.selectById(medicineId);
    }
}

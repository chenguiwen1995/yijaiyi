package com.stylefeng.guns.modular.doctor.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.system.model.Doctor;
import com.stylefeng.guns.modular.system.warpper.DoctorWarpper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.doctor.service.IDoctorService;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 医生控制器
 *
 * @author fengshuonan
 * @Date 2018-09-27 19:30:42
 */
@Controller
@RequestMapping("/doctor")
public class DoctorController extends BaseController {

    private String PREFIX = "/basedoc/doctor/";

    @Autowired
    private IDoctorService yjyDoctorService;

    /**
     * 跳转到医生首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "doctor.html";
    }

    /**
     * 跳转到添加医生
     */
    @RequestMapping("/doctor_add")
    public String yjyDoctorAdd() {
        return PREFIX + "doctor_add.html";
    }

    /**
     * 跳转到修改医生
     */
    @RequestMapping("/doctor_update/{yjyDoctorId}")
    public String yjyDoctorUpdate(@PathVariable Integer yjyDoctorId, Model model) {
        Doctor doctor = yjyDoctorService.selectById(yjyDoctorId);
        model.addAttribute("item", doctor);
        LogObjectHolder.me().set(doctor);
        return PREFIX + "doctor_edit.html";
    }

    /**
     * 获取医生列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String code) {

        List<Map<String, Object>> doctors = yjyDoctorService.selectDoctors(code,null);
        for(Map<String,Object> map:doctors){
            System.out.println(map);
        }
        List<Map<String, Object>> doctors_new = ( List<Map<String, Object>>)new DoctorWarpper(doctors).warp();
        for(Map<String,Object> map:doctors_new){
            System.out.println(map);
        }
        return doctors_new;

    }

    /**
     * 新增医生
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Doctor doctor) {
        yjyDoctorService.insert(doctor);
        return SUCCESS_TIP;
    }

    /**
     * 删除医生
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer yjyDoctorId) {
        yjyDoctorService.deleteById(yjyDoctorId);
        return SUCCESS_TIP;
    }

    /**
     * 修改医生
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Doctor doctor) {

        doctor.setModifiedTime(new Date());
        doctor.setTs(new Date());
        this.yjyDoctorService.updateById(doctor);
        return SUCCESS_TIP;
    }

    /**
     * 医生详情
     */
    @RequestMapping(value = "/detail/{yjyDoctorId}")
    @ResponseBody
    public Object detail(@PathVariable("yjyDoctorId") Integer yjyDoctorId) {
        return yjyDoctorService.selectById(yjyDoctorId);
    }
}

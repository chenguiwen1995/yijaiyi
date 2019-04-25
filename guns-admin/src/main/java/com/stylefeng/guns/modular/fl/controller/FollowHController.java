package com.stylefeng.guns.modular.fl.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.util.ToolUtil;
import com.stylefeng.guns.modular.fl.service.*;
import com.stylefeng.guns.modular.system.model.Follow;
import com.stylefeng.guns.modular.system.model.FollowFeatures;
import com.stylefeng.guns.modular.system.model.FlFollowEvent;
import com.stylefeng.guns.modular.system.model.FlFollowMedicine;
import com.stylefeng.guns.modular.system.model.FlFollowResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.modular.system.model.FollowH;


import java.util.List;

/**
 * 随访单控制器
 *
 * @author fengshuonan
 * @Date 2018-10-29 14:23:26
 */
@Controller
@RequestMapping("/followH")
public class FollowHController extends BaseController {

    private String PREFIX = "/fl/followH/";

    @Autowired
    private IFollowHService followHService;

    @Autowired
    private IFollowFeaturesService followFeaturesService;

    @Autowired
    private IFlFollowEventService flFollowEventService;

    @Autowired
    private IFlFollowResultService flFollowResultService;

    @Autowired
    private IFlFollowMedicineService flFollowMedicineService;

    /**
     * 跳转到随访单首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "followH.html";
    }

    /**
     * 跳转到添加随访单
     */
    @RequestMapping("/followH_add")
    public String followHAdd() {
        return PREFIX + "followH_add.html";
    }

    /**
     * 跳转到修改随访单
     */
    @RequestMapping("/followH_update/{followHId}")
    public String followHUpdate(@PathVariable Integer followHId, Model model) {
        FollowH followH = followHService.selectById(followHId);
        model.addAttribute("item",followH);
        LogObjectHolder.me().set(followH);
        return PREFIX + "followH_edit.html";
    }

    /**
     * 获取随访单列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        //判断condition的值是否为空，非空时按照工号查询
        if(ToolUtil.isEmpty(condition)){
            return followHService.selectList(null);
        }else {
            //如果condition非空，按照工号进行模糊查询
            EntityWrapper<FollowH> entityWrapper = new EntityWrapper<>();
            Wrapper wrapper = entityWrapper.like("patient_name",condition);
            return followHService.selectList(wrapper);
        }
    }

    /**
     * 新增随访单
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(FollowH followH) {
        followHService.insert(followH);
        return SUCCESS_TIP;
    }

    /**
     * 删除随访单
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer followHId) {
        followHService.deleteById(followHId);
        return SUCCESS_TIP;
    }

    /**
     * 修改随访单
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(FollowH followH) {
        followHService.updateById(followH);
        return SUCCESS_TIP;
    }

    /**
     * 随访单详情
     */
    @RequestMapping(value = "/detail/{followHId}")
    @ResponseBody
    public Object detail(@PathVariable("followHId") Integer followHId) {
        return followHService.selectById(followHId);
    }

    /**
     * 跳转到详情页
     */
    @RequestMapping("/followH_view/{followId}")
    public String followHView(@PathVariable Integer followId, Model model) {
        FollowH followH = followHService.selectById(followId);
        System.out.println("abcde:::::"+followId);
        List<FollowFeatures> followFeaturesList = followFeaturesService.selectByPId(followId);
        FlFollowEvent flFollowEvent = flFollowEventService.selectById(followId);
        FlFollowMedicine flFollowMedicine = flFollowMedicineService.selectById(followId);
        FlFollowResult flFollowResult = flFollowResultService.selectById(followId);
        Follow follow = new Follow();
//        follow.setFollowH(followH);
//        if (null != followFeaturesList && 0 != followFeaturesList.size()){
//            follow.setFollowFeatures(followFeaturesList.get(0));
//        }
//        if (null != flFollowEvent ){
//            follow.setFlFollowEvent(flFollowEvent);
//        }
//        if (null != flFollowMedicine ){
//            follow.setFlFollowMedicine(flFollowMedicine);
//        }
//        if (null != flFollowResult ){
//            follow.setFlFollowResult(flFollowResult);
//        }
        model.addAttribute("item",follow);
        LogObjectHolder.me().set(follow);
        return PREFIX + "followH_view.html";
    }


    /**
     * 跳转到修改页
     */
    @RequestMapping("/followH_edit/{followId}")
    public String followHEdit(@PathVariable Integer followId, Model model) {
        FollowH followH = followHService.selectById(followId);
        List<FollowFeatures> followFeaturesList = followFeaturesService.selectByPId(followId);
        FlFollowEvent flFollowEvent = flFollowEventService.selectById(followId);
        FlFollowMedicine flFollowMedicine = flFollowMedicineService.selectById(followId);
        FlFollowResult flFollowResult = flFollowResultService.selectById(followId);
        Follow follow = new Follow();
//        follow.setFollowH(followH);
//        if (null != followFeaturesList && 0 != followFeaturesList.size()){
//            follow.setFollowFeatures(followFeaturesList.get(0));
//        }
//        if (null != flFollowEvent ){
//            follow.setFlFollowEvent(flFollowEvent);
//        }
//        if (null != flFollowMedicine ){
//            follow.setFlFollowMedicine(flFollowMedicine);
//        }
//        if (null != flFollowResult ){
//            follow.setFlFollowResult(flFollowResult);
//        }
        model.addAttribute("item",follow);
        LogObjectHolder.me().set(follow);
        return PREFIX + "followH_edit.html";
    }

}

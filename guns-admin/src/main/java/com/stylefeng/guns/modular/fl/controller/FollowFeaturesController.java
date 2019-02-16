package com.stylefeng.guns.modular.fl.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.util.ToolUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.FollowFeatures;
import com.stylefeng.guns.modular.fl.service.IFollowFeaturesService;

/**
 * 随访表体征页签控制器
 *
 * @author fengshuonan
 * @Date 2018-11-05 18:43:33
 */
@Controller
@RequestMapping("/followFeatures")
public class FollowFeaturesController extends BaseController {

    private String PREFIX = "/fl/followFeatures/";

    @Autowired
    private IFollowFeaturesService followFeaturesService;

    /**
     * 跳转到随访表体征页签首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "followFeatures.html";
    }

    /**
     * 跳转到添加随访表体征页签
     */
    @RequestMapping("/followFeatures_add")
    public String followFeaturesAdd() {
        return PREFIX + "followFeatures_add.html";
    }

    /**
     * 跳转到修改随访表体征页签
     */
    @RequestMapping("/followFeatures_update/{followFeaturesId}")
    public String followFeaturesUpdate(@PathVariable Integer followFeaturesId, Model model) {
        FollowFeatures followFeatures = followFeaturesService.selectById(followFeaturesId);
        model.addAttribute("item",followFeatures);
        LogObjectHolder.me().set(followFeatures);
        return PREFIX + "followFeatures_edit.html";
    }

    /**
     * 获取随访表体征页签列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        //判断condition的值是否为空，非空时按照工号查询
        if(ToolUtil.isEmpty(condition)){
            return followFeaturesService.selectList(null);
        }else {
            //如果condition非空，按照工号进行模糊查询
            EntityWrapper<FollowFeatures> entityWrapper = new EntityWrapper<>();
            Wrapper wrapper = entityWrapper.like("code",condition);
            return followFeaturesService.selectList(wrapper);
        }
    }

    /**
     * 新增随访表体征页签
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(FollowFeatures followFeatures) {
        followFeaturesService.insert(followFeatures);
        return SUCCESS_TIP;
    }

    /**
     * 删除随访表体征页签
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer followFeaturesId) {
        followFeaturesService.deleteById(followFeaturesId);
        return SUCCESS_TIP;
    }

    /**
     * 修改随访表体征页签
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(FollowFeatures followFeatures) {
        followFeaturesService.updateById(followFeatures);
        return SUCCESS_TIP;
    }

    /**
     * 随访表体征页签详情
     */
    @RequestMapping(value = "/detail/{followFeaturesId}")
    @ResponseBody
    public Object detail(@PathVariable("followFeaturesId") Integer followFeaturesId) {
        return followFeaturesService.selectById(followFeaturesId);
    }
}

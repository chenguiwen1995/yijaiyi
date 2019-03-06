package com.stylefeng.guns.modular.follow.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Pulhyfollow;
import com.stylefeng.guns.modular.follow.service.IPulhyfollowService;

/**
 * pulhyFollow控制器
 *
 * @author fengshuonan
 * @Date 2019-03-06 15:06:46
 */
@Controller
@RequestMapping("/pulhyfollow")
public class PulhyfollowController extends BaseController {

    private String PREFIX = "/follow/pulhyfollow/";

    @Autowired
    private IPulhyfollowService pulhyfollowService;

    /**
     * 跳转到pulhyFollow首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "pulhyfollow.html";
    }

    /**
     * 跳转到添加pulhyFollow
     */
    @RequestMapping("/pulhyfollow_add")
    public String pulhyfollowAdd() {
        return PREFIX + "pulhyfollow_add.html";
    }

    /**
     * 跳转到修改pulhyFollow
     */
    @RequestMapping("/pulhyfollow_update/{pulhyfollowId}")
    public String pulhyfollowUpdate(@PathVariable Integer pulhyfollowId, Model model) {
        Pulhyfollow pulhyfollow = pulhyfollowService.selectById(pulhyfollowId);
        model.addAttribute("item",pulhyfollow);
        LogObjectHolder.me().set(pulhyfollow);
        return PREFIX + "pulhyfollow_edit.html";
    }

    /**
     * 获取pulhyFollow列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return pulhyfollowService.selectList(null);
    }

    /**
     * 新增pulhyFollow
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Pulhyfollow pulhyfollow) {
        pulhyfollowService.insert(pulhyfollow);
        return SUCCESS_TIP;
    }

    /**
     * 删除pulhyFollow
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer pulhyfollowId) {
        pulhyfollowService.deleteById(pulhyfollowId);
        return SUCCESS_TIP;
    }

    /**
     * 修改pulhyFollow
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Pulhyfollow pulhyfollow) {
        pulhyfollowService.updateById(pulhyfollow);
        return SUCCESS_TIP;
    }

    /**
     * pulhyFollow详情
     */
    @RequestMapping(value = "/detail/{pulhyfollowId}")
    @ResponseBody
    public Object detail(@PathVariable("pulhyfollowId") Integer pulhyfollowId) {
        return pulhyfollowService.selectById(pulhyfollowId);
    }
}

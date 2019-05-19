package com.stylefeng.guns.modular.follow.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.common.billcode.impl.FollowGeneratorImpl;
import com.stylefeng.guns.core.shiro.ShiroUser;
import com.stylefeng.guns.modular.system.service.IUserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Follow;
import com.stylefeng.guns.modular.follow.service.IFollowService;

import java.time.format.DateTimeParseException;
import java.util.Date;

import java.util.List;

/**
 * follow控制器
 *
 * @author fengshuonan
 * @Date 2019-04-18 19:33:34
 */
@Controller
@RequestMapping("/follow")
public class FollowController extends BaseController {

    private String PREFIX = "/follow/follow/";

    @Autowired
    private IFollowService followService;

    @Autowired
    private FollowGeneratorImpl followGenerator;

    @Autowired
    private IUserService iUserService;

    /**
     * 跳转到follow首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "follow.html";
    }

    /**
     * 跳转到添加follow
     */
    @RequestMapping("/follow_add")
    public String followAdd() {
        return PREFIX + "follow_add.html";
    }

    /**
     * 跳转到修改follow
     */
    @RequestMapping("/follow_update/{followId}")
    public String followUpdate(@PathVariable Integer followId, Model model) {
        Follow follow = followService.selectById(followId);
        model.addAttribute("item",follow);
        LogObjectHolder.me().set(follow);
        return PREFIX + "follow_edit.html";
    }

    /**
     * 获取follow列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return followService.selectList(null);
    }

    /**
     * 新增follow
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Follow follow) {
        Date date = new Date();
        follow.setCreationTime(date);
        follow.setTs(date);
        if(null != follow){
            String code = followGenerator.getCode();
            follow.setCode(code);
            ShiroUser user = iUserService.getCurrentUser();
            follow.setDepartment(user.deptId);
            follow.setCreator(user.id);
        }

        followService.insert(follow);
        return SUCCESS_TIP;
    }

    /**
     * 删除follow
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer followId) {
        followService.deleteById(followId);
        return SUCCESS_TIP;
    }

    /**
     * 修改follow
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Follow follow) {
        followService.updateById(follow);
        return SUCCESS_TIP;
    }

    /**
     * follow详情
     */
    @RequestMapping(value = "/detail/{followId}")
    @ResponseBody
    public Object detail(@PathVariable("followId") Integer followId) {
        return followService.selectById(followId);
    }

    /**
     * 跳转到详情页
     * 添加详情页时，需要加这部分
     */
    @RequestMapping("/follow_view/{followId}")
    public String followView(@PathVariable Integer followId, Model model) {
        Follow follow = followService.selectById(followId);
        model.addAttribute("item",follow);
        LogObjectHolder.me().set(follow);
        return PREFIX + "follow_view.html";
    }
}

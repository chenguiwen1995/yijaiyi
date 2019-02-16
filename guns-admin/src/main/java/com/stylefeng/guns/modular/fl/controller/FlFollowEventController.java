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
import com.stylefeng.guns.modular.system.model.FlFollowEvent;
import com.stylefeng.guns.modular.fl.service.IFlFollowEventService;

/**
 * 临床恶化事件控制器
 *
 * @author fengshuonan
 * @Date 2018-11-20 16:57:50
 */
@Controller
@RequestMapping("/flFollowEvent")
public class FlFollowEventController extends BaseController {

    private String PREFIX = "/fl/flFollowEvent/";

    @Autowired
    private IFlFollowEventService flFollowEventService;

    /**
     * 跳转到临床恶化事件首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "flFollowEvent.html";
    }

    /**
     * 跳转到添加临床恶化事件
     */
    @RequestMapping("/flFollowEvent_add")
    public String flFollowEventAdd() {
        return PREFIX + "flFollowEvent_add.html";
    }

    /**
     * 跳转到修改临床恶化事件
     */
    @RequestMapping("/flFollowEvent_update/{flFollowEventId}")
    public String flFollowEventUpdate(@PathVariable Integer flFollowEventId, Model model) {
        FlFollowEvent flFollowEvent = flFollowEventService.selectById(flFollowEventId);
        model.addAttribute("item",flFollowEvent);
        LogObjectHolder.me().set(flFollowEvent);
        return PREFIX + "flFollowEvent_edit.html";
    }

    /**
     * 获取临床恶化事件列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return flFollowEventService.selectList(null);
    }

    /**
     * 新增临床恶化事件
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(FlFollowEvent flFollowEvent) {
        flFollowEventService.insert(flFollowEvent);
        return SUCCESS_TIP;
    }

    /**
     * 删除临床恶化事件
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer flFollowEventId) {
        flFollowEventService.deleteById(flFollowEventId);
        return SUCCESS_TIP;
    }

    /**
     * 修改临床恶化事件
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(FlFollowEvent flFollowEvent) {
        flFollowEventService.updateById(flFollowEvent);
        return SUCCESS_TIP;
    }

    /**
     * 临床恶化事件详情
     */
    @RequestMapping(value = "/detail/{flFollowEventId}")
    @ResponseBody
    public Object detail(@PathVariable("flFollowEventId") Integer flFollowEventId) {
        return flFollowEventService.selectById(flFollowEventId);
    }
}

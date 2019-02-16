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
import com.stylefeng.guns.modular.system.model.FlFollowResult;
import com.stylefeng.guns.modular.fl.service.IFlFollowResultService;

/**
 * 随访结果控制器
 *
 * @author fengshuonan
 * @Date 2018-11-21 10:45:09
 */
@Controller
@RequestMapping("/flFollowResult")
public class FlFollowResultController extends BaseController {

    private String PREFIX = "/fl/flFollowResult/";

    @Autowired
    private IFlFollowResultService flFollowResultService;

    /**
     * 跳转到随访结果首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "flFollowResult.html";
    }

    /**
     * 跳转到添加随访结果
     */
    @RequestMapping("/flFollowResult_add")
    public String flFollowResultAdd() {
        return PREFIX + "flFollowResult_add.html";
    }

    /**
     * 跳转到修改随访结果
     */
    @RequestMapping("/flFollowResult_update/{flFollowResultId}")
    public String flFollowResultUpdate(@PathVariable Integer flFollowResultId, Model model) {
        FlFollowResult flFollowResult = flFollowResultService.selectById(flFollowResultId);
        model.addAttribute("item",flFollowResult);
        LogObjectHolder.me().set(flFollowResult);
        return PREFIX + "flFollowResult_edit.html";
    }

    /**
     * 获取随访结果列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return flFollowResultService.selectList(null);
    }

    /**
     * 新增随访结果
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(FlFollowResult flFollowResult) {
        flFollowResultService.insert(flFollowResult);
        return SUCCESS_TIP;
    }

    /**
     * 删除随访结果
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer flFollowResultId) {
        flFollowResultService.deleteById(flFollowResultId);
        return SUCCESS_TIP;
    }

    /**
     * 修改随访结果
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(FlFollowResult flFollowResult) {
        flFollowResultService.updateById(flFollowResult);
        return SUCCESS_TIP;
    }

    /**
     * 随访结果详情
     */
    @RequestMapping(value = "/detail/{flFollowResultId}")
    @ResponseBody
    public Object detail(@PathVariable("flFollowResultId") Integer flFollowResultId) {
        return flFollowResultService.selectById(flFollowResultId);
    }
}

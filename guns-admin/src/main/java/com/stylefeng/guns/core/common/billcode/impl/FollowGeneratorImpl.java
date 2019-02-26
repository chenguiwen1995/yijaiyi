package com.stylefeng.guns.core.common.billcode.impl;

import com.stylefeng.guns.core.common.billcode.Generator;
import com.stylefeng.guns.modular.fl.service.IFollowHService;
import com.stylefeng.guns.modular.system.model.Follow;
import com.stylefeng.guns.modular.system.model.FollowH;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FollowGeneratorImpl {


    @Autowired
    private IFollowHService iFollowHService;

    @Autowired
    private Generator generator;

    public String getCode() {
        List<FollowH> list = this.iFollowHService.selectList(null);
        String lastCode = null;
        if (null == list || 0 == list.size()){
            lastCode = null;
        }else {
            lastCode = list.get(list.size()-1).getCode();
        }
        return generator.getInstance().generaterNextNumber(lastCode,"SF");
    }

}

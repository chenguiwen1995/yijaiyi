package com.stylefeng.guns.core.common.billcode.impl;

import com.stylefeng.guns.core.common.billcode.Generator;
import com.stylefeng.guns.modular.cteph.service.ICtephService;
import com.stylefeng.guns.modular.system.model.Cteph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author chenguiwen
 * */

@Component
public class CTEPHGeneratorImpl extends Generator {

    @Autowired
    private ICtephService iCtephService;

    @Autowired
    private Generator generator;

    public String getCode() {
        List<Cteph> list = this.iCtephService.selectList(null);
        String lastCode = null;
        if (null == list || 0 == list.size()){
            lastCode = null;
        }else {
            lastCode = list.get(list.size()-1).getCode();
        }
        return generator.getInstance().generaterNextNumber(lastCode,"CTE");
    }

}

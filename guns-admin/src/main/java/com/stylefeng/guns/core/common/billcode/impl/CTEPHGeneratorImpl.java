package com.stylefeng.guns.core.common.billcode.impl;

import com.stylefeng.guns.core.common.billcode.Generator;
import com.stylefeng.guns.core.common.billcode.IGenerator;
import com.stylefeng.guns.modular.cteph.service.ICtephService;
import com.stylefeng.guns.modular.system.model.Cteph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class CTEPHGeneratorImpl extends IGenerator {

    @Autowired
    private ICtephService iCtephService;

    @Override
    public String getCode() {
        List<Cteph> list = this.iCtephService.selectList(null);
        String lastCode = null;
        if (null == list || 0 == list.size()){
            lastCode = null;
        }else {
            lastCode = list.get(list.size()-1).getCode();
        }
        return Generator.getInstance().generaterNextNumber(lastCode);
    }

}

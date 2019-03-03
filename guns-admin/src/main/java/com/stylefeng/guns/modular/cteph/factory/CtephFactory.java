package com.stylefeng.guns.modular.cteph.factory;

import com.stylefeng.guns.modular.cteph.transfer.CtephDto;
import com.stylefeng.guns.modular.system.model.Cteph;
import org.springframework.beans.BeanUtils;

/**
 * Created by chenguiwen on 2019.03.03
 */
public class CtephFactory {


    public static Cteph createCteph(CtephDto ctephDto) {
        if (ctephDto == null) {
            return null;
        } else {
            Cteph cteph = new Cteph();
            BeanUtils.copyProperties(ctephDto, cteph);
            return cteph;
        }
    }

}

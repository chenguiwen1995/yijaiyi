package com.stylefeng.guns.modular.system.warpper;

import com.stylefeng.guns.core.base.warpper.BaseControllerWarpper;
import com.stylefeng.guns.core.common.constant.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

public class DoctorWarpper extends BaseControllerWarpper {


    public DoctorWarpper(List<Map<String, Object>> list) {
        super(list);
    }

    @Override
    protected void warpTheMap(Map<String, Object> map) {
        map.put("sexName", ConstantFactory.me().getSexName((Integer) map.get("sex")));
    }
}

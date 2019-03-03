package com.stylefeng.guns.modular.cteph.warpper;

import com.stylefeng.guns.core.base.warpper.BaseControllerWarpper;
import com.stylefeng.guns.core.common.constant.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

/**
 * Created by chenguiwen on 2019.03.03
 */
public class CtephWarpper extends BaseControllerWarpper {

    public CtephWarpper(List<Map<String, Object>> list){
        super(list);
    }

    @Override
    protected void warpTheMap(Map<String, Object> map) {
        map.put("sexName", ConstantFactory.me().getSexName((Integer) map.get("patient_sex")));//likang+
        map.put("departmentName", ConstantFactory.me().getDeptName((Integer) map.get("department")));
        map.put("fillingpersonName", ConstantFactory.me().getUserNameById((Integer) map.get("fillingperson")));
    }
}

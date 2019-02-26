package com.stylefeng.guns.modular.patient.service.impl;

import com.stylefeng.guns.modular.system.model.YjyPatient;
import com.stylefeng.guns.modular.system.dao.YjyPatientMapper;
import com.stylefeng.guns.modular.patient.service.IYjyPatientService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 患者管理表 服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-07
 */
@Service
public class YjyPatientServiceImpl extends ServiceImpl<YjyPatientMapper, YjyPatient> implements IYjyPatientService {

    @Resource
    private YjyPatientMapper YjyPatientMapper;

    @Override
    public void deleteById(Integer yjyPatientId){
        YjyPatientMapper.deletePatient(yjyPatientId.intValue());
    }

    @Override
    public List<Map<String, Object>> selectPatients(String code, String name) {
        return YjyPatientMapper.selectPatients(code, name);
    }
}

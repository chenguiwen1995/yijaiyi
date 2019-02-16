package com.stylefeng.guns.modular.doctor.service.impl;

import com.stylefeng.guns.core.common.billcode.Generator;
import com.stylefeng.guns.modular.system.model.Doctor;
import com.stylefeng.guns.modular.system.dao.DoctorMapper;
import com.stylefeng.guns.modular.doctor.service.IDoctorService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author chengw
 * @since 2018-09-27
 */
@Service
public class DoctorServiceImpl extends ServiceImpl<DoctorMapper, Doctor> implements IDoctorService {

    @Resource
    private DoctorMapper doctorMapper;

//    @Override
//    public void deleteById(Integer yjyDoctorId) {
//        doctorMapper.deleteById(yjyDoctorId.intValue());
//    }

    @Override
    public List<Map<String, Object>> selectDoctors(String code, String name) {
        return doctorMapper.selectDoctors(code,name);
    }
}

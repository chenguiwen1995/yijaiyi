package com.stylefeng.guns.modular.patient.service;

import com.stylefeng.guns.modular.system.model.YjyPatient;
import com.baomidou.mybatisplus.service.IService;
import com.baomidou.mybatisplus.mapper.Wrapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 患者管理表 服务类
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-07
 */
public interface IYjyPatientService extends IService<YjyPatient> {
    void deleteById(@Param("id") Integer yjyPatientId);
    List<Map<String, Object>> selectPatients(@Param("code") String code, @Param("name") String name);
    //List selectList(Wrapper wrapper);
}

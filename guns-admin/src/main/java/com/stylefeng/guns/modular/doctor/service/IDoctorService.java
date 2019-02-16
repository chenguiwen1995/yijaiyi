package com.stylefeng.guns.modular.doctor.service;

import com.stylefeng.guns.modular.system.model.Doctor;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author chengw
 * @since 2018-09-27
 */
public interface IDoctorService extends IService<Doctor> {

    List<Map<String, Object>> selectDoctors(@Param("code") String code, @Param("name") String name);

}

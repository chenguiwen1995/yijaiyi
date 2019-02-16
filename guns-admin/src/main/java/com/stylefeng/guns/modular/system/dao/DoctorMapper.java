package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.modular.system.model.Doctor;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author chengw
 * @since 2018-09-27
 */
public interface DoctorMapper extends BaseMapper<Doctor> {

    /**
     * 批量查询
     * */
    List<Doctor> queryDoctor();

    /**
     *主键查询
     * */
    Doctor queryDoctorById(int DoctorId);

    /**
     * 插入用户
     * */
    int insertDoctor(Doctor Doctor);

    /**
     * 修改用户
     * */
    int updateDoctor(Doctor Doctor);

    /**
     * 删除用户
     * */
    int deleteDoctor(int DoctorId);

    /**
     * 模糊查询
     * */
    List<Map<String, Object>> selectDoctors(@Param("code") String code, @Param("name") String name);

    /**
     * 根据主键删除
     * */
//    void deleteById(@Param("id") int id);

}

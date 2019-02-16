package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.core.datascope.DataScope;
import com.stylefeng.guns.modular.system.model.Doctor;
import com.stylefeng.guns.modular.system.model.YjyPatient;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 患者管理表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-07
 */
public interface YjyPatientMapper extends BaseMapper<YjyPatient> {
    /**
     * 批量查询
     * */
    List<YjyPatient> queryPatient();

    /**
     *主键查询
     * */
    Doctor queryPatientById(int PatientId);

    /**
     * 插入用户
     * */
    int insertPatient(YjyPatient patient);

    /**
     * 修改用户
     * */
    int updatePatient(YjyPatient patient);

    /**
     * 删除用户
     * */
    int deletePatient(@Param("id") int id);


    /**
     * 根据条件查询用户列表
     */
    List<Map<String, Object>> selectPatients(@Param("code") String code, @Param("name") String name);
}

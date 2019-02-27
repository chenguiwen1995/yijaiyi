package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.modular.system.model.Cteph;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author chenguiwen
 * @since 2019-02-23
 */
public interface CtephMapper extends BaseMapper<Cteph> {
    /**
     * 根据条件查询用户列表
     */
    List<Map<String, Object>> selectCtephs(@Param("patient_name") String patient_name);
}

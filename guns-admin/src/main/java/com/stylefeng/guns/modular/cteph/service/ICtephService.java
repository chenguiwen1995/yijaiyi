package com.stylefeng.guns.modular.cteph.service;

import com.stylefeng.guns.modular.system.model.Cteph;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author chenguiwen
 * @since 2019-02-23
 */
public interface ICtephService extends IService<Cteph> {
    List<Map<String, Object>> selectCtephs(@Param("department") Integer department,@Param("patient_name") String patient_name);
    boolean updateById(Cteph cteph);
}

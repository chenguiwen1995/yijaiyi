package com.stylefeng.guns.modular.system.dao;

import com.stylefeng.guns.modular.system.model.FollowFeatures;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author chengw
 * @since 2018-11-05
 */
public interface FollowFeaturesMapper extends BaseMapper<FollowFeatures> {

    List<FollowFeatures> selectByPId(@Param("followId")Integer followId);

}

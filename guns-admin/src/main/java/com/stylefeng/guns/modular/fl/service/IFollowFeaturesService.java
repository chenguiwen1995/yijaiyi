package com.stylefeng.guns.modular.fl.service;

import com.stylefeng.guns.modular.system.model.FollowFeatures;
import com.baomidou.mybatisplus.service.IService;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author chengw
 * @since 2018-11-05
 */
public interface IFollowFeaturesService extends IService<FollowFeatures> {

    List<FollowFeatures> selectByPId(Integer followId);

}

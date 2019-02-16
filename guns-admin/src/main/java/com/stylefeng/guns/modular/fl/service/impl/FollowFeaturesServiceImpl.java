package com.stylefeng.guns.modular.fl.service.impl;

import com.stylefeng.guns.modular.system.model.FollowFeatures;
import com.stylefeng.guns.modular.system.dao.FollowFeaturesMapper;
import com.stylefeng.guns.modular.fl.service.IFollowFeaturesService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author chengw
 * @since 2018-11-05
 */
@Service
public class FollowFeaturesServiceImpl extends ServiceImpl<FollowFeaturesMapper, FollowFeatures> implements IFollowFeaturesService {

    @Override
    public boolean insert(FollowFeatures entity) {
        if (null == entity){
            return false;
        }
        entity.setCreationTime(new Date());
        entity.setTs(new Date());
        entity.setDr(0);
        return super.insert(entity);
    }


    @Override
    public boolean updateById(FollowFeatures entity) {
        if (null == entity){
            return false;
        }
        entity.setModifiedTime(new Date());
        entity.setTs(new Date());
        return super.updateById(entity);
    }

    @Override
    public List<FollowFeatures> selectByPId(Integer followId) {
        if (null == followId){
            return null;
        }else{
            return this.baseMapper.selectByPId(followId);
        }
    }
}

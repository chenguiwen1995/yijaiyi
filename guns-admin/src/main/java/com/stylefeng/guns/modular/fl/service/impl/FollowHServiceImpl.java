package com.stylefeng.guns.modular.fl.service.impl;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.common.billcode.Generator;
import com.stylefeng.guns.modular.system.model.FollowH;
import com.stylefeng.guns.modular.system.dao.FollowHMapper;
import com.stylefeng.guns.modular.fl.service.IFollowHService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author chengw
 * @since 2018-10-29
 */
@Service
public class FollowHServiceImpl extends ServiceImpl<FollowHMapper, FollowH> implements IFollowHService {

    @Override
    public List<FollowH> selectList(Wrapper<FollowH> wrapper) {
        return this.baseMapper.selectList(wrapper);
    }

    @Override
    public boolean insert(FollowH entity) {
        if (null == entity){
            return false;
        }
        entity.setCode(this.getCode());
        entity.setCreationTime(new Date());
        entity.setTs(new Date());
        entity.setDr(0);//0表示未删除，1表示删除
        return super.insert(entity);
    }

    public String getCode() {
        List<FollowH> list = super.selectList(null);
        String lastCode = null;
        if (null == list || 0 == list.size()){
            lastCode = null;
        }else {
            lastCode = list.get(list.size()-1).getCode();
        }
        return Generator.getInstance().generaterNextNumber(lastCode);
    }

    @Override
    public boolean updateById(FollowH entity) {
        if (null == entity){
            return false;
        }
        entity.setModifiedTime(new Date());
        entity.setTs(new Date());
        return super.updateById(entity);
    }

}

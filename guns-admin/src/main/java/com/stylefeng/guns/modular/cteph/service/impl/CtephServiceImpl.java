package com.stylefeng.guns.modular.cteph.service.impl;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.shiro.ShiroUser;
import com.stylefeng.guns.modular.system.dao.YjyPatientMapper;
import com.stylefeng.guns.modular.system.model.Cteph;
import com.stylefeng.guns.modular.system.dao.CtephMapper;
import com.stylefeng.guns.modular.cteph.service.ICtephService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.stylefeng.guns.modular.system.model.User;
import com.stylefeng.guns.modular.system.service.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springfox.documentation.spi.service.contexts.SecurityContext;

import javax.annotation.Resource;
import java.security.Principal;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author chenguiwen
 * @since 2019-02-23
 */
@Service
public class CtephServiceImpl extends ServiceImpl<CtephMapper, Cteph> implements ICtephService {

    @Autowired
    private IUserService userService;

    @Resource
    private com.stylefeng.guns.modular.system.dao.CtephMapper ctephMapper;

    @Override
    public List<Map<String, Object>> selectCtephs(Integer ctephId , String name) {
        //System.out.println("ctephServiceImpl.java: ctepmId:"+ctephId);
        return ctephMapper.selectCtephs(ctephId,name);
    }

    @Override
    public boolean updateById(Cteph cteph) {
        ctephMapper.updateById(cteph);
        return true;
    }
}

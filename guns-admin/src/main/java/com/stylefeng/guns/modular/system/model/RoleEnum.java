package com.stylefeng.guns.modular.system.model;

/**
 * Created by chenguiwen on 2019.03.05
 */
public enum RoleEnum {

    ADMINISTRATOR(1,"超级管理员"),
    SYSTEM_MANAGER(2,"系统管理员"),
    DEPATMENT_MANAGER(3,"部门管理员"),
    BUSINESSMAN(4,"业务员");

    private Integer id;
    private String name;

    RoleEnum(Integer id,String name){
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

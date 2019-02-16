package com.stylefeng.guns.modular.system.model;

import java.util.Date;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author chengw
 * @since 2018-09-27
 */
@TableName("yjy_doctor")
public class Doctor extends Model<Doctor> {

    private static final long serialVersionUID = 1L;

    private int id;
    private String code;
    private String name;
    private String ranks;
    private Integer sex;
    private Date creationTime;
    private Date modifiedTime;
    private Date ts;
    private Integer dr;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRanks() {
        return ranks;
    }

    public void setRanks(String ranks) {
        this.ranks = ranks;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Date getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Date modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public Date getTs() {
        return ts;
    }

    public void setTs(Date ts) {
        this.ts = ts;
    }

    public Integer getDr() {
        return dr;
    }

    public void setDr(Integer dr) {
        this.dr = dr;
    }

    @Override
    protected Serializable pkVal() {
        return null;
    }

    @Override
    public String toString() {
        return "Doctor{" +
        "id=" + id +
        ", code=" + code +
        ", name=" + name +
        ", ranks=" + ranks +
        ", sex=" + sex +
        ", creationTime=" + creationTime +
        ", modifiedTime=" + modifiedTime +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

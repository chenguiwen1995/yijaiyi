package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 患者管理表
 * </p>
 *
 * @author stylefeng
 * @since 2018-11-07
 */
@TableName("yjy_patient")
public class YjyPatient extends Model<YjyPatient> {

    private static final long serialVersionUID = 1L;

    /**
     * 主键id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 病历号
     */
    private String code;
    /**
     * 名字
     */
    private String name;
    /**
     * 性别（1：男 2：女）
     */
    private Integer sex;
    /**
     * 年龄
     */
    private Integer age;
    /**
     * 手机号
     */
    private String tel;
    /**
     * 家庭电话
     */
    @TableField("home_tel")
    private String homeTel;
    /**
     * 微信
     */
    private String wechat;
    /**
     * 地址
     */
    private String address;
    /**
     * 删除标记
     */
    private Integer dr;
    /**
     * 创建时间
     */
    @TableField("creation_time")
    private Date creationTime;
    /**
     * 修改时间
     */
    @TableField("modified_time")
    private Date modifiedTime;
    /**
     * 附加项1
     */
    private String addition1;
    /**
     * 附加项2
     */
    private String addition2;
    /**
     * 附加项3
     */
    private String addition3;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getHomeTel() {
        return homeTel;
    }

    public void setHomeTel(String homeTel) {
        this.homeTel = homeTel;
    }

    public String getWechat() {
        return wechat;
    }

    public void setWechat(String wechat) {
        this.wechat = wechat;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getDr() {
        return dr;
    }

    public void setDr(Integer dr) {
        this.dr = dr;
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

    public String getAddition1() {
        return addition1;
    }

    public void setAddition1(String addition1) {
        this.addition1 = addition1;
    }

    public String getAddition2() {
        return addition2;
    }

    public void setAddition2(String addition2) {
        this.addition2 = addition2;
    }

    public String getAddition3() {
        return addition3;
    }

    public void setAddition3(String addition3) {
        this.addition3 = addition3;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "YjyPatient{" +
        "id=" + id +
        ", code=" + code +
        ", name=" + name +
        ", sex=" + sex +
        ", age=" + age +
        ", tel=" + tel +
        ", homeTel=" + homeTel +
        ", wechat=" + wechat +
        ", address=" + address +
        ", dr=" + dr +
        ", creationTime=" + creationTime +
        ", modifiedTime=" + modifiedTime +
        ", addition1=" + addition1 +
        ", addition2=" + addition2 +
        ", addition3=" + addition3 +
        "}";
    }
}

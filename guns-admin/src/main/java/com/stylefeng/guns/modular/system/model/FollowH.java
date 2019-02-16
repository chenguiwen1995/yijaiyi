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
 * 
 * </p>
 *
 * @author chengw
 * @since 2018-10-29
 */
@TableName("fl_follow")
public class FollowH extends Model<FollowH> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    @TableField("code")
    private String fl_code;
    private String name;
    private String department;
    private String doctor;
    @TableField("patient_name")
    private String patientName;
    @TableField("patient_sex")
    private Integer patientSex;
    @TableField("patient_age")
    private Integer patientAge;
    @TableField("patient_medno")
    private String patientMedno;
    @TableField("patient_phone")
    private String patientPhone;
    @TableField("patient_phone2")
    private String patientPhone2;
    @TableField("patient_wechat")
    private String patientWechat;
    @TableField("patient_address")
    private String patientAddress;
    @TableField("family_phone")
    private String familyPhone;
    @TableField("pamily_phone2")
    private String pamilyPhone2;
    private Date creationTime;
    private Date modifiedTime;
    private Date ts;
    private Integer dr;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return fl_code;
    }

    public void setCode(String fl_code) {
        this.fl_code = fl_code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public Integer getPatientSex() {
        return patientSex;
    }

    public void setPatientSex(Integer patientSex) {
        this.patientSex = patientSex;
    }

    public Integer getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(Integer patientAge) {
        this.patientAge = patientAge;
    }

    public String getPatientMedno() {
        return patientMedno;
    }

    public void setPatientMedno(String patientMedno) {
        this.patientMedno = patientMedno;
    }

    public String getPatientPhone() {
        return patientPhone;
    }

    public void setPatientPhone(String patientPhone) {
        this.patientPhone = patientPhone;
    }

    public String getPatientPhone2() {
        return patientPhone2;
    }

    public void setPatientPhone2(String patientPhone2) {
        this.patientPhone2 = patientPhone2;
    }

    public String getPatientWechat() {
        return patientWechat;
    }

    public void setPatientWechat(String patientWechat) {
        this.patientWechat = patientWechat;
    }

    public String getPatientAddress() {
        return patientAddress;
    }

    public void setPatientAddress(String patientAddress) {
        this.patientAddress = patientAddress;
    }

    public String getFamilyPhone() {
        return familyPhone;
    }

    public void setFamilyPhone(String familyPhone) {
        this.familyPhone = familyPhone;
    }

    public String getPamilyPhone2() {
        return pamilyPhone2;
    }

    public void setPamilyPhone2(String pamilyPhone2) {
        this.pamilyPhone2 = pamilyPhone2;
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
        return this.id;
    }

    @Override
    public String toString() {
        return "FollowH{" +
        "id=" + id +
        ", fl_code=" + fl_code +
        ", name=" + name +
        ", department=" + department +
        ", doctor=" + doctor +
        ", patientName=" + patientName +
        ", patientSex=" + patientSex +
        ", patientAge=" + patientAge +
        ", patientMedno=" + patientMedno +
        ", patientPhone=" + patientPhone +
        ", patientPhone2=" + patientPhone2 +
        ", patientWechat=" + patientWechat +
        ", patientAddress=" + patientAddress +
        ", familyPhone=" + familyPhone +
        ", pamilyPhone2=" + pamilyPhone2 +
        ", creationTime=" + creationTime +
        ", modifiedTime=" + modifiedTime +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }

    //flFollowEvent


    //flFollowMedcine


    //flFollowResult



}

package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author chengw
 * @since 2018-11-05
 */
@TableName("fl_follow_features")
public class FollowFeatures extends Model<FollowFeatures> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    private Integer rowno;
    private Integer hid;
    @TableField("breath_short")
    private Integer breathShort;
    private Integer syncope;
    @TableField("syncope_times")
    private Integer syncopeTimes;
    @DateTimeFormat(pattern = "yyyy-MM-ddTHH:mm:ss")
    @TableField("syncope_max")
    private Date syncopeTime;
    private Integer hemoptysis;
    @TableField("hemoptysis_times")
    private Integer hemoptysisTimes;
    @TableField("hemoptysis_max")
    private Double hemoptysisMax;
    private Integer swollen;
    private String others;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @TableField("creationtime")
    private Date creationTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @TableField("modifiedtime")
    private Date modifiedTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date ts;
    private Integer dr;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRowno() {
        return rowno;
    }

    public void setRowno(Integer rowno) {
        this.rowno = rowno;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public Integer getBreathShort() {
        return breathShort;
    }

    public void setBreathShort(Integer breathShort) {
        this.breathShort = breathShort;
    }

    public Integer getSyncope() {
        return syncope;
    }

    public void setSyncope(Integer syncope) {
        this.syncope = syncope;
    }

    public Integer getSyncopeTimes() {
        return syncopeTimes;
    }

    public void setSyncopeTimes(Integer syncopeTimes) {
        this.syncopeTimes = syncopeTimes;
    }

    public Date getSyncopeTime() {
        return syncopeTime;
    }

    public void setSyncopeTime(Date syncopeTime) {
        this.syncopeTime = syncopeTime;
    }

    public Integer getHemoptysis() {
        return hemoptysis;
    }

    public void setHemoptysis(Integer hemoptysis) {
        this.hemoptysis = hemoptysis;
    }

    public Integer getHemoptysisTimes() {
        return hemoptysisTimes;
    }

    public void setHemoptysisTimes(Integer hemoptysisTimes) {
        this.hemoptysisTimes = hemoptysisTimes;
    }

    public Double getHemoptysisMax() {
        return hemoptysisMax;
    }

    public void setHemoptysisMax(Double hemoptysisMax) {
        this.hemoptysisMax = hemoptysisMax;
    }

    public Integer getSwollen() {
        return swollen;
    }

    public void setSwollen(Integer swollen) {
        this.swollen = swollen;
    }

    public String getOthers() {
        return others;
    }

    public void setOthers(String others) {
        this.others = others;
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
        return "FollowFeatures{" +
        "id=" + id +
        ", rowno=" + rowno +
        ", hid=" + hid +
        ", breathShort=" + breathShort +
        ", syncope=" + syncope +
        ", syncopeTimes=" + syncopeTimes +
        ", syncopeTime=" + syncopeTime +
        ", hemoptysis=" + hemoptysis +
        ", hemoptysisTimes=" + hemoptysisTimes +
        ", hemoptysisMax=" + hemoptysisMax +
        ", swollen=" + swollen +
        ", others=" + others +
        ", creationTime=" + creationTime +
        ", modifiedTime=" + modifiedTime +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

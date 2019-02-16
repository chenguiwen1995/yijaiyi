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
 * @since 2018-11-20
 */
@TableName("fl_follow_event")
public class FlFollowEvent extends Model<FlFollowEvent> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    private Integer hid;
    @TableField("fl_code")
    private String flCode;
    private Integer deteriorate;
    private Integer hospitalization;
    private Integer number;
    private Integer pulmonary;
    private Integer rightheartfailure;
    private Integer hemoptysis;
    private String other;
    private Integer pulmonaryembolism;
    private Integer lowervein;
    private Integer arrhythmia;
    private Integer death;
    private Date deathdate;
    private Integer nonpertension;
    private String specific;
    private Integer review;
    private Date hospitalizationdate1;
    private Date hospitalizationdate2;
    private Date hospitalizationdate3;
    private String deterioratespecific;
    private Date creationtime;
    private String creator;
    private Date modifiedtime;
    private String modifier;
    private Date ts;
    private Integer dr;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public String getFlCode() {
        return flCode;
    }

    public void setFlCode(String flCode) {
        this.flCode = flCode;
    }

    public Integer getDeteriorate() {
        return deteriorate;
    }

    public void setDeteriorate(Integer deteriorate) {
        this.deteriorate = deteriorate;
    }

    public Integer getHospitalization() {
        return hospitalization;
    }

    public void setHospitalization(Integer hospitalization) {
        this.hospitalization = hospitalization;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getPulmonary() {
        return pulmonary;
    }

    public void setPulmonary(Integer pulmonary) {
        this.pulmonary = pulmonary;
    }

    public Integer getRightheartfailure() {
        return rightheartfailure;
    }

    public void setRightheartfailure(Integer rightheartfailure) {
        this.rightheartfailure = rightheartfailure;
    }

    public Integer getHemoptysis() {
        return hemoptysis;
    }

    public void setHemoptysis(Integer hemoptysis) {
        this.hemoptysis = hemoptysis;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public Integer getPulmonaryembolism() {
        return pulmonaryembolism;
    }

    public void setPulmonaryembolism(Integer pulmonaryembolism) {
        this.pulmonaryembolism = pulmonaryembolism;
    }

    public Integer getLowervein() {
        return lowervein;
    }

    public void setLowervein(Integer lowervein) {
        this.lowervein = lowervein;
    }

    public Integer getArrhythmia() {
        return arrhythmia;
    }

    public void setArrhythmia(Integer arrhythmia) {
        this.arrhythmia = arrhythmia;
    }

    public Integer getDeath() {
        return death;
    }

    public void setDeath(Integer death) {
        this.death = death;
    }

    public Date getDeathdate() {
        return deathdate;
    }

    public void setDeathdate(Date deathdate) {
        this.deathdate = deathdate;
    }

    public Integer getNonpertension() {
        return nonpertension;
    }

    public void setNonpertension(Integer nonpertension) {
        this.nonpertension = nonpertension;
    }

    public String getSpecific() {
        return specific;
    }

    public void setSpecific(String specific) {
        this.specific = specific;
    }

    public Integer getReview() {
        return review;
    }

    public void setReview(Integer review) {
        this.review = review;
    }

    public Date getHospitalizationdate1() {
        return hospitalizationdate1;
    }

    public void setHospitalizationdate1(Date hospitalizationdate1) {
        this.hospitalizationdate1 = hospitalizationdate1;
    }

    public Date getHospitalizationdate2() {
        return hospitalizationdate2;
    }

    public void setHospitalizationdate2(Date hospitalizationdate2) {
        this.hospitalizationdate2 = hospitalizationdate2;
    }

    public Date getHospitalizationdate3() {
        return hospitalizationdate3;
    }

    public void setHospitalizationdate3(Date hospitalizationdate3) {
        this.hospitalizationdate3 = hospitalizationdate3;
    }

    public String getDeterioratespecific() {
        return deterioratespecific;
    }

    public void setDeterioratespecific(String deterioratespecific) {
        this.deterioratespecific = deterioratespecific;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getModifiedtime() {
        return modifiedtime;
    }

    public void setModifiedtime(Date modifiedtime) {
        this.modifiedtime = modifiedtime;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier;
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
        return "FlFollowEvent{" +
        "id=" + id +
        ", hid=" + hid +
        ", flCode=" + flCode +
        ", deteriorate=" + deteriorate +
        ", hospitalization=" + hospitalization +
        ", number=" + number +
        ", pulmonary=" + pulmonary +
        ", rightheartfailure=" + rightheartfailure +
        ", hemoptysis=" + hemoptysis +
        ", other=" + other +
        ", pulmonaryembolism=" + pulmonaryembolism +
        ", lowervein=" + lowervein +
        ", arrhythmia=" + arrhythmia +
        ", death=" + death +
        ", deathdate=" + deathdate +
        ", nonpertension=" + nonpertension +
        ", specific=" + specific +
        ", review=" + review +
        ", hospitalizationdate1=" + hospitalizationdate1 +
        ", hospitalizationdate2=" + hospitalizationdate2 +
        ", hospitalizationdate3=" + hospitalizationdate3 +
        ", deterioratespecific=" + deterioratespecific +
        ", creationtime=" + creationtime +
        ", creator=" + creator +
        ", modifiedtime=" + modifiedtime +
        ", modifier=" + modifier +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

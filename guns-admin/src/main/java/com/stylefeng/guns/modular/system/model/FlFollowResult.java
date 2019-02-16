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
 * @since 2018-11-21
 */
@TableName("fl_follow_result")
public class FlFollowResult extends Model<FlFollowResult> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    @TableField("fl_code")
    private String flCode;
    private Integer crowno;
    private Integer hid;
    private Integer routineblood;
    private Integer bloodbiochemistry;
    private Integer nt;
    private Double ntnumber;
    private Integer sexhormone;
    private Integer ironmetabolism;
    private Integer walk;
    private Double walkdistance;
    private Integer ct;
    private Integer cprt;
    private Integer mri;
    private String othercheck;
    private Date creationTime;
    private String creator;
    private Date modifiedTime;
    private String modifier;
    private Date ts;
    private Integer dr;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFlCode() {
        return flCode;
    }

    public void setFlCode(String flCode) {
        this.flCode = flCode;
    }

    public Integer getCrowno() {
        return crowno;
    }

    public void setCrowno(Integer crowno) {
        this.crowno = crowno;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public Integer getRoutineblood() {
        return routineblood;
    }

    public void setRoutineblood(Integer routineblood) {
        this.routineblood = routineblood;
    }

    public Integer getBloodbiochemistry() {
        return bloodbiochemistry;
    }

    public void setBloodbiochemistry(Integer bloodbiochemistry) {
        this.bloodbiochemistry = bloodbiochemistry;
    }

    public Integer getNt() {
        return nt;
    }

    public void setNt(Integer nt) {
        this.nt = nt;
    }

    public Double getNtnumber() {
        return ntnumber;
    }

    public void setNtnumber(Double ntnumber) {
        this.ntnumber = ntnumber;
    }

    public Integer getSexhormone() {
        return sexhormone;
    }

    public void setSexhormone(Integer sexhormone) {
        this.sexhormone = sexhormone;
    }

    public Integer getIronmetabolism() {
        return ironmetabolism;
    }

    public void setIronmetabolism(Integer ironmetabolism) {
        this.ironmetabolism = ironmetabolism;
    }

    public Integer getWalk() {
        return walk;
    }

    public void setWalk(Integer walk) {
        this.walk = walk;
    }

    public Double getWalkdistance() {
        return walkdistance;
    }

    public void setWalkdistance(Double walkdistance) {
        this.walkdistance = walkdistance;
    }

    public Integer getCt() {
        return ct;
    }

    public void setCt(Integer ct) {
        this.ct = ct;
    }

    public Integer getCprt() {
        return cprt;
    }

    public void setCprt(Integer cprt) {
        this.cprt = cprt;
    }

    public Integer getMri() {
        return mri;
    }

    public void setMri(Integer mri) {
        this.mri = mri;
    }

    public String getOthercheck() {
        return othercheck;
    }

    public void setOthercheck(String othercheck) {
        this.othercheck = othercheck;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Date modifiedTime) {
        this.modifiedTime = modifiedTime;
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
        return "FlFollowResult{" +
        "id=" + id +
        ", flCode=" + flCode +
        ", crowno=" + crowno +
        ", hid=" + hid +
        ", routineblood=" + routineblood +
        ", bloodbiochemistry=" + bloodbiochemistry +
        ", nt=" + nt +
        ", ntnumber=" + ntnumber +
        ", sexhormone=" + sexhormone +
        ", ironmetabolism=" + ironmetabolism +
        ", walk=" + walk +
        ", walkdistance=" + walkdistance +
        ", ct=" + ct +
        ", cprt=" + cprt +
        ", mri=" + mri +
        ", othercheck=" + othercheck +
        ", creationTime=" + creationTime +
        ", creator=" + creator +
        ", modifiedTime=" + modifiedTime +
        ", modifier=" + modifier +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

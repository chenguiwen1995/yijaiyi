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
 * @author stylefeng
 * @since 2018-12-23
 */
@TableName("fl_follow_medicine")
public class FlFollowMedicine extends Model<FlFollowMedicine> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    @TableField("fl_code")
    private String flCode;
    private Integer crowno;
    private Integer hid;
    private Integer regulardose;
    private Integer expenses;
    private Integer untowardeffect;
    private Integer curativeeffect;
    private String othersereason;
    private Integer xdnf;
    @TableField("xdnf_dosage")
    private Double xdnfDosage;
    private Integer tdnf;
    @TableField("tdnf_dosage")
    private Double tdnfDosage;
    private Integer facered1;
    private Integer headache1;
    private Integer stuffynose1;
    private Integer musclepain1;
    private Integer dizziness1;
    private Integer blurredvision1;
    private Integer hypotension1;
    private Integer menstrualdisorder1;
    private String other1;
    private Integer bst;
    @TableField("bst_dosage")
    private Double bstDosage;
    private Integer alst;
    @TableField("alst_dosage")
    private Double alstDosage;
    private Integer mxtt;
    @TableField("mxtt_dosage")
    private Double mxttDosage;
    private Integer facered2;
    private Integer headache2;
    private Integer stuffynose2;
    private Integer musclepain2;
    private Integer dizziness2;
    private Integer transaminaseraise2;
    private Integer anemia2;
    private Integer peripheraledema2;
    private Integer hypotension2;
    private Integer menstrualdisorder2;
    private String other2;
    private Integer bqls;
    @TableField("bqls_dosage")
    private Double bqlsDosage;
    private Integer rmdl;
    @TableField("rmdl_dosage")
    private Double rmdlDosage;
    private Integer facered3;
    private Integer headache3;
    private Integer stuffynose3;
    private Integer musclepain3;
    private Integer diarrhea3;
    private Integer localpain3;
    private Integer hypotension3;
    private String other3;
    private Integer laxg;
    @TableField("laxg_dosage")
    private Double laxgDosage;
    private Integer facered4;
    private Integer headache4;
    private Integer stuffynose4;
    private Integer dizziness4;
    private Integer diarrhea4;
    private Integer hypotension4;
    private String other4;
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

    public Integer getRegulardose() {
        return regulardose;
    }

    public void setRegulardose(Integer regulardose) {
        this.regulardose = regulardose;
    }

    public Integer getExpenses() {
        return expenses;
    }

    public void setExpenses(Integer expenses) {
        this.expenses = expenses;
    }

    public Integer getUntowardeffect() {
        return untowardeffect;
    }

    public void setUntowardeffect(Integer untowardeffect) {
        this.untowardeffect = untowardeffect;
    }

    public Integer getCurativeeffect() {
        return curativeeffect;
    }

    public void setCurativeeffect(Integer curativeeffect) {
        this.curativeeffect = curativeeffect;
    }

    public String getOthersereason() {
        return othersereason;
    }

    public void setOthersereason(String othersereason) {
        this.othersereason = othersereason;
    }

    public Integer getXdnf() {
        return xdnf;
    }

    public void setXdnf(Integer xdnf) {
        this.xdnf = xdnf;
    }

    public Double getXdnfDosage() {
        return xdnfDosage;
    }

    public void setXdnfDosage(Double xdnfDosage) {
        this.xdnfDosage = xdnfDosage;
    }

    public Integer getTdnf() {
        return tdnf;
    }

    public void setTdnf(Integer tdnf) {
        this.tdnf = tdnf;
    }

    public Double getTdnfDosage() {
        return tdnfDosage;
    }

    public void setTdnfDosage(Double tdnfDosage) {
        this.tdnfDosage = tdnfDosage;
    }

    public Integer getFacered1() {
        return facered1;
    }

    public void setFacered1(Integer facered1) {
        this.facered1 = facered1;
    }

    public Integer getHeadache1() {
        return headache1;
    }

    public void setHeadache1(Integer headache1) {
        this.headache1 = headache1;
    }

    public Integer getStuffynose1() {
        return stuffynose1;
    }

    public void setStuffynose1(Integer stuffynose1) {
        this.stuffynose1 = stuffynose1;
    }

    public Integer getMusclepain1() {
        return musclepain1;
    }

    public void setMusclepain1(Integer musclepain1) {
        this.musclepain1 = musclepain1;
    }

    public Integer getDizziness1() {
        return dizziness1;
    }

    public void setDizziness1(Integer dizziness1) {
        this.dizziness1 = dizziness1;
    }

    public Integer getBlurredvision1() {
        return blurredvision1;
    }

    public void setBlurredvision1(Integer blurredvision1) {
        this.blurredvision1 = blurredvision1;
    }

    public Integer getHypotension1() {
        return hypotension1;
    }

    public void setHypotension1(Integer hypotension1) {
        this.hypotension1 = hypotension1;
    }

    public Integer getMenstrualdisorder1() {
        return menstrualdisorder1;
    }

    public void setMenstrualdisorder1(Integer menstrualdisorder1) {
        this.menstrualdisorder1 = menstrualdisorder1;
    }

    public String getOther1() {
        return other1;
    }

    public void setOther1(String other1) {
        this.other1 = other1;
    }

    public Integer getBst() {
        return bst;
    }

    public void setBst(Integer bst) {
        this.bst = bst;
    }

    public Double getBstDosage() {
        return bstDosage;
    }

    public void setBstDosage(Double bstDosage) {
        this.bstDosage = bstDosage;
    }

    public Integer getAlst() {
        return alst;
    }

    public void setAlst(Integer alst) {
        this.alst = alst;
    }

    public Double getAlstDosage() {
        return alstDosage;
    }

    public void setAlstDosage(Double alstDosage) {
        this.alstDosage = alstDosage;
    }

    public Integer getMxtt() {
        return mxtt;
    }

    public void setMxtt(Integer mxtt) {
        this.mxtt = mxtt;
    }

    public Double getMxttDosage() {
        return mxttDosage;
    }

    public void setMxttDosage(Double mxttDosage) {
        this.mxttDosage = mxttDosage;
    }

    public Integer getFacered2() {
        return facered2;
    }

    public void setFacered2(Integer facered2) {
        this.facered2 = facered2;
    }

    public Integer getHeadache2() {
        return headache2;
    }

    public void setHeadache2(Integer headache2) {
        this.headache2 = headache2;
    }

    public Integer getStuffynose2() {
        return stuffynose2;
    }

    public void setStuffynose2(Integer stuffynose2) {
        this.stuffynose2 = stuffynose2;
    }

    public Integer getMusclepain2() {
        return musclepain2;
    }

    public void setMusclepain2(Integer musclepain2) {
        this.musclepain2 = musclepain2;
    }

    public Integer getDizziness2() {
        return dizziness2;
    }

    public void setDizziness2(Integer dizziness2) {
        this.dizziness2 = dizziness2;
    }

    public Integer getTransaminaseraise2() {
        return transaminaseraise2;
    }

    public void setTransaminaseraise2(Integer transaminaseraise2) {
        this.transaminaseraise2 = transaminaseraise2;
    }

    public Integer getAnemia2() {
        return anemia2;
    }

    public void setAnemia2(Integer anemia2) {
        this.anemia2 = anemia2;
    }

    public Integer getPeripheraledema2() {
        return peripheraledema2;
    }

    public void setPeripheraledema2(Integer peripheraledema2) {
        this.peripheraledema2 = peripheraledema2;
    }

    public Integer getHypotension2() {
        return hypotension2;
    }

    public void setHypotension2(Integer hypotension2) {
        this.hypotension2 = hypotension2;
    }

    public Integer getMenstrualdisorder2() {
        return menstrualdisorder2;
    }

    public void setMenstrualdisorder2(Integer menstrualdisorder2) {
        this.menstrualdisorder2 = menstrualdisorder2;
    }

    public String getOther2() {
        return other2;
    }

    public void setOther2(String other2) {
        this.other2 = other2;
    }

    public Integer getBqls() {
        return bqls;
    }

    public void setBqls(Integer bqls) {
        this.bqls = bqls;
    }

    public Double getBqlsDosage() {
        return bqlsDosage;
    }

    public void setBqlsDosage(Double bqlsDosage) {
        this.bqlsDosage = bqlsDosage;
    }

    public Integer getRmdl() {
        return rmdl;
    }

    public void setRmdl(Integer rmdl) {
        this.rmdl = rmdl;
    }

    public Double getRmdlDosage() {
        return rmdlDosage;
    }

    public void setRmdlDosage(Double rmdlDosage) {
        this.rmdlDosage = rmdlDosage;
    }

    public Integer getFacered3() {
        return facered3;
    }

    public void setFacered3(Integer facered3) {
        this.facered3 = facered3;
    }

    public Integer getHeadache3() {
        return headache3;
    }

    public void setHeadache3(Integer headache3) {
        this.headache3 = headache3;
    }

    public Integer getStuffynose3() {
        return stuffynose3;
    }

    public void setStuffynose3(Integer stuffynose3) {
        this.stuffynose3 = stuffynose3;
    }

    public Integer getMusclepain3() {
        return musclepain3;
    }

    public void setMusclepain3(Integer musclepain3) {
        this.musclepain3 = musclepain3;
    }

    public Integer getDiarrhea3() {
        return diarrhea3;
    }

    public void setDiarrhea3(Integer diarrhea3) {
        this.diarrhea3 = diarrhea3;
    }

    public Integer getLocalpain3() {
        return localpain3;
    }

    public void setLocalpain3(Integer localpain3) {
        this.localpain3 = localpain3;
    }

    public Integer getHypotension3() {
        return hypotension3;
    }

    public void setHypotension3(Integer hypotension3) {
        this.hypotension3 = hypotension3;
    }

    public String getOther3() {
        return other3;
    }

    public void setOther3(String other3) {
        this.other3 = other3;
    }

    public Integer getLaxg() {
        return laxg;
    }

    public void setLaxg(Integer laxg) {
        this.laxg = laxg;
    }

    public Double getLaxgDosage() {
        return laxgDosage;
    }

    public void setLaxgDosage(Double laxgDosage) {
        this.laxgDosage = laxgDosage;
    }

    public Integer getFacered4() {
        return facered4;
    }

    public void setFacered4(Integer facered4) {
        this.facered4 = facered4;
    }

    public Integer getHeadache4() {
        return headache4;
    }

    public void setHeadache4(Integer headache4) {
        this.headache4 = headache4;
    }

    public Integer getStuffynose4() {
        return stuffynose4;
    }

    public void setStuffynose4(Integer stuffynose4) {
        this.stuffynose4 = stuffynose4;
    }

    public Integer getDizziness4() {
        return dizziness4;
    }

    public void setDizziness4(Integer dizziness4) {
        this.dizziness4 = dizziness4;
    }

    public Integer getDiarrhea4() {
        return diarrhea4;
    }

    public void setDiarrhea4(Integer diarrhea4) {
        this.diarrhea4 = diarrhea4;
    }

    public Integer getHypotension4() {
        return hypotension4;
    }

    public void setHypotension4(Integer hypotension4) {
        this.hypotension4 = hypotension4;
    }

    public String getOther4() {
        return other4;
    }

    public void setOther4(String other4) {
        this.other4 = other4;
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
        return "FlFollowMedicine{" +
        "id=" + id +
        ", flCode=" + flCode +
        ", crowno=" + crowno +
        ", hid=" + hid +
        ", regulardose=" + regulardose +
        ", expenses=" + expenses +
        ", untowardeffect=" + untowardeffect +
        ", curativeeffect=" + curativeeffect +
        ", othersereason=" + othersereason +
        ", xdnf=" + xdnf +
        ", xdnfDosage=" + xdnfDosage +
        ", tdnf=" + tdnf +
        ", tdnfDosage=" + tdnfDosage +
        ", facered1=" + facered1 +
        ", headache1=" + headache1 +
        ", stuffynose1=" + stuffynose1 +
        ", musclepain1=" + musclepain1 +
        ", dizziness1=" + dizziness1 +
        ", blurredvision1=" + blurredvision1 +
        ", hypotension1=" + hypotension1 +
        ", menstrualdisorder1=" + menstrualdisorder1 +
        ", other1=" + other1 +
        ", bst=" + bst +
        ", bstDosage=" + bstDosage +
        ", alst=" + alst +
        ", alstDosage=" + alstDosage +
        ", mxtt=" + mxtt +
        ", mxttDosage=" + mxttDosage +
        ", facered2=" + facered2 +
        ", headache2=" + headache2 +
        ", stuffynose2=" + stuffynose2 +
        ", musclepain2=" + musclepain2 +
        ", dizziness2=" + dizziness2 +
        ", transaminaseraise2=" + transaminaseraise2 +
        ", anemia2=" + anemia2 +
        ", peripheraledema2=" + peripheraledema2 +
        ", hypotension2=" + hypotension2 +
        ", menstrualdisorder2=" + menstrualdisorder2 +
        ", other2=" + other2 +
        ", bqls=" + bqls +
        ", bqlsDosage=" + bqlsDosage +
        ", rmdl=" + rmdl +
        ", rmdlDosage=" + rmdlDosage +
        ", facered3=" + facered3 +
        ", headache3=" + headache3 +
        ", stuffynose3=" + stuffynose3 +
        ", musclepain3=" + musclepain3 +
        ", diarrhea3=" + diarrhea3 +
        ", localpain3=" + localpain3 +
        ", hypotension3=" + hypotension3 +
        ", other3=" + other3 +
        ", laxg=" + laxg +
        ", laxgDosage=" + laxgDosage +
        ", facered4=" + facered4 +
        ", headache4=" + headache4 +
        ", stuffynose4=" + stuffynose4 +
        ", dizziness4=" + dizziness4 +
        ", diarrhea4=" + diarrhea4 +
        ", hypotension4=" + hypotension4 +
        ", other4=" + other4 +
        ", creationtime=" + creationtime +
        ", creator=" + creator +
        ", modifiedtime=" + modifiedtime +
        ", modifier=" + modifier +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

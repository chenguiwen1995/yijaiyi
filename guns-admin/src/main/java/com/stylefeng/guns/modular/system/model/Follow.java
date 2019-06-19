package com.stylefeng.guns.modular.system.model;

import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author chenguiwen
 * @since 2019-04-18
 */
@TableName("follow")
public class Follow extends Model<Follow> {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private String code;
    private String name;
    private Integer department;
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
    private Integer deteriorate;
    private Integer hospitalization;
    private Integer number;
    private Integer pulmonary;
    private Integer rightheartfailure;
    private Integer hemoptysis1;
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
    private Integer regulardose;
    @TableField("medicine_expenses")
    private Integer medicineExpenses;
    @TableField("medicine_untowardeffect")
    private Integer medicineUntowardeffect;
    @TableField("medicine_curativeeffect")
    private Integer medicineCurativeeffect;
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
    @TableField("breath_short")
    private Integer breathShort;
    private Integer syncope;
    @TableField("syncope_times")
    private Integer syncopeTimes;
    @TableField("syncope_time")
    private Date syncopeTime;
    private Integer hemoptysis;
    @TableField("hemoptysis_times")
    private Integer hemoptysisTimes;
    @TableField("hemoptysis_max")
    private Double hemoptysisMax;
    private Integer swollen;
    private String others;
    private Integer creator;
    @TableField("creation_time")
    private Date creationTime;
    private String modifier;
    @TableField("modified_time")
    private Date modifiedTime;
    private Date ts;
    private Integer dr;
    private Double alstdosage;


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

    public Integer getDepartment() {
        return department;
    }

    public void setDepartment(Integer department) {
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

    public Integer getHemoptysis1() {
        return hemoptysis1;
    }

    public void setHemoptysis1(Integer hemoptysis1) {
        this.hemoptysis1 = hemoptysis1;
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

    public Integer getRegulardose() {
        return regulardose;
    }

    public void setRegulardose(Integer regulardose) {
        this.regulardose = regulardose;
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

    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier;
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
        return "Follow{" +
        "id=" + id +
        ", code=" + code +
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
        ", deteriorate=" + deteriorate +
        ", hospitalization=" + hospitalization +
        ", number=" + number +
        ", pulmonary=" + pulmonary +
        ", rightheartfailure=" + rightheartfailure +
        ", hemoptysis1=" + hemoptysis1 +
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
        ", regulardose=" + regulardose +
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
        ", breathShort=" + breathShort +
        ", syncope=" + syncope +
        ", syncopeTimes=" + syncopeTimes +
        ", syncopeTime=" + syncopeTime +
        ", hemoptysis=" + hemoptysis +
        ", hemoptysisTimes=" + hemoptysisTimes +
        ", hemoptysisMax=" + hemoptysisMax +
        ", swollen=" + swollen +
        ", others=" + others +
        ", creator=" + creator +
        ", creationTime=" + creationTime +
        ", modifier=" + modifier +
        ", modifiedTime=" + modifiedTime +
        ", ts=" + ts +
        ", dr=" + dr +
        ", alstdosage=" + alstdosage +
        "}";
    }

    public Integer getMedicineExpenses() {
        return medicineExpenses;
    }

    public void setMedicineExpenses(Integer medicineExpenses) {
        this.medicineExpenses = medicineExpenses;
    }

    public Integer getMedicineUntowardeffect() {
        return medicineUntowardeffect;
    }

    public void setMedicineUntowardeffect(Integer medicineUntowardeffect) {
        this.medicineUntowardeffect = medicineUntowardeffect;
    }

    public Integer getMedicineCurativeeffect() {
        return medicineCurativeeffect;
    }

    public void setMedicineCurativeeffect(Integer medicineCurativeeffect) {
        this.medicineCurativeeffect = medicineCurativeeffect;
    }

    public Double getAlstdosage() {
        return alstdosage;
    }

    public void setAlsddosage(Double alsddosage) {
        this.alstdosage = alsddosage;
    }
}

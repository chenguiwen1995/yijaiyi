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
 * @author chenguiwen
 * @since 2019-03-06
 */
@TableName("pulhyfollow")
public class Pulhyfollow extends Model<Pulhyfollow> {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 随访编号
     */
    private String code;
    /**
     * 随访科室
     */
    private String department;
    /**
     * 医生
     */
    private String doctor;
    /**
     * 患者姓名
     */
    @TableField("patient_name")
    private String patientName;
    /**
     * 患者性别
     */
    @TableField("patient_sex")
    private Integer patientSex;
    /**
     * 患者出生日期
     */
    @TableField("patient_birth")
    private Integer patientBirth;
    /**
     * 患者病历号
     */
    @TableField("patient_medno")
    private String patientMedno;
    /**
     * 患者手机号码
     */
    @TableField("patient_phone")
    private String patientPhone;
    /**
     * 患者电话
     */
    @TableField("patient_phone2")
    private String patientPhone2;
    /**
     * 患者微信
     */
    @TableField("patient_wechat")
    private String patientWechat;
    /**
     * 患者地址
     */
    @TableField("patient_address")
    private String patientAddress;
    /**
     * 家人手机号码
     */
    @TableField("family_phone")
    private String familyPhone;
    /**
     * 家人电话
     */
    @TableField("pamily_phone2")
    private String pamilyPhone2;
    /**
     * 是否发生临床恶化时间
     */
    private Integer bdeteriorate;
    /**
     * 是否住院
     */
    private Integer bhospitalization;
    /**
     * 住院次数
     */
    private Integer nnumber;
    /**
     * 是否肺部感染
     */
    private Integer bpulmonary;
    /**
     * 右心衰加重
     */
    private Integer brightheartfailure;
    /**
     * 咳血
     */
    private Integer bhemoptysis;
    /**
     * 其他出血情况
     */
    private String other;
    /**
     * 是否再发肺栓塞
     */
    private Integer pulmonaryembolism;
    /**
     * 下肢深静脉血栓
     */
    private Integer lowervein;
    /**
     * 是否心率失常
     */
    private Integer arrhythmia;
    /**
     * 是否死亡
     */
    private Integer death;
    /**
     * 死亡日期
     */
    private Date deathdate;
    /**
     * 非肺高压原因
     */
    private Integer nonpertension;
    /**
     * 请具体
     */
    private String vspecific;
    /**
     * 住院时间
     */
    private Date hospitalizationdate1;
    /**
     * 住院时间
     */
    private Date hospitalizationdate2;
    /**
     * 住院时间
     */
    private Date hospitalizationdate3;
    /**
     * 重要恶化时间详情
     */
    private String deterioratespecific;
    /**
     * 气短
     */
    @TableField("breath_short")
    private Integer breathShort;
    /**
     * 晕厥
     */
    private Integer syncope;
    /**
     * 晕厥次数
     */
    @TableField("syncope_times")
    private Integer syncopeTimes;
    /**
     * 上次晕厥时间
     */
    @TableField("syncope_time")
    private Date syncopeTime;
    /**
     * 咳血
     */
    private Integer hemoptysis;
    /**
     * 咳血次数
     */
    @TableField("hemoptysis_times")
    private Integer hemoptysisTimes;
    /**
     * 上次咳血时间
     */
    @TableField("hemoptysis_time")
    private Date hemoptysisTime;
    /**
     * 浮肿
     */
    private Integer swollen;
    /**
     * 其他体征
     */
    private String otherfeatures;
    /**
     * 是否规律服药
     */
    private Integer regularmedicine;
    /**
     * 不规律原因
     */
    private String irregularreason;
    /**
     * 西地那非
     */
    private Integer xdnf;
    /**
     * 西地那非计量
     */
    @TableField("xdnf_dosage")
    private Double xdnfDosage;
    /**
     * 他达那非
     */
    private Integer tdnf;
    /**
     * 他达那非计量
     */
    @TableField("tdnf_dosage")
    private Double tdnfDosage;
    /**
     * 面色潮红
     */
    private Integer facered1;
    /**
     * 头痛
     */
    private Integer headache1;
    /**
     * 鼻塞
     */
    private Integer stuffynose1;
    /**
     * 肌肉疼痛
     */
    private Integer musclepain1;
    /**
     * 头晕
     */
    private Integer dizziness1;
    /**
     * 视物模糊
     */
    private Integer blurredvision1;
    /**
     * 低血压
     */
    private Integer hypotension1;
    /**
     * 月经紊乱
     */
    private Integer menstrualdisorder1;
    /**
     * 其他
     */
    private String other1;
    /**
     * 波生坦
     */
    private Integer bst;
    /**
     * 波生坦计量
     */
    @TableField("bst_dosage")
    private Double bstDosage;
    /**
     * 马昔腾坦
     */
    private Integer mxtt;
    /**
     * 马昔腾坦计量
     */
    @TableField("mxtt_dosage")
    private Double mxttDosage;
    /**
     * 面色潮红
     */
    private Integer facered2;
    /**
     * 头痛
     */
    private Integer headache2;
    /**
     * 鼻塞
     */
    private Integer stuffynose2;
    /**
     * 肌肉疼痛
     */
    private Integer musclepain2;
    /**
     * 头晕
     */
    private Integer dizziness2;
    /**
     * 转氨酶增高
     */
    private Integer transaminaseraise2;
    /**
     * 贫血
     */
    private Integer anemia2;
    /**
     * 外周浮肿
     */
    private Integer peripheraledema2;
    /**
     * 低血压
     */
    private Integer hypotension2;
    /**
     * 月经紊乱
     */
    private Integer menstrualdisorder2;
    /**
     * 其他
     */
    private String other2;
    /**
     * 贝前列素
     */
    private Integer bqls;
    /**
     * 贝前列素剂量
     */
    @TableField("bqls_dosage")
    private Double bqlsDosage;
    /**
     * 瑞莫杜林
     */
    private Integer rmdl;
    /**
     * 瑞莫杜林剂量
     */
    @TableField("rmdl_dosage")
    private Double rmdlDosage;
    /**
     * 面色潮红
     */
    private Integer facered3;
    /**
     * 头痛
     */
    private Integer headache3;
    /**
     * 鼻塞
     */
    private Integer stuffynose3;
    /**
     * 肌肉疼痛
     */
    private Integer musclepain3;
    /**
     * 腹泻
     */
    private Integer diarrhea3;
    /**
     * 局部疼痛
     */
    private Integer localpain3;
    /**
     * 低血压
     */
    private Integer hypotension3;
    /**
     * 其他
     */
    private String other3;
    /**
     * 利奥西呱
     */
    private Integer laxg;
    /**
     * 利奥西呱计量
     */
    @TableField("laxg_dosage")
    private Double laxgDosage;
    /**
     * 面色潮红
     */
    private Integer facered4;
    /**
     * 头痛
     */
    private Integer headache4;
    /**
     * 鼻塞
     */
    private Integer stuffynose4;
    /**
     * 头晕
     */
    private Integer dizziness4;
    /**
     * 腹泻
     */
    private Integer diarrhea4;
    /**
     * 低血压
     */
    private Integer hypotension4;
    /**
     * 其他
     */
    private String other4;
    /**
     * 血常规
     */
    private Integer routineblood;
    /**
     * 血生化
     */
    private Integer bloodbiochemistry;
    /**
     * NT-PROBNP
     */
    private Integer nt;
    /**
     * NT-PROBNP数值
     */
    private Double ntnumber;
    /**
     * 性激素
     */
    private Integer sexhormone;
    /**
     * 铁代谢
     */
    private Integer ironmetabolism;
    /**
     * 六分钟步行
     */
    private Integer walk;
    /**
     * 六分钟步行距离
     */
    private Double walkdistance;
    /**
     * CT
     */
    private Integer ct;
    /**
     * CPET
     */
    private Integer cpet;
    /**
     * MRI
     */
    private Integer mri;
    /**
     * 其他检查
     */
    private String othercheck;
    /**
     * 创建人
     */
    private Integer creator;
    /**
     * 创建时间
     */
    private Date creationtime;
    /**
     * 修改人
     */
    private Integer modifier;
    /**
     * 修改时间
     */
    private Date modifiedtime;
    /**
     * 时间戳
     */
    private Date ts;
    /**
     * 删除标记
     */
    private Integer dr;


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

    public Integer getPatientBirth() {
        return patientBirth;
    }

    public void setPatientBirth(Integer patientBirth) {
        this.patientBirth = patientBirth;
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

    public Integer getBdeteriorate() {
        return bdeteriorate;
    }

    public void setBdeteriorate(Integer bdeteriorate) {
        this.bdeteriorate = bdeteriorate;
    }

    public Integer getBhospitalization() {
        return bhospitalization;
    }

    public void setBhospitalization(Integer bhospitalization) {
        this.bhospitalization = bhospitalization;
    }

    public Integer getNnumber() {
        return nnumber;
    }

    public void setNnumber(Integer nnumber) {
        this.nnumber = nnumber;
    }

    public Integer getBpulmonary() {
        return bpulmonary;
    }

    public void setBpulmonary(Integer bpulmonary) {
        this.bpulmonary = bpulmonary;
    }

    public Integer getBrightheartfailure() {
        return brightheartfailure;
    }

    public void setBrightheartfailure(Integer brightheartfailure) {
        this.brightheartfailure = brightheartfailure;
    }

    public Integer getBhemoptysis() {
        return bhemoptysis;
    }

    public void setBhemoptysis(Integer bhemoptysis) {
        this.bhemoptysis = bhemoptysis;
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

    public String getVspecific() {
        return vspecific;
    }

    public void setVspecific(String vspecific) {
        this.vspecific = vspecific;
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

    public Date getHemoptysisTime() {
        return hemoptysisTime;
    }

    public void setHemoptysisTime(Date hemoptysisTime) {
        this.hemoptysisTime = hemoptysisTime;
    }

    public Integer getSwollen() {
        return swollen;
    }

    public void setSwollen(Integer swollen) {
        this.swollen = swollen;
    }

    public String getOtherfeatures() {
        return otherfeatures;
    }

    public void setOtherfeatures(String otherfeatures) {
        this.otherfeatures = otherfeatures;
    }

    public Integer getRegularmedicine() {
        return regularmedicine;
    }

    public void setRegularmedicine(Integer regularmedicine) {
        this.regularmedicine = regularmedicine;
    }

    public String getIrregularreason() {
        return irregularreason;
    }

    public void setIrregularreason(String irregularreason) {
        this.irregularreason = irregularreason;
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

    public Integer getCpet() {
        return cpet;
    }

    public void setCpet(Integer cpet) {
        this.cpet = cpet;
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

    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

    public Integer getModifier() {
        return modifier;
    }

    public void setModifier(Integer modifier) {
        this.modifier = modifier;
    }

    public Date getModifiedtime() {
        return modifiedtime;
    }

    public void setModifiedtime(Date modifiedtime) {
        this.modifiedtime = modifiedtime;
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
        return "Pulhyfollow{" +
        "id=" + id +
        ", code=" + code +
        ", department=" + department +
        ", doctor=" + doctor +
        ", patientName=" + patientName +
        ", patientSex=" + patientSex +
        ", patientBirth=" + patientBirth +
        ", patientMedno=" + patientMedno +
        ", patientPhone=" + patientPhone +
        ", patientPhone2=" + patientPhone2 +
        ", patientWechat=" + patientWechat +
        ", patientAddress=" + patientAddress +
        ", familyPhone=" + familyPhone +
        ", pamilyPhone2=" + pamilyPhone2 +
        ", bdeteriorate=" + bdeteriorate +
        ", bhospitalization=" + bhospitalization +
        ", nnumber=" + nnumber +
        ", bpulmonary=" + bpulmonary +
        ", brightheartfailure=" + brightheartfailure +
        ", bhemoptysis=" + bhemoptysis +
        ", other=" + other +
        ", pulmonaryembolism=" + pulmonaryembolism +
        ", lowervein=" + lowervein +
        ", arrhythmia=" + arrhythmia +
        ", death=" + death +
        ", deathdate=" + deathdate +
        ", nonpertension=" + nonpertension +
        ", vspecific=" + vspecific +
        ", hospitalizationdate1=" + hospitalizationdate1 +
        ", hospitalizationdate2=" + hospitalizationdate2 +
        ", hospitalizationdate3=" + hospitalizationdate3 +
        ", deterioratespecific=" + deterioratespecific +
        ", breathShort=" + breathShort +
        ", syncope=" + syncope +
        ", syncopeTimes=" + syncopeTimes +
        ", syncopeTime=" + syncopeTime +
        ", hemoptysis=" + hemoptysis +
        ", hemoptysisTimes=" + hemoptysisTimes +
        ", hemoptysisTime=" + hemoptysisTime +
        ", swollen=" + swollen +
        ", otherfeatures=" + otherfeatures +
        ", regularmedicine=" + regularmedicine +
        ", irregularreason=" + irregularreason +
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
        ", cpet=" + cpet +
        ", mri=" + mri +
        ", othercheck=" + othercheck +
        ", creator=" + creator +
        ", creationtime=" + creationtime +
        ", modifier=" + modifier +
        ", modifiedtime=" + modifiedtime +
        ", ts=" + ts +
        ", dr=" + dr +
        "}";
    }
}

package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author stylefeng
 * @since 2019-03-05
 */
@TableName("cteph")
public class Cteph extends Model<Cteph> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    private String code;
    private Integer department;
    private Integer fillingperson;
    @TableField("patient_name")
    private String patientName;
    @TableField("patient_sex")
    private Integer patientSex;
    @TableField("patient_address")
    private String patientAddress;
    private Date birthday;
    private Float height;
    private Float weight;
    private Date firsttime;
    private Integer specialsigns;
    private Integer vtehistory;
    private Integer ape;
    private Integer ledvt;
    private String otherthrombus;
    private Date firstvtetime;
    private Integer vterelapse;
    private Integer malignanttumor;
    private Integer splenectomy;
    private Integer pacemaker;
    private Integer atrialhistory;
    private Integer levv;
    private Integer ibd;
    private String otherrisk;
    private Integer hypertension;
    private Integer coronaryheart;
    private Integer revascularization;
    private Integer diabetes;
    private Integer renalinsufficiency;
    private Integer cerebralinfarction;
    private Integer copd;
    private Integer congenitalheart;
    private String chdspecific;
    private Integer hypothyroidism;
    private Integer hyperthyroidism;
    private Integer anemia;
    private Integer polycythemia;
    private Integer plateletlower;
    private Integer plateletup;
    private Integer othercomplications;
    private Integer cteph;
    private Integer sixmwd;
    private Integer noreason1;
    private Float walking;
    private Integer ppi;
    private Integer ctpat;
    private Integer mripae;
    private Integer cmri;
    private Integer rhc;
    private Integer noreason2;
    private String otherreason;
    private Integer pa;
    private Date firstcatheter;
    private Float hr;
    private Float bpshrink;
    private Float bprelaxation;
    private Float bpave;
    private Integer rap;
    private Float rapshrink;
    private Float raprelaxation1;
    private Float rapave;
    private Integer pap;
    private Float papshrink;
    private Float raprelaxation2;
    private Float papave;
    private Integer pawp;
    private Float pawpshrink;
    private Float pawprelaxation;
    private Float pawpave;
    private Float co;
    private Integer comethod;
    private Float ci;
    private Float pvr;
    private Float lvedd;
    private Float lvef;
    private Float pasp;
    private Integer pe;
    private Integer bloodgroup;
    private Integer nt;
    private Float ntnumber;
    private Integer bloodgas;
    private Float pco;
    private Float po;
    private Float sao;
    private Float paa;
    private Integer anticoagulant;
    private Integer drug1;
    private String otherdrug;
    private Integer targeting;
    private Integer laxg;
    private Integer fivepi;
    private Integer drug2;
    private Integer era;
    private Integer drug3;
    private Integer prostacyclin;
    private Integer drug4;
    private Integer exfoliation;
    private Integer angioplasty;
    private Integer death;
    private Integer deathreason;
    private String addition1;
    private String addition2;
    private String addition3;
    private String addition4;
    private String addition5;
    private String addition6;
    private String addition7;
    private String addition8;
    private String addition9;
    private String addition10;
    private String creator;
    private Date creationtime;
    private String modifier;
    private Date modifiedtime;
    private Date ts;
    private Integer dr;
    private String specifictumor;
    private Date malignanttumordate;
    private Date splenectormydate;
    private Date pacemakerdate;
    private Date atrialhistorydate;
    private Date levvdate;
    private String ibddiagnosis;
    private Date ibddate;
    private Integer sie;
    private Integer sjogrens;
    private Integer ssclerosis;
    private Integer mctd;
    private Integer rarthritis;
    private Integer uctd;
    private Integer octd;
    private String octdspecific;
    private Float hcylevel;
    private Float maximum;
    private Float at3;
    private Integer otherriskjudge;
    private Integer lhfailure;
    private Integer lhfailurespecific;
    private Integer eosinophilia;
    private String othercomplicationss;
    private Integer respiratory;
    private Float vcmax;
    private Float tlc;
    private Float rv;
    private Float rvtlc;
    private Float fev1;
    private Float fev1fvc;
    private Float fef;
    private Float tlcosb;
    private Float tlcova;
    private Integer cet;
    private Integer heartmri;
    private Float ddimer;
    private Float ast;
    private Float alt;
    private Float tbil;
    private Float dbil;
    private Float cr;
    private Integer abgt;
    private Integer antiplatelet;
    private Integer drug5;
    private String otherdrug2;
    private Date exfoliationdate;
    private Date angioplastyfdate;


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

    public Integer getDepartment() {
        return department;
    }

    public void setDepartment(Integer department) {
        this.department = department;
    }

    public Integer getFillingperson() {
        return fillingperson;
    }

    public void setFillingperson(Integer fillingperson) {
        this.fillingperson = fillingperson;
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

    public String getPatientAddress() {
        return patientAddress;
    }

    public void setPatientAddress(String patientAddress) {
        this.patientAddress = patientAddress;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public Date getFirsttime() {
        return firsttime;
    }

    public void setFirsttime(Date firsttime) {
        this.firsttime = firsttime;
    }

    public Integer getSpecialsigns() {
        return specialsigns;
    }

    public void setSpecialsigns(Integer specialsigns) {
        this.specialsigns = specialsigns;
    }

    public Integer getVtehistory() {
        return vtehistory;
    }

    public void setVtehistory(Integer vtehistory) {
        this.vtehistory = vtehistory;
    }

    public Integer getApe() {
        return ape;
    }

    public void setApe(Integer ape) {
        this.ape = ape;
    }

    public Integer getLedvt() {
        return ledvt;
    }

    public void setLedvt(Integer ledvt) {
        this.ledvt = ledvt;
    }

    public String getOtherthrombus() {
        return otherthrombus;
    }

    public void setOtherthrombus(String otherthrombus) {
        this.otherthrombus = otherthrombus;
    }

    public Date getFirstvtetime() {
        return firstvtetime;
    }

    public void setFirstvtetime(Date firstvtetime) {
        this.firstvtetime = firstvtetime;
    }

    public Integer getVterelapse() {
        return vterelapse;
    }

    public void setVterelapse(Integer vterelapse) {
        this.vterelapse = vterelapse;
    }

    public Integer getMalignanttumor() {
        return malignanttumor;
    }

    public void setMalignanttumor(Integer malignanttumor) {
        this.malignanttumor = malignanttumor;
    }

    public Integer getSplenectomy() {
        return splenectomy;
    }

    public void setSplenectomy(Integer splenectomy) {
        this.splenectomy = splenectomy;
    }

    public Integer getPacemaker() {
        return pacemaker;
    }

    public void setPacemaker(Integer pacemaker) {
        this.pacemaker = pacemaker;
    }

    public Integer getAtrialhistory() {
        return atrialhistory;
    }

    public void setAtrialhistory(Integer atrialhistory) {
        this.atrialhistory = atrialhistory;
    }

    public Integer getLevv() {
        return levv;
    }

    public void setLevv(Integer levv) {
        this.levv = levv;
    }

    public Integer getIbd() {
        return ibd;
    }

    public void setIbd(Integer ibd) {
        this.ibd = ibd;
    }

    public String getOtherrisk() {
        return otherrisk;
    }

    public void setOtherrisk(String otherrisk) {
        this.otherrisk = otherrisk;
    }

    public Integer getHypertension() {
        return hypertension;
    }

    public void setHypertension(Integer hypertension) {
        this.hypertension = hypertension;
    }

    public Integer getCoronaryheart() {
        return coronaryheart;
    }

    public void setCoronaryheart(Integer coronaryheart) {
        this.coronaryheart = coronaryheart;
    }

    public Integer getRevascularization() {
        return revascularization;
    }

    public void setRevascularization(Integer revascularization) {
        this.revascularization = revascularization;
    }

    public Integer getDiabetes() {
        return diabetes;
    }

    public void setDiabetes(Integer diabetes) {
        this.diabetes = diabetes;
    }

    public Integer getRenalinsufficiency() {
        return renalinsufficiency;
    }

    public void setRenalinsufficiency(Integer renalinsufficiency) {
        this.renalinsufficiency = renalinsufficiency;
    }

    public Integer getCerebralinfarction() {
        return cerebralinfarction;
    }

    public void setCerebralinfarction(Integer cerebralinfarction) {
        this.cerebralinfarction = cerebralinfarction;
    }

    public Integer getCopd() {
        return copd;
    }

    public void setCopd(Integer copd) {
        this.copd = copd;
    }

    public Integer getCongenitalheart() {
        return congenitalheart;
    }

    public void setCongenitalheart(Integer congenitalheart) {
        this.congenitalheart = congenitalheart;
    }

    public String getChdspecific() {
        return chdspecific;
    }

    public void setChdspecific(String chdspecific) {
        this.chdspecific = chdspecific;
    }

    public Integer getHypothyroidism() {
        return hypothyroidism;
    }

    public void setHypothyroidism(Integer hypothyroidism) {
        this.hypothyroidism = hypothyroidism;
    }

    public Integer getHyperthyroidism() {
        return hyperthyroidism;
    }

    public void setHyperthyroidism(Integer hyperthyroidism) {
        this.hyperthyroidism = hyperthyroidism;
    }

    public Integer getAnemia() {
        return anemia;
    }

    public void setAnemia(Integer anemia) {
        this.anemia = anemia;
    }

    public Integer getPolycythemia() {
        return polycythemia;
    }

    public void setPolycythemia(Integer polycythemia) {
        this.polycythemia = polycythemia;
    }

    public Integer getPlateletlower() {
        return plateletlower;
    }

    public void setPlateletlower(Integer plateletlower) {
        this.plateletlower = plateletlower;
    }

    public Integer getPlateletup() {
        return plateletup;
    }

    public void setPlateletup(Integer plateletup) {
        this.plateletup = plateletup;
    }

    public Integer getOthercomplications() {
        return othercomplications;
    }

    public void setOthercomplications(Integer othercomplications) {
        this.othercomplications = othercomplications;
    }

    public Integer getCteph() {
        return cteph;
    }

    public void setCteph(Integer cteph) {
        this.cteph = cteph;
    }

    public Integer getSixmwd() {
        return sixmwd;
    }

    public void setSixmwd(Integer sixmwd) {
        this.sixmwd = sixmwd;
    }

    public Integer getNoreason1() {
        return noreason1;
    }

    public void setNoreason1(Integer noreason1) {
        this.noreason1 = noreason1;
    }

    public Float getWalking() {
        return walking;
    }

    public void setWalking(Float walking) {
        this.walking = walking;
    }

    public Integer getPpi() {
        return ppi;
    }

    public void setPpi(Integer ppi) {
        this.ppi = ppi;
    }

    public Integer getCtpat() {
        return ctpat;
    }

    public void setCtpat(Integer ctpat) {
        this.ctpat = ctpat;
    }

    public Integer getMripae() {
        return mripae;
    }

    public void setMripae(Integer mripae) {
        this.mripae = mripae;
    }

    public Integer getCmri() {
        return cmri;
    }

    public void setCmri(Integer cmri) {
        this.cmri = cmri;
    }

    public Integer getRhc() {
        return rhc;
    }

    public void setRhc(Integer rhc) {
        this.rhc = rhc;
    }

    public Integer getNoreason2() {
        return noreason2;
    }

    public void setNoreason2(Integer noreason2) {
        this.noreason2 = noreason2;
    }

    public String getOtherreason() {
        return otherreason;
    }

    public void setOtherreason(String otherreason) {
        this.otherreason = otherreason;
    }

    public Integer getPa() {
        return pa;
    }

    public void setPa(Integer pa) {
        this.pa = pa;
    }

    public Date getFirstcatheter() {
        return firstcatheter;
    }

    public void setFirstcatheter(Date firstcatheter) {
        this.firstcatheter = firstcatheter;
    }

    public Float getHr() {
        return hr;
    }

    public void setHr(Float hr) {
        this.hr = hr;
    }

    public Float getBpshrink() {
        return bpshrink;
    }

    public void setBpshrink(Float bpshrink) {
        this.bpshrink = bpshrink;
    }

    public Float getBprelaxation() {
        return bprelaxation;
    }

    public void setBprelaxation(Float bprelaxation) {
        this.bprelaxation = bprelaxation;
    }

    public Float getBpave() {
        return bpave;
    }

    public void setBpave(Float bpave) {
        this.bpave = bpave;
    }

    public Integer getRap() {
        return rap;
    }

    public void setRap(Integer rap) {
        this.rap = rap;
    }

    public Float getRapshrink() {
        return rapshrink;
    }

    public void setRapshrink(Float rapshrink) {
        this.rapshrink = rapshrink;
    }

    public Float getRaprelaxation1() {
        return raprelaxation1;
    }

    public void setRaprelaxation1(Float raprelaxation1) {
        this.raprelaxation1 = raprelaxation1;
    }

    public Float getRapave() {
        return rapave;
    }

    public void setRapave(Float rapave) {
        this.rapave = rapave;
    }

    public Integer getPap() {
        return pap;
    }

    public void setPap(Integer pap) {
        this.pap = pap;
    }

    public Float getPapshrink() {
        return papshrink;
    }

    public void setPapshrink(Float papshrink) {
        this.papshrink = papshrink;
    }

    public Float getRaprelaxation2() {
        return raprelaxation2;
    }

    public void setRaprelaxation2(Float raprelaxation2) {
        this.raprelaxation2 = raprelaxation2;
    }

    public Float getPapave() {
        return papave;
    }

    public void setPapave(Float papave) {
        this.papave = papave;
    }

    public Integer getPawp() {
        return pawp;
    }

    public void setPawp(Integer pawp) {
        this.pawp = pawp;
    }

    public Float getPawpshrink() {
        return pawpshrink;
    }

    public void setPawpshrink(Float pawpshrink) {
        this.pawpshrink = pawpshrink;
    }

    public Float getPawprelaxation() {
        return pawprelaxation;
    }

    public void setPawprelaxation(Float pawprelaxation) {
        this.pawprelaxation = pawprelaxation;
    }

    public Float getPawpave() {
        return pawpave;
    }

    public void setPawpave(Float pawpave) {
        this.pawpave = pawpave;
    }

    public Float getCo() {
        return co;
    }

    public void setCo(Float co) {
        this.co = co;
    }

    public Integer getComethod() {
        return comethod;
    }

    public void setComethod(Integer comethod) {
        this.comethod = comethod;
    }

    public Float getCi() {
        return ci;
    }

    public void setCi(Float ci) {
        this.ci = ci;
    }

    public Float getPvr() {
        return pvr;
    }

    public void setPvr(Float pvr) {
        this.pvr = pvr;
    }

    public Float getLvedd() {
        return lvedd;
    }

    public void setLvedd(Float lvedd) {
        this.lvedd = lvedd;
    }

    public Float getLvef() {
        return lvef;
    }

    public void setLvef(Float lvef) {
        this.lvef = lvef;
    }

    public Float getPasp() {
        return pasp;
    }

    public void setPasp(Float pasp) {
        this.pasp = pasp;
    }

    public Integer getPe() {
        return pe;
    }

    public void setPe(Integer pe) {
        this.pe = pe;
    }

    public Integer getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(Integer bloodgroup) {
        this.bloodgroup = bloodgroup;
    }

    public Integer getNt() {
        return nt;
    }

    public void setNt(Integer nt) {
        this.nt = nt;
    }

    public Float getNtnumber() {
        return ntnumber;
    }

    public void setNtnumber(Float ntnumber) {
        this.ntnumber = ntnumber;
    }

    public Integer getBloodgas() {
        return bloodgas;
    }

    public void setBloodgas(Integer bloodgas) {
        this.bloodgas = bloodgas;
    }

    public Float getPco() {
        return pco;
    }

    public void setPco(Float pco) {
        this.pco = pco;
    }

    public Float getPo() {
        return po;
    }

    public void setPo(Float po) {
        this.po = po;
    }

    public Float getSao() {
        return sao;
    }

    public void setSao(Float sao) {
        this.sao = sao;
    }

    public Float getPaa() {
        return paa;
    }

    public void setPaa(Float paa) {
        this.paa = paa;
    }

    public Integer getAnticoagulant() {
        return anticoagulant;
    }

    public void setAnticoagulant(Integer anticoagulant) {
        this.anticoagulant = anticoagulant;
    }

    public Integer getDrug1() {
        return drug1;
    }

    public void setDrug1(Integer drug1) {
        this.drug1 = drug1;
    }

    public String getOtherdrug() {
        return otherdrug;
    }

    public void setOtherdrug(String otherdrug) {
        this.otherdrug = otherdrug;
    }

    public Integer getTargeting() {
        return targeting;
    }

    public void setTargeting(Integer targeting) {
        this.targeting = targeting;
    }

    public Integer getLaxg() {
        return laxg;
    }

    public void setLaxg(Integer laxg) {
        this.laxg = laxg;
    }

    public Integer getFivepi() {
        return fivepi;
    }

    public void setFivepi(Integer fivepi) {
        this.fivepi = fivepi;
    }

    public Integer getDrug2() {
        return drug2;
    }

    public void setDrug2(Integer drug2) {
        this.drug2 = drug2;
    }

    public Integer getEra() {
        return era;
    }

    public void setEra(Integer era) {
        this.era = era;
    }

    public Integer getDrug3() {
        return drug3;
    }

    public void setDrug3(Integer drug3) {
        this.drug3 = drug3;
    }

    public Integer getProstacyclin() {
        return prostacyclin;
    }

    public void setProstacyclin(Integer prostacyclin) {
        this.prostacyclin = prostacyclin;
    }

    public Integer getDrug4() {
        return drug4;
    }

    public void setDrug4(Integer drug4) {
        this.drug4 = drug4;
    }

    public Integer getExfoliation() {
        return exfoliation;
    }

    public void setExfoliation(Integer exfoliation) {
        this.exfoliation = exfoliation;
    }

    public Integer getAngioplasty() {
        return angioplasty;
    }

    public void setAngioplasty(Integer angioplasty) {
        this.angioplasty = angioplasty;
    }

    public Integer getDeath() {
        return death;
    }

    public void setDeath(Integer death) {
        this.death = death;
    }

    public Integer getDeathreason() {
        return deathreason;
    }

    public void setDeathreason(Integer deathreason) {
        this.deathreason = deathreason;
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

    public String getAddition4() {
        return addition4;
    }

    public void setAddition4(String addition4) {
        this.addition4 = addition4;
    }

    public String getAddition5() {
        return addition5;
    }

    public void setAddition5(String addition5) {
        this.addition5 = addition5;
    }

    public String getAddition6() {
        return addition6;
    }

    public void setAddition6(String addition6) {
        this.addition6 = addition6;
    }

    public String getAddition7() {
        return addition7;
    }

    public void setAddition7(String addition7) {
        this.addition7 = addition7;
    }

    public String getAddition8() {
        return addition8;
    }

    public void setAddition8(String addition8) {
        this.addition8 = addition8;
    }

    public String getAddition9() {
        return addition9;
    }

    public void setAddition9(String addition9) {
        this.addition9 = addition9;
    }

    public String getAddition10() {
        return addition10;
    }

    public void setAddition10(String addition10) {
        this.addition10 = addition10;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
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

    public String getSpecifictumor() {
        return specifictumor;
    }

    public void setSpecifictumor(String specifictumor) {
        this.specifictumor = specifictumor;
    }

    public Date getMalignanttumordate() {
        return malignanttumordate;
    }

    public void setMalignanttumordate(Date malignanttumordate) {
        this.malignanttumordate = malignanttumordate;
    }

    public Date getSplenectormydate() {
        return splenectormydate;
    }

    public void setSplenectormydate(Date splenectormydate) {
        this.splenectormydate = splenectormydate;
    }

    public Date getPacemakerdate() {
        return pacemakerdate;
    }

    public void setPacemakerdate(Date pacemakerdate) {
        this.pacemakerdate = pacemakerdate;
    }

    public Date getAtrialhistorydate() {
        return atrialhistorydate;
    }

    public void setAtrialhistorydate(Date atrialhistorydate) {
        this.atrialhistorydate = atrialhistorydate;
    }

    public Date getLevvdate() {
        return levvdate;
    }

    public void setLevvdate(Date levvdate) {
        this.levvdate = levvdate;
    }

    public String getIbddiagnosis() {
        return ibddiagnosis;
    }

    public void setIbddiagnosis(String ibddiagnosis) {
        this.ibddiagnosis = ibddiagnosis;
    }

    public Date getIbddate() {
        return ibddate;
    }

    public void setIbddate(Date ibddate) {
        this.ibddate = ibddate;
    }

    public Integer getSie() {
        return sie;
    }

    public void setSie(Integer sie) {
        this.sie = sie;
    }

    public Integer getSjogrens() {
        return sjogrens;
    }

    public void setSjogrens(Integer sjogrens) {
        this.sjogrens = sjogrens;
    }

    public Integer getSsclerosis() {
        return ssclerosis;
    }

    public void setSsclerosis(Integer ssclerosis) {
        this.ssclerosis = ssclerosis;
    }

    public Integer getMctd() {
        return mctd;
    }

    public void setMctd(Integer mctd) {
        this.mctd = mctd;
    }

    public Integer getRarthritis() {
        return rarthritis;
    }

    public void setRarthritis(Integer rarthritis) {
        this.rarthritis = rarthritis;
    }

    public Integer getUctd() {
        return uctd;
    }

    public void setUctd(Integer uctd) {
        this.uctd = uctd;
    }

    public Integer getOctd() {
        return octd;
    }

    public void setOctd(Integer octd) {
        this.octd = octd;
    }

    public String getOctdspecific() {
        return octdspecific;
    }

    public void setOctdspecific(String octdspecific) {
        this.octdspecific = octdspecific;
    }

    public Float getHcylevel() {
        return hcylevel;
    }

    public void setHcylevel(Float hcylevel) {
        this.hcylevel = hcylevel;
    }

    public Float getMaximum() {
        return maximum;
    }

    public void setMaximum(Float maximum) {
        this.maximum = maximum;
    }

    public Float getAt3() {
        return at3;
    }

    public void setAt3(Float at3) {
        this.at3 = at3;
    }

    public Integer getOtherriskjudge() {
        return otherriskjudge;
    }

    public void setOtherriskjudge(Integer otherriskjudge) {
        this.otherriskjudge = otherriskjudge;
    }

    public Integer getLhfailure() {
        return lhfailure;
    }

    public void setLhfailure(Integer lhfailure) {
        this.lhfailure = lhfailure;
    }

    public Integer getLhfailurespecific() {
        return lhfailurespecific;
    }

    public void setLhfailurespecific(Integer lhfailurespecific) {
        this.lhfailurespecific = lhfailurespecific;
    }

    public Integer getEosinophilia() {
        return eosinophilia;
    }

    public void setEosinophilia(Integer eosinophilia) {
        this.eosinophilia = eosinophilia;
    }

    public String getOthercomplicationss() {
        return othercomplicationss;
    }

    public void setOthercomplicationss(String othercomplicationss) {
        this.othercomplicationss = othercomplicationss;
    }

    public Integer getRespiratory() {
        return respiratory;
    }

    public void setRespiratory(Integer respiratory) {
        this.respiratory = respiratory;
    }

    public Float getVcmax() {
        return vcmax;
    }

    public void setVcmax(Float vcmax) {
        this.vcmax = vcmax;
    }

    public Float getTlc() {
        return tlc;
    }

    public void setTlc(Float tlc) {
        this.tlc = tlc;
    }

    public Float getRv() {
        return rv;
    }

    public void setRv(Float rv) {
        this.rv = rv;
    }

    public Float getRvtlc() {
        return rvtlc;
    }

    public void setRvtlc(Float rvtlc) {
        this.rvtlc = rvtlc;
    }

    public Float getFev1() {
        return fev1;
    }

    public void setFev1(Float fev1) {
        this.fev1 = fev1;
    }

    public Float getFev1fvc() {
        return fev1fvc;
    }

    public void setFev1fvc(Float fev1fvc) {
        this.fev1fvc = fev1fvc;
    }

    public Float getFef() {
        return fef;
    }

    public void setFef(Float fef) {
        this.fef = fef;
    }

    public Float getTlcosb() {
        return tlcosb;
    }

    public void setTlcosb(Float tlcosb) {
        this.tlcosb = tlcosb;
    }

    public Float getTlcova() {
        return tlcova;
    }

    public void setTlcova(Float tlcova) {
        this.tlcova = tlcova;
    }

    public Integer getCet() {
        return cet;
    }

    public void setCet(Integer cet) {
        this.cet = cet;
    }

    public Integer getHeartmri() {
        return heartmri;
    }

    public void setHeartmri(Integer heartmri) {
        this.heartmri = heartmri;
    }

    public Float getDdimer() {
        return ddimer;
    }

    public void setDdimer(Float ddimer) {
        this.ddimer = ddimer;
    }

    public Float getAst() {
        return ast;
    }

    public void setAst(Float ast) {
        this.ast = ast;
    }

    public Float getAlt() {
        return alt;
    }

    public void setAlt(Float alt) {
        this.alt = alt;
    }

    public Float getTbil() {
        return tbil;
    }

    public void setTbil(Float tbil) {
        this.tbil = tbil;
    }

    public Float getDbil() {
        return dbil;
    }

    public void setDbil(Float dbil) {
        this.dbil = dbil;
    }

    public Float getCr() {
        return cr;
    }

    public void setCr(Float cr) {
        this.cr = cr;
    }

    public Integer getAbgt() {
        return abgt;
    }

    public void setAbgt(Integer abgt) {
        this.abgt = abgt;
    }

    public Integer getAntiplatelet() {
        return antiplatelet;
    }

    public void setAntiplatelet(Integer antiplatelet) {
        this.antiplatelet = antiplatelet;
    }

    public Integer getDrug5() {
        return drug5;
    }

    public void setDrug5(Integer drug5) {
        this.drug5 = drug5;
    }

    public String getOtherdrug2() {
        return otherdrug2;
    }

    public void setOtherdrug2(String otherdrug2) {
        this.otherdrug2 = otherdrug2;
    }

    public Date getExfoliationdate() {
        return exfoliationdate;
    }

    public void setExfoliationdate(Date exfoliationdate) {
        this.exfoliationdate = exfoliationdate;
    }

    public Date getAngioplastyfdate() {
        return angioplastyfdate;
    }

    public void setAngioplastyfdate(Date angioplastyfdate) {
        this.angioplastyfdate = angioplastyfdate;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "Cteph{" +
        "id=" + id +
        ", code=" + code +
        ", department=" + department +
        ", fillingperson=" + fillingperson +
        ", patientName=" + patientName +
        ", patientSex=" + patientSex +
        ", patientAddress=" + patientAddress +
        ", birthday=" + birthday +
        ", height=" + height +
        ", weight=" + weight +
        ", firsttime=" + firsttime +
        ", specialsigns=" + specialsigns +
        ", vtehistory=" + vtehistory +
        ", ape=" + ape +
        ", ledvt=" + ledvt +
        ", otherthrombus=" + otherthrombus +
        ", firstvtetime=" + firstvtetime +
        ", vterelapse=" + vterelapse +
        ", malignanttumor=" + malignanttumor +
        ", splenectomy=" + splenectomy +
        ", pacemaker=" + pacemaker +
        ", atrialhistory=" + atrialhistory +
        ", levv=" + levv +
        ", ibd=" + ibd +
        ", otherrisk=" + otherrisk +
        ", hypertension=" + hypertension +
        ", coronaryheart=" + coronaryheart +
        ", revascularization=" + revascularization +
        ", diabetes=" + diabetes +
        ", renalinsufficiency=" + renalinsufficiency +
        ", cerebralinfarction=" + cerebralinfarction +
        ", copd=" + copd +
        ", congenitalheart=" + congenitalheart +
        ", chdspecific=" + chdspecific +
        ", hypothyroidism=" + hypothyroidism +
        ", hyperthyroidism=" + hyperthyroidism +
        ", anemia=" + anemia +
        ", polycythemia=" + polycythemia +
        ", plateletlower=" + plateletlower +
        ", plateletup=" + plateletup +
        ", othercomplications=" + othercomplications +
        ", cteph=" + cteph +
        ", sixmwd=" + sixmwd +
        ", noreason1=" + noreason1 +
        ", walking=" + walking +
        ", ppi=" + ppi +
        ", ctpat=" + ctpat +
        ", mripae=" + mripae +
        ", cmri=" + cmri +
        ", rhc=" + rhc +
        ", noreason2=" + noreason2 +
        ", otherreason=" + otherreason +
        ", pa=" + pa +
        ", firstcatheter=" + firstcatheter +
        ", hr=" + hr +
        ", bpshrink=" + bpshrink +
        ", bprelaxation=" + bprelaxation +
        ", bpave=" + bpave +
        ", rap=" + rap +
        ", rapshrink=" + rapshrink +
        ", raprelaxation1=" + raprelaxation1 +
        ", rapave=" + rapave +
        ", pap=" + pap +
        ", papshrink=" + papshrink +
        ", raprelaxation2=" + raprelaxation2 +
        ", papave=" + papave +
        ", pawp=" + pawp +
        ", pawpshrink=" + pawpshrink +
        ", pawprelaxation=" + pawprelaxation +
        ", pawpave=" + pawpave +
        ", co=" + co +
        ", comethod=" + comethod +
        ", ci=" + ci +
        ", pvr=" + pvr +
        ", lvedd=" + lvedd +
        ", lvef=" + lvef +
        ", pasp=" + pasp +
        ", pe=" + pe +
        ", bloodgroup=" + bloodgroup +
        ", nt=" + nt +
        ", ntnumber=" + ntnumber +
        ", bloodgas=" + bloodgas +
        ", pco=" + pco +
        ", po=" + po +
        ", sao=" + sao +
        ", paa=" + paa +
        ", anticoagulant=" + anticoagulant +
        ", drug1=" + drug1 +
        ", otherdrug=" + otherdrug +
        ", targeting=" + targeting +
        ", laxg=" + laxg +
        ", fivepi=" + fivepi +
        ", drug2=" + drug2 +
        ", era=" + era +
        ", drug3=" + drug3 +
        ", prostacyclin=" + prostacyclin +
        ", drug4=" + drug4 +
        ", exfoliation=" + exfoliation +
        ", angioplasty=" + angioplasty +
        ", death=" + death +
        ", deathreason=" + deathreason +
        ", addition1=" + addition1 +
        ", addition2=" + addition2 +
        ", addition3=" + addition3 +
        ", addition4=" + addition4 +
        ", addition5=" + addition5 +
        ", addition6=" + addition6 +
        ", addition7=" + addition7 +
        ", addition8=" + addition8 +
        ", addition9=" + addition9 +
        ", addition10=" + addition10 +
        ", creator=" + creator +
        ", creationtime=" + creationtime +
        ", modifier=" + modifier +
        ", modifiedtime=" + modifiedtime +
        ", ts=" + ts +
        ", dr=" + dr +
        ", specifictumor=" + specifictumor +
        ", malignanttumordate=" + malignanttumordate +
        ", splenectormydate=" + splenectormydate +
        ", pacemakerdate=" + pacemakerdate +
        ", atrialhistorydate=" + atrialhistorydate +
        ", levvdate=" + levvdate +
        ", ibddiagnosis=" + ibddiagnosis +
        ", ibddate=" + ibddate +
        ", sie=" + sie +
        ", sjogrens=" + sjogrens +
        ", ssclerosis=" + ssclerosis +
        ", mctd=" + mctd +
        ", rarthritis=" + rarthritis +
        ", uctd=" + uctd +
        ", octd=" + octd +
        ", octdspecific=" + octdspecific +
        ", hcylevel=" + hcylevel +
        ", maximum=" + maximum +
        ", at3=" + at3 +
        ", otherriskjudge=" + otherriskjudge +
        ", lhfailure=" + lhfailure +
        ", lhfailurespecific=" + lhfailurespecific +
        ", eosinophilia=" + eosinophilia +
        ", othercomplicationss=" + othercomplicationss +
        ", respiratory=" + respiratory +
        ", vcmax=" + vcmax +
        ", tlc=" + tlc +
        ", rv=" + rv +
        ", rvtlc=" + rvtlc +
        ", fev1=" + fev1 +
        ", fev1fvc=" + fev1fvc +
        ", fef=" + fef +
        ", tlcosb=" + tlcosb +
        ", tlcova=" + tlcova +
        ", cet=" + cet +
        ", heartmri=" + heartmri +
        ", ddimer=" + ddimer +
        ", ast=" + ast +
        ", alt=" + alt +
        ", tbil=" + tbil +
        ", dbil=" + dbil +
        ", cr=" + cr +
        ", abgt=" + abgt +
        ", antiplatelet=" + antiplatelet +
        ", drug5=" + drug5 +
        ", otherdrug2=" + otherdrug2 +
        ", exfoliationdate=" + exfoliationdate +
        ", angioplastyfdate=" + angioplastyfdate +
        "}";
    }
}

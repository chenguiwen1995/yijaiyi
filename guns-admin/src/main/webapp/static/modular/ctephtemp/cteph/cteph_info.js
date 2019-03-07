/**
 * 初始化ctephtemp详情对话框
 */
var CtephInfoDlg = {
    ctephInfoData : {}
};

/**
 * 清除数据
 */
CtephInfoDlg.clearData = function() {
    this.ctephInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CtephInfoDlg.set = function(key, val) {
    this.ctephInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CtephInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CtephInfoDlg.close = function() {
    parent.layer.close(window.parent.Cteph.layerIndex);
}

/**
 * 收集数据
 */
CtephInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('department')
    .set('fillingperson')
    .set('patientName')
    .set('patientSex')
    .set('patientAddress')
    .set('birthday')
    .set('height')
    .set('weight')
    .set('firsttime')
    .set('specialsigns')
    .set('vtehistory')
    .set('ape')
    .set('ledvt')
    .set('otherthrombus')
    .set('firstvtetime')
    .set('vterelapse')
    .set('malignanttumor')
    .set('splenectomy')
    .set('pacemaker')
    .set('atrialhistory')
    .set('levv')
    .set('ibd')
    .set('otherrisk')
    .set('hypertension')
    .set('coronaryheart')
    .set('revascularization')
    .set('diabetes')
    .set('renalinsufficiency')
    .set('cerebralinfarction')
    .set('copd')
    .set('congenitalheart')
    .set('chdspecific')
    .set('hypothyroidism')
    .set('hyperthyroidism')
    .set('anemia')
    .set('polycythemia')
    .set('plateletlower')
    .set('plateletup')
    .set('othercomplications')
    .set('cteph')
    .set('sixmwd')
    .set('noreason1')
    .set('walking')
    .set('ppi')
    .set('ctpat')
    .set('mripae')
    .set('cmri')
    .set('rhc')
    .set('noreason2')
    .set('otherreason')
    .set('pa')
    .set('firstcatheter')
    .set('hr')
    .set('bpshrink')
    .set('bprelaxation')
    .set('bpave')
    .set('rap')
    .set('rapshrink')
    .set('raprelaxation1')
    .set('rapave')
    .set('pap')
    .set('papshrink')
    .set('raprelaxation2')
    .set('papave')
    .set('pawp')
    .set('pawpshrink')
    .set('pawprelaxation')
    .set('pawpave')
    .set('co')
    .set('comethod')
    .set('ci')
    .set('pvr')
    .set('lvedd')
    .set('lvef')
    .set('pasp')
    .set('pe')
    .set('bloodgroup')
    .set('nt')
    .set('ntnumber')
    .set('bloodgas')
    .set('pco')
    .set('po')
    .set('sao')
    .set('paa')
    .set('anticoagulant')
    .set('drug1')
    .set('otherdrug')
    .set('targeting')
    .set('laxg')
    .set('fivepi')
    .set('drug2')
    .set('era')
    .set('drug3')
    .set('prostacyclin')
    .set('drug4')
    .set('exfoliation')
    .set('angioplasty')
    .set('death')
    .set('deathreason')
    .set('addition1')
    .set('addition2')
    .set('addition3')
    .set('addition4')
    .set('addition5')
    .set('addition6')
    .set('addition7')
    .set('addition8')
    .set('addition9')
    .set('addition10')
    .set('creator')
    .set('creationtime')
    .set('modifier')
    .set('modifiedtime')
    .set('ts')
    .set('dr')
    .set('specifictumor')
    .set('malignanttumordate')
    .set('splenectormydate')
    .set('pacemakerdate')
    .set('atrialhistorydate')
    .set('levvdate')
    .set('ibddiagnosis')
    .set('ibddate')
    .set('sie')
    .set('sjogrens')
    .set('ssclerosis')
    .set('mctd')
    .set('rarthritis')
    .set('uctd')
    .set('octd')
    .set('octdspecific')
    .set('hcylevel')
    .set('maximum')
    .set('at3')
    .set('otherriskjudge')
    .set('lhfailure')
    .set('lhfailurespecific')
    .set('eosinophilia')
    .set('othercomplicationss')
    .set('respiratory')
    .set('vcmax')
    .set('tlc')
    .set('rv')
    .set('rvtlc')
    .set('fev1')
    .set('fev1fvc')
    .set('fef')
    .set('tlcosb')
    .set('tlcova')
    .set('cet')
    .set('heartmri')
    .set('ddimer')
    .set('ast')
    .set('alt')
    .set('tbil')
    .set('dbil')
    .set('cr')
    .set('abgt')
    .set('antiplatelet')
    .set('drug5')
    .set('otherdrug2')
    .set('exfoliationdate')
    .set('angioplastyfdate');
}

/**
 * 提交添加
 */
CtephInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cteph/add", function(data){
        Feng.success("添加成功!");
        window.parent.Cteph.table.refresh();
        CtephInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.ctephInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CtephInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cteph/update", function(data){
        Feng.success("修改成功!");
        window.parent.Cteph.table.refresh();
        CtephInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.ctephInfoData);
    ajax.start();
}

$(function() {

});

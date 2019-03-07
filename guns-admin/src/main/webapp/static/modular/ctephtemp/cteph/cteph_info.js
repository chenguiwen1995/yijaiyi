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
    .set('specifictumor')
    .set('malignanttumordate')
    .set('splenectomy')
    .set('splenectormydate')
    .set('pacemaker')
    .set('pacemakerdate')
    .set('atrialhistory')
    .set('atrialhistorydate')
    .set('levv')
    .set('levvdate')
    .set('ibd')
    .set('ibddiagnosis')
    .set('ibddate')
    .set('connectivetissue')
    .set('aas')
    .set('la')
    .set('acllgg')
    .set('acllgm')
    .set('lgg')
    .set('lgm')
    .set('sie')
    .set('sjogrens')
    .set('ssclerosis')
    .set('mctd')
    .set('rarthritis')
    .set('uctd')
    .set('octd')
    .set('octdspecific')
    .set('hps')
    .set('hcylevel')
    .set('maximum')
    .set('threeitems')
    .set('at')
    .set('proteins')
    .set('proteinc')
    .set('hat')
    .set('otherriskjudge')
    .set('otherrisk')
    .set('hypertension')
    .set('coronaryheart')
    .set('revascularization')
    .set('diabetes')
    .set('lhfailure')
    .set('lhfailurespecific')
    .set('renalinsufficiency')
    .set('cerebralinfarction')
    .set('copd')
    .set('congenitalheart')
    .set('chdspecific')
    .set('hypothyroidism')
    .set('hyperthyroidism')
    .set('anemia')
    .set('polycythemia')
    .set('eosinophilia')
    .set('plateletlower')
    .set('plateletup')
    .set('othercomplications')
    .set('othercomplicationss')
    .set('cteph')
    .set('sixmwd')
    .set('noreason1')
    .set('walking')
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
    .set('tapse')
    .set('pe')
    .set('bloodgroup')
    .set('ddimer')
    .set('nt')
    .set('ntnumber')
    .set('ast')
    .set('alt')
    .set('tbil')
    .set('dbil')
    .set('cr')
    .set('bloodgas')
    .set('abgt')
    .set('pco')
    .set('po')
    .set('sao')
    .set('paa')
    .set('anticoagulant')
    .set('drug1')
    .set('otherdrug')
    .set('antiplatelet')
    .set('drug5')
    .set('otherdrug2')
    .set('targeting')
    .set('laxg')
    .set('fivepi')
    .set('drug2')
    .set('era')
    .set('drug3')
    .set('prostacyclin')
    .set('drug4')
    .set('exfoliation')
    .set('exfoliationdate')
    .set('angioplasty')
    .set('angioplastyfdate')
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
    .set('dr');
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

/**
 * 初始化pulhyFollow详情对话框
 */
var PulhyfollowInfoDlg = {
    pulhyfollowInfoData : {}
};

/**
 * 清除数据
 */
PulhyfollowInfoDlg.clearData = function() {
    this.pulhyfollowInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PulhyfollowInfoDlg.set = function(key, val) {
    this.pulhyfollowInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PulhyfollowInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
PulhyfollowInfoDlg.close = function() {
    parent.layer.close(window.parent.Pulhyfollow.layerIndex);
}

/**
 * 收集数据
 */
PulhyfollowInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('department')
    .set('doctor')
    .set('patientName')
    .set('patientSex')
    .set('patientBirth')
    .set('patientMedno')
    .set('patientPhone')
    .set('patientPhone2')
    .set('patientWechat')
    .set('patientAddress')
    .set('familyPhone')
    .set('pamilyPhone2')
    .set('bdeteriorate')
    .set('bhospitalization')
    .set('nnumber')
    .set('bpulmonary')
    .set('brightheartfailure')
    .set('bhemoptysis')
    .set('other')
    .set('pulmonaryembolism')
    .set('lowervein')
    .set('arrhythmia')
    .set('death')
    .set('deathdate')
    .set('nonpertension')
    .set('vspecific')
    .set('hospitalizationdate1')
    .set('hospitalizationdate2')
    .set('hospitalizationdate3')
    .set('deterioratespecific')
    .set('breathShort')
    .set('syncope')
    .set('syncopeTimes')
    .set('syncopeTime')
    .set('hemoptysis')
    .set('hemoptysisTimes')
    .set('hemoptysisTime')
    .set('swollen')
    .set('otherfeatures')
    .set('regularmedicine')
    .set('irregularreason')
    .set('xdnf')
    .set('xdnfDosage')
    .set('tdnf')
    .set('tdnfDosage')
    .set('facered1')
    .set('headache1')
    .set('stuffynose1')
    .set('musclepain1')
    .set('dizziness1')
    .set('blurredvision1')
    .set('hypotension1')
    .set('menstrualdisorder1')
    .set('other1')
    .set('bst')
    .set('bstDosage')
    .set('mxtt')
    .set('mxttDosage')
    .set('facered2')
    .set('headache2')
    .set('stuffynose2')
    .set('musclepain2')
    .set('dizziness2')
    .set('transaminaseraise2')
    .set('anemia2')
    .set('peripheraledema2')
    .set('hypotension2')
    .set('menstrualdisorder2')
    .set('other2')
    .set('bqls')
    .set('bqlsDosage')
    .set('rmdl')
    .set('rmdlDosage')
    .set('facered3')
    .set('headache3')
    .set('stuffynose3')
    .set('musclepain3')
    .set('diarrhea3')
    .set('localpain3')
    .set('hypotension3')
    .set('other3')
    .set('laxg')
    .set('laxgDosage')
    .set('facered4')
    .set('headache4')
    .set('stuffynose4')
    .set('dizziness4')
    .set('diarrhea4')
    .set('hypotension4')
    .set('other4')
    .set('routineblood')
    .set('bloodbiochemistry')
    .set('nt')
    .set('ntnumber')
    .set('sexhormone')
    .set('ironmetabolism')
    .set('walk')
    .set('walkdistance')
    .set('ct')
    .set('cpet')
    .set('mri')
    .set('othercheck')
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
PulhyfollowInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/pulhyfollow/add", function(data){
        Feng.success("添加成功!");
        window.parent.Pulhyfollow.table.refresh();
        PulhyfollowInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.pulhyfollowInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
PulhyfollowInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/pulhyfollow/update", function(data){
        Feng.success("修改成功!");
        window.parent.Pulhyfollow.table.refresh();
        PulhyfollowInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.pulhyfollowInfoData);
    ajax.start();
}

$(function() {

});

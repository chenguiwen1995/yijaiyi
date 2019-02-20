/**
 * 初始化随访服药情况详情对话框
 */
var FlFollowMedicineInfoDlg = {
    flFollowMedicineInfoData : {}
};

/**
 * 清除数据
 */
FlFollowMedicineInfoDlg.clearData = function() {
    this.flFollowMedicineInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowMedicineInfoDlg.set = function(key, val) {
    this.flFollowMedicineInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowMedicineInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FlFollowMedicineInfoDlg.close = function() {
    parent.layer.close(window.parent.FlFollowMedicine.layerIndex);
}

/**
 * 收集数据
 */
FlFollowMedicineInfoDlg.collectData = function() {
    this
    .set('id')
    .set('flCode')
    .set('crowno')
    .set('hid')
    .set('dose')
    .set('nodosereason')
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
    .set('creationTime')
    .set('creater')
    .set('modifiedTime')
    .set('modifier')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
FlFollowMedicineInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowMedicine/add", function(data){
        Feng.success("添加成功!");
        window.parent.FlFollowMedicine.table.refresh();
        FlFollowMedicineInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowMedicineInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
FlFollowMedicineInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowMedicine/update", function(data){
        Feng.success("修改成功!");
        window.parent.FlFollowMedicine.table.refresh();
        FlFollowMedicineInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowMedicineInfoData);
    ajax.start();
}

$(function() {

});

/**
 * 初始化药品详情对话框
 */
var MedicineInfoDlg = {
    medicineInfoData : {}
};

/**
 * 清除数据
 */
MedicineInfoDlg.clearData = function() {
    this.medicineInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
MedicineInfoDlg.set = function(key, val) {
    this.medicineInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
MedicineInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
MedicineInfoDlg.close = function() {
    parent.layer.close(window.parent.Medicine.layerIndex);
}

/**
 * 收集数据
 */
MedicineInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('name')
    .set('medicinetype')
    .set('creationTime')
    .set('modifiedTime')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
MedicineInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/medicine/add", function(data){
        Feng.success("添加成功!");
        window.parent.Medicine.table.refresh();
        MedicineInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.medicineInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
MedicineInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/medicine/update", function(data){
        Feng.success("修改成功!");
        window.parent.Medicine.table.refresh();
        MedicineInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.medicineInfoData);
    ajax.start();
}

$(function() {

});

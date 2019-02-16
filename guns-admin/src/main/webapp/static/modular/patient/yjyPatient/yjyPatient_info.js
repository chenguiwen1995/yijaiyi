/**
 * 初始化患者管理详情对话框
 */
var YjyPatientInfoDlg = {
    yjyPatientInfoData : {}
};

/**
 * 清除数据
 */
YjyPatientInfoDlg.clearData = function() {
    this.yjyPatientInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YjyPatientInfoDlg.set = function(key, val) {
    this.yjyPatientInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YjyPatientInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
YjyPatientInfoDlg.close = function() {
    parent.layer.close(window.parent.YjyPatient.layerIndex);
}

/**
 * 收集数据
 */
YjyPatientInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('name')
    .set('sex')
    .set('age')
    .set('tel')
    .set('homeTel')
    .set('wechat')
    .set('address')
    .set('dr')
    // .set('creationTime')
    // .set('modifiedTime')
    .set('addition1')
    .set('addition2')
    .set('addition3');
}

/**
 * 提交添加
 */
YjyPatientInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/yjyPatient/add", function(data){
        Feng.success("添加成功!");
        window.parent.YjyPatient.table.refresh();
        YjyPatientInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yjyPatientInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
YjyPatientInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/yjyPatient/update", function(data){
        Feng.success("修改成功!");
        window.parent.YjyPatient.table.refresh();
        YjyPatientInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yjyPatientInfoData);
    ajax.start();
}

$(function() {
    //初始化性别选项
    $("#sex").val($("#sexValue").val());
});

/**
 * 初始化医生详情对话框
 */
var YjyDoctorInfoDlg = {
    yjyDoctorInfoData : {}
};

/**
 * 清除数据
 */
YjyDoctorInfoDlg.clearData = function() {
    this.yjyDoctorInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YjyDoctorInfoDlg.set = function(key, val) {
    this.yjyDoctorInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YjyDoctorInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
YjyDoctorInfoDlg.close = function() {
    parent.layer.close(window.parent.YjyDoctor.layerIndex);
}

/**
 * 收集数据
 */
YjyDoctorInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('name')
    .set('ranks')
    .set('sex')
    .set('creationTime')
    .set('modifiedTime')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
YjyDoctorInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/doctor/add", function(data){
        Feng.success("添加成功!");
        window.parent.YjyDoctor.table.refresh();
        YjyDoctorInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yjyDoctorInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
YjyDoctorInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/doctor/update", function(data){
        Feng.success("修改成功!");
        window.parent.YjyDoctor.table.refresh();
        YjyDoctorInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yjyDoctorInfoData);
    ajax.start();
}

$(function() {
    //初始化性别选项
    $("#sex").val($("#sexValue").val());
});

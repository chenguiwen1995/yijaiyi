/**
 * 初始化随访结果详情对话框
 */
var FlFollowResultInfoDlg = {
    flFollowResultInfoData : {}
};

/**
 * 清除数据
 */
FlFollowResultInfoDlg.clearData = function() {
    this.flFollowResultInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowResultInfoDlg.set = function(key, val) {
    this.flFollowResultInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowResultInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FlFollowResultInfoDlg.close = function() {
    parent.layer.close(window.parent.FlFollowResult.layerIndex);
}

/**
 * 收集数据
 */
FlFollowResultInfoDlg.collectData = function() {
    this
    .set('id')
    .set('flCode')
    .set('crowno')
    .set('hid')
    .set('routineblood')
    .set('bloodbiochemistry')
    .set('nt')
    .set('ntnumber')
    .set('sexhormone')
    .set('ironmetabolism')
    .set('walk')
    .set('walkdistance')
    .set('ct')
    .set('cprt')
    .set('mri')
    .set('othercheck')
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
FlFollowResultInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowResult/add", function(data){
        Feng.success("添加成功!");
        window.parent.FlFollowResult.table.refresh();
        FlFollowResultInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowResultInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
FlFollowResultInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowResult/update", function(data){
        Feng.success("修改成功!");
        window.parent.FlFollowResult.table.refresh();
        FlFollowResultInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowResultInfoData);
    ajax.start();
}

$(function() {

});

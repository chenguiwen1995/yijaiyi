/**
 * 初始化随访表体征页签详情对话框
 */
var FollowFeaturesInfoDlg = {
    followFeaturesInfoData : {}
};

/**
 * 清除数据
 */
FollowFeaturesInfoDlg.clearData = function() {
    this.followFeaturesInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowFeaturesInfoDlg.set = function(key, val) {
    this.followFeaturesInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowFeaturesInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FollowFeaturesInfoDlg.close = function() {
    parent.layer.close(window.parent.FollowFeatures.layerIndex);
}

/**
 * 收集数据
 */
FollowFeaturesInfoDlg.collectData = function() {
    this
    .set('id')
    .set('rowno')
    .set('hid')
    .set('breathShort')
    .set('syncope')
    .set('syncopeTimes')
    .set('syncopeTime')
    .set('hemoptysis')
    .set('hemoptysisTimes')
    .set('hemoptysisTime')
    .set('swollen')
    .set('others')
    .set('creationTime')
    .set('modifiedTime')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
FollowFeaturesInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/followFeatures/add", function(data){
        Feng.success("添加成功!");
        window.parent.FollowFeatures.table.refresh();
        FollowFeaturesInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.followFeaturesInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
FollowFeaturesInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/followFeatures/update", function(data){
        Feng.success("修改成功!");
        window.parent.FollowFeatures.table.refresh();
        FollowFeaturesInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.followFeaturesInfoData);
    ajax.start();
}

$(function() {

});

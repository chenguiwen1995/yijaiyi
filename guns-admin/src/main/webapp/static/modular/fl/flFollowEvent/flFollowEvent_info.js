/**
 * 初始化临床恶化事件详情对话框
 */
var FlFollowEventInfoDlg = {
    flFollowEventInfoData : {}
};

/**
 * 清除数据
 */
FlFollowEventInfoDlg.clearData = function() {
    this.flFollowEventInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowEventInfoDlg.set = function(key, val) {
    this.flFollowEventInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FlFollowEventInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FlFollowEventInfoDlg.close = function() {
    parent.layer.close(window.parent.FlFollowEvent.layerIndex);
}

/**
 * 收集数据
 */
FlFollowEventInfoDlg.collectData = function() {
    this
    .set('id')
    .set('hid')
    .set('flCode')
    .set('deteriorate')
    .set('hospitalization')
    .set('number')
    .set('pulmonary')
    .set('rightheartfailure')
    .set('hemoptysis')
    .set('other')
    .set('pulmonaryembolism')
    .set('lowervein')
    .set('arrhythmia')
    .set('death')
    .set('deathdate')
    .set('nonpertension')
    .set('specific')
    .set('review')
    .set('hospitalizationdate1')
    .set('hospitalizationdate2')
    .set('hospitalizationdate3')
    .set('deterioratespecific')
    .set('creationtime')
    .set('creator')
    .set('modifiedtime')
    .set('modifier')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
FlFollowEventInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowEvent/add", function(data){
        Feng.success("添加成功!");
        window.parent.FlFollowEvent.table.refresh();
        FlFollowEventInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowEventInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
FlFollowEventInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/flFollowEvent/update", function(data){
        Feng.success("修改成功!");
        window.parent.FlFollowEvent.table.refresh();
        FlFollowEventInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.flFollowEventInfoData);
    ajax.start();
}

$(function() {

});

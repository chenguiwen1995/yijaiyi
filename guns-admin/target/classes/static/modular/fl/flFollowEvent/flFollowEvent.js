/**
 * 临床恶化事件管理初始化
 */
var FlFollowEvent = {
    id: "FlFollowEventTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
FlFollowEvent.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hid', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'flCode', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'deteriorate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hospitalization', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'number', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pulmonary', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rightheartfailure', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hemoptysis', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'other', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pulmonaryembolism', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lowervein', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'arrhythmia', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'death', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'deathdate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'nonpertension', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'specific', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'review', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hospitalizationdate1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hospitalizationdate2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hospitalizationdate3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'deterioratespecific', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creationtime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creator', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifiedtime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifier', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ts', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dr', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
FlFollowEvent.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        FlFollowEvent.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加临床恶化事件
 */
FlFollowEvent.openAddFlFollowEvent = function () {
    var index = layer.open({
        type: 2,
        title: '添加临床恶化事件',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/flFollowEvent/flFollowEvent_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看临床恶化事件详情
 */
FlFollowEvent.openFlFollowEventDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '临床恶化事件详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/flFollowEvent/flFollowEvent_update/' + FlFollowEvent.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除临床恶化事件
 */
FlFollowEvent.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/flFollowEvent/delete", function (data) {
            Feng.success("删除成功!");
            FlFollowEvent.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("flFollowEventId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询临床恶化事件列表
 */
FlFollowEvent.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    FlFollowEvent.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = FlFollowEvent.initColumn();
    var table = new BSTable(FlFollowEvent.id, "/flFollowEvent/list", defaultColunms);
    table.setPaginationType("client");
    FlFollowEvent.table = table.init();
});

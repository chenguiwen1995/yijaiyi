/**
 * 随访结果管理初始化
 */
var FlFollowResult = {
    id: "FlFollowResultTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
FlFollowResult.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'flCode', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'crowno', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hid', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'routineblood', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bloodbiochemistry', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'nt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ntnumber', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sexhormone', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ironmetabolism', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'walk', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'walkdistance', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ct', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cprt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'mri', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'othercheck', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creationTime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creater', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifiedTime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifier', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ts', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dr', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
FlFollowResult.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        FlFollowResult.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加随访结果
 */
FlFollowResult.openAddFlFollowResult = function () {
    var index = layer.open({
        type: 2,
        title: '添加随访结果',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/flFollowResult/flFollowResult_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看随访结果详情
 */
FlFollowResult.openFlFollowResultDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '随访结果详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/flFollowResult/flFollowResult_update/' + FlFollowResult.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除随访结果
 */
FlFollowResult.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/flFollowResult/delete", function (data) {
            Feng.success("删除成功!");
            FlFollowResult.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("flFollowResultId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询随访结果列表
 */
FlFollowResult.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    FlFollowResult.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = FlFollowResult.initColumn();
    var table = new BSTable(FlFollowResult.id, "/flFollowResult/list", defaultColunms);
    table.setPaginationType("client");
    FlFollowResult.table = table.init();
});

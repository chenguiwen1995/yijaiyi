/**
 * 随访表体征页签管理初始化
 */
var FollowFeatures = {
    id: "FollowFeaturesTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
FollowFeatures.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '行号', field: 'rowno', visible: true, align: 'center', valign: 'middle'},
            {title: '父序号', field: 'hid', visible: true, align: 'center', valign: 'middle'},
            {title: '气短', field: 'breathShort', visible: true, align: 'center', valign: 'middle'},
            {title: '晕厥', field: 'syncope', visible: true, align: 'center', valign: 'middle'},
            {title: '晕厥次数', field: 'syncopeTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '晕厥时间', field: 'syncopeTime', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血', field: 'hemoptysis', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血次数', field: 'hemoptysisTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血时间', field: 'hemoptysisTime', visible: true, align: 'center', valign: 'middle'},
            {title: '浮肿', field: 'swollen', visible: true, align: 'center', valign: 'middle'},
            {title: '其他', field: 'others', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
FollowFeatures.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        FollowFeatures.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加随访表体征页签
 */
FollowFeatures.openAddFollowFeatures = function () {
    var index = layer.open({
        type: 2,
        title: '添加随访表体征页签',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/followFeatures/followFeatures_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看随访表体征页签详情
 */
FollowFeatures.openFollowFeaturesDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '随访表体征页签详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/followFeatures/followFeatures_update/' + FollowFeatures.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除随访表体征页签
 */
FollowFeatures.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/followFeatures/delete", function (data) {
            Feng.success("删除成功!");
            FollowFeatures.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("followFeaturesId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询随访表体征页签列表
 */
FollowFeatures.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    FollowFeatures.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = FollowFeatures.initColumn();
    var table = new BSTable(FollowFeatures.id, "/followFeatures/list", defaultColunms);
    table.setPaginationType("client");
    FollowFeatures.table = table.init();
});

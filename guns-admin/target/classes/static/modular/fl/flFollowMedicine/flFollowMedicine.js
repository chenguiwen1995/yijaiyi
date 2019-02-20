/**
 * 随访服药情况管理初始化
 */
var FlFollowMedicine = {
    id: "FlFollowMedicineTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
FlFollowMedicine.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'flCode', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'crowno', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hid', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dose', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'nodosereason', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'xdnf', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'xdnfDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tdnf', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tdnfDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'facered1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'headache1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'stuffynose1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'musclepain1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dizziness1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'blurredvision1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypotension1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'menstrualdisorder1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'other1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bst', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bstDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'mxtt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'mxttDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'facered2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'headache2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'stuffynose2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'musclepain2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dizziness2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'transaminaseraise2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'anemia2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'peripheraledema2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypotension2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'menstrualdisorder2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'other2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bqls', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bqlsDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rmdl', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rmdlDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'facered3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'headache3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'stuffynose3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'musclepain3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'diarrhea3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'localpain3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypotension3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'other3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'laxg', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'laxgDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'facered4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'headache4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'stuffynose4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dizziness4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'diarrhea4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypotension4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'other4', visible: true, align: 'center', valign: 'middle'},
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
FlFollowMedicine.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        FlFollowMedicine.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加随访服药情况
 */
FlFollowMedicine.openAddFlFollowMedicine = function () {
    var index = layer.open({
        type: 2,
        title: '添加随访服药情况',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/flFollowMedicine/flFollowMedicine_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看随访服药情况详情
 */
FlFollowMedicine.openFlFollowMedicineDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '随访服药情况详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/flFollowMedicine/flFollowMedicine_update/' + FlFollowMedicine.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除随访服药情况
 */
FlFollowMedicine.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/flFollowMedicine/delete", function (data) {
            Feng.success("删除成功!");
            FlFollowMedicine.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("flFollowMedicineId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询随访服药情况列表
 */
FlFollowMedicine.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    FlFollowMedicine.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = FlFollowMedicine.initColumn();
    var table = new BSTable(FlFollowMedicine.id, "/flFollowMedicine/list", defaultColunms);
    table.setPaginationType("client");
    FlFollowMedicine.table = table.init();
});

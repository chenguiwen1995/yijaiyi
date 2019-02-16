/**
 * 药品管理初始化
 */
var Medicine = {
    id: "MedicineTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Medicine.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '药品编码', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '药品名称', field: 'name', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '药品分类', field: 'medicinetype', visible: true, align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
Medicine.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Medicine.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加药品
 */
Medicine.openAddMedicine = function () {
    var index = layer.open({
        type: 2,
        title: '添加药品',
        area: ['600px', '400px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/medicine/medicine_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看药品详情
 */
Medicine.openMedicineDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '药品详情',
            area: ['800px', '400px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/medicine/medicine_update/' + Medicine.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除药品
 */
Medicine.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/medicine/delete", function (data) {
            Feng.success("删除成功!");
            Medicine.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("medicineId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询药品列表
 */
Medicine.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Medicine.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Medicine.initColumn();
    var table = new BSTable(Medicine.id, "/medicine/list", defaultColunms);
    table.setPaginationType("client");
    Medicine.table = table.init();
});

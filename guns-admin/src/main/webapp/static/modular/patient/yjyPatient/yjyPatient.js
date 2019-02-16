/**
 * 患者管理管理初始化
 */
var YjyPatient = {
    id: "YjyPatientTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
YjyPatient.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '病案号', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '患者姓名', field: 'name', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '性别', field: 'sexName', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '年龄', field: 'age', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '患者电话', field: 'tel', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '家属电话', field: 'home_tel', visible: false, align: 'center', valign: 'middle', sortable: true},
            {title: '微信', field: 'wechat', visible: false, align: 'center', valign: 'middle', sortable: true},
            {title: '地址', field: 'address', visible: false, align: 'center', valign: 'middle', sortable: true},
            // {title: '删除标记', field: 'dr', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '创建时间', field: 'creation_time', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '修改时间', field: 'modified_time', visible: false, align: 'center', valign: 'middle', sortable: true},
            {title: '备注', field: 'addition1', visible: true, align: 'center', valign: 'middle', sortable: true},
            // {title: '附加项2', field: 'addition2', visible: true, align: 'center', valign: 'middle', sortable: true},
            // {title: '附加项3', field: 'addition3', visible: true, align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
YjyPatient.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        YjyPatient.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加患者管理
 */
YjyPatient.openAddYjyPatient = function () {
    var index = layer.open({
        type: 2,
        title: '添加患者管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/yjyPatient/yjyPatient_add'
    });
    this.layerIndex = index;
};

/**
 * 修改患者信息
 */
YjyPatient.openYjyPatientDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '患者管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/yjyPatient/yjyPatient_update/' + YjyPatient.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 打开查看患者管理详情
 */
YjyPatient.openYjyPatientView = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '患者管理详情',
            area: ['800px', '460px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/yjyPatient/yjyPatient_view/' + YjyPatient.seItem.id
        });
        this.layerIndex = index;
    }
};



/**
 * 删除患者管理
 */
YjyPatient.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/yjyPatient/delete", function (data) {
            Feng.success("删除成功!");
            YjyPatient.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("yjyPatientId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询患者管理列表
 */
YjyPatient.search = function () {
    var queryData = {};
    queryData['code'] = $("#code").val();
    YjyPatient.table.refresh({query: queryData});

};

$(function () {
    var defaultColunms = YjyPatient.initColumn();
    var table = new BSTable(YjyPatient.id, "/yjyPatient/list", defaultColunms);
    table.setPaginationType("client");
    YjyPatient.table = table.init();
});

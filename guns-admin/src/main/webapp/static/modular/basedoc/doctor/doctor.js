/**
 * 医生管理初始化
 */
var YjyDoctor = {
    id: "YjyDoctorTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
YjyDoctor.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '医生工号', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '医生姓名', field: 'name', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '医生职称', field: 'ranks', visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '医生性别', field: 'sexName', visible: true, align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
YjyDoctor.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        YjyDoctor.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加医生
 */
YjyDoctor.openAddYjyDoctor = function () {
    // if (window.innerHeight)
    //     var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
    // else if ((document.body) && (document.body.clientHeight))
    //     var winHeight = document.body.clientHeight;
    // var layheight = String(parseInt(winHeight)-30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
    var index = layer.open({
        type: 2,
        title: '添加医生',
        area: ['800px', '400px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/doctor/doctor_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看医生详情
 */
YjyDoctor.openYjyDoctorDetail = function () {
    if (this.check()) {
        // if (window.innerHeight)
        //     var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
        // else if ((document.body) && (document.body.clientHeight))
        //     var winHeight = document.body.clientHeight;
        // var layheight = String(parseInt(winHeight)-30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
        var index = layer.open({
            type: 2,
            title: '医生详情',
            area: ['800px', '400px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/doctor/doctor_update/' + YjyDoctor.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除医生
 */
YjyDoctor.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/doctor/delete", function (data) {
            Feng.success("删除成功!");
            YjyDoctor.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("yjyDoctorId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询医生列表
 */
YjyDoctor.search = function () {
    var queryData = {};
    queryData['code'] = $("#code").val();
    YjyDoctor.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = YjyDoctor.initColumn();
    var table = new BSTable(YjyDoctor.id, "/doctor/list", defaultColunms);
    table.setPaginationType("client");
    YjyDoctor.table = table.init();
});

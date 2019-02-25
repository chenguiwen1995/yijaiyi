/**
 * 随访单管理初始化
 */
var FollowH = {
    id: "FollowHTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
FollowH.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: '随访单编号', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '科室', field: 'department', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '医生', field: 'doctor', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者病案号', field: 'patientMedno', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者名称', field: 'patientName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者性别', field: 'patientSex', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者年龄', field: 'patientAge', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者手机号', field: 'patientPhone', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者手机号2', field: 'patientPhone2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '患者微信', field: 'patientWechat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '患者地址', field: 'patientAddress', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '家属电话', field: 'familyPhone', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '家属电话2', field: 'pamilyPhone2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '创建时间', field: 'creationTime', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '修改时间', field: 'modifiedTime', visible: false, align: 'center', valign: 'middle', sortable: true},
    ];
};

/**
 * 检查是否选中
 */
FollowH.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if (selected.length == 0) {
        Feng.info("请先选中表格中的某一记录！");
        return false;
    } else {
        FollowH.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加随访单
 */
FollowH.openAddFollowH = function () {
    if (window.innerHeight)
        var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
    else if ((document.body) && (document.body.clientHeight))
        var winHeight = document.body.clientHeight;
    var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
    var index = layer.open({
        type: 2,
        title: '添加随访单',
        area: ['800px', layheight], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/followH/followH_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看随访单详情
 */
FollowH.openFollowHDetail = function () {
    if (this.check()) {
        if (window.innerHeight)
            var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
        else if ((document.body) && (document.body.clientHeight))
            var winHeight = document.body.clientHeight;
        var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
        var index = layer.open({
            type: 2,
            title: '随访单详情',
            area: ['800px', layheight], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/followH/followH_view/' + FollowH.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 打开查看随访单详情
 */
FollowH.editFollowHDetail = function () {
    if (this.check()) {
        if (window.innerHeight)
            var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
        else if ((document.body) && (document.body.clientHeight))
            var winHeight = document.body.clientHeight;
        var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
        var index = layer.open({
            type: 2,
            title: '随访单详情',
            area: ['800px', layheight], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/followH/followH_edit/' + FollowH.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除随访单
 */
FollowH.delete = function () {
    if (this.check()) {

        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/followH/delete", function (data) {
                Feng.success("删除成功!");
                FollowH.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("followHId", FollowH.seItem.id);     //将this.seItem.id改为FollowH.seItem.id
            ajax.start();
        };

        Feng.confirm("是否刪除该随访单?", operation);
    }
};

/**
 * 查询随访单列表
 */
FollowH.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    FollowH.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = FollowH.initColumn();
    var table = new BSTable(FollowH.id, "/followH/list", defaultColunms);
    table.setPaginationType("client");
    //table.style
    FollowH.table = table.init();
});

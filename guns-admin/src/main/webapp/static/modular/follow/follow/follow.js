/**
 * follow管理初始化
 */
var Follow = {
    id: "FollowTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Follow.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'code', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'department', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'doctor', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientName', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientSex', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientAge', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientMedno', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientPhone', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientPhone2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientWechat', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientAddress', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'familyPhone', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pamilyPhone2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'deteriorate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hospitalization', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'number', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pulmonary', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rightheartfailure', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hemoptysis1', visible: true, align: 'center', valign: 'middle'},
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
            {title: '', field: 'regulardose', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'othersereason', visible: true, align: 'center', valign: 'middle'},
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
            {title: '', field: 'breathShort', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'syncope', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'syncopeTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'syncopeTime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hemoptysis', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hemoptysisTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hemoptysisMax', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'swollen', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'others', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creator', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creationTime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifier', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifiedTime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ts', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dr', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Follow.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Follow.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加follow
 */
Follow.openAddFollow = function () {
    var index = layer.open({
        type: 2,
        title: '添加follow',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/follow/follow_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看follow详情
 */
Follow.openFollowDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'follow详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/follow/follow_update/' + Follow.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除follow
 */
Follow.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/follow/delete", function (data) {
            Feng.success("删除成功!");
            Follow.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("followId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询follow列表
 */
Follow.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Follow.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Follow.initColumn();
    var table = new BSTable(Follow.id, "/follow/list", defaultColunms);
    table.setPaginationType("client");
    Follow.table = table.init();
});

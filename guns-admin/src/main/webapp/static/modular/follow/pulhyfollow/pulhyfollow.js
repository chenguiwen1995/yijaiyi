/**
 * pulhyFollow管理初始化
 */
var Pulhyfollow = {
    id: "PulhyfollowTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Pulhyfollow.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '主键', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '随访编号', field: 'code', visible: true, align: 'center', valign: 'middle'},
            {title: '随访科室', field: 'department', visible: true, align: 'center', valign: 'middle'},
            {title: '医生', field: 'doctor', visible: true, align: 'center', valign: 'middle'},
            {title: '患者姓名', field: 'patientName', visible: true, align: 'center', valign: 'middle'},
            {title: '患者性别', field: 'patientSex', visible: true, align: 'center', valign: 'middle'},
            {title: '患者出生日期', field: 'patientBirth', visible: true, align: 'center', valign: 'middle'},
            {title: '患者病历号', field: 'patientMedno', visible: true, align: 'center', valign: 'middle'},
            {title: '患者手机号码', field: 'patientPhone', visible: true, align: 'center', valign: 'middle'},
            {title: '患者电话', field: 'patientPhone2', visible: true, align: 'center', valign: 'middle'},
            {title: '患者微信', field: 'patientWechat', visible: true, align: 'center', valign: 'middle'},
            {title: '患者地址', field: 'patientAddress', visible: true, align: 'center', valign: 'middle'},
            {title: '家人手机号码', field: 'familyPhone', visible: true, align: 'center', valign: 'middle'},
            {title: '家人电话', field: 'pamilyPhone2', visible: true, align: 'center', valign: 'middle'},
            {title: '是否发生临床恶化时间', field: 'bdeteriorate', visible: true, align: 'center', valign: 'middle'},
            {title: '是否住院', field: 'bhospitalization', visible: true, align: 'center', valign: 'middle'},
            {title: '住院次数', field: 'nnumber', visible: true, align: 'center', valign: 'middle'},
            {title: '是否肺部感染', field: 'bpulmonary', visible: true, align: 'center', valign: 'middle'},
            {title: '右心衰加重', field: 'brightheartfailure', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血', field: 'bhemoptysis', visible: true, align: 'center', valign: 'middle'},
            {title: '其他出血情况', field: 'other', visible: true, align: 'center', valign: 'middle'},
            {title: '是否再发肺栓塞', field: 'pulmonaryembolism', visible: true, align: 'center', valign: 'middle'},
            {title: '下肢深静脉血栓', field: 'lowervein', visible: true, align: 'center', valign: 'middle'},
            {title: '是否心率失常', field: 'arrhythmia', visible: true, align: 'center', valign: 'middle'},
            {title: '是否死亡', field: 'death', visible: true, align: 'center', valign: 'middle'},
            {title: '死亡日期', field: 'deathdate', visible: true, align: 'center', valign: 'middle'},
            {title: '非肺高压原因', field: 'nonpertension', visible: true, align: 'center', valign: 'middle'},
            {title: '请具体', field: 'vspecific', visible: true, align: 'center', valign: 'middle'},
            {title: '住院时间', field: 'hospitalizationdate1', visible: true, align: 'center', valign: 'middle'},
            {title: '住院时间', field: 'hospitalizationdate2', visible: true, align: 'center', valign: 'middle'},
            {title: '住院时间', field: 'hospitalizationdate3', visible: true, align: 'center', valign: 'middle'},
            {title: '重要恶化时间详情', field: 'deterioratespecific', visible: true, align: 'center', valign: 'middle'},
            {title: '气短', field: 'breathShort', visible: true, align: 'center', valign: 'middle'},
            {title: '晕厥', field: 'syncope', visible: true, align: 'center', valign: 'middle'},
            {title: '晕厥次数', field: 'syncopeTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '上次晕厥时间', field: 'syncopeTime', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血', field: 'hemoptysis', visible: true, align: 'center', valign: 'middle'},
            {title: '咳血次数', field: 'hemoptysisTimes', visible: true, align: 'center', valign: 'middle'},
            {title: '上次咳血时间', field: 'hemoptysisTime', visible: true, align: 'center', valign: 'middle'},
            {title: '浮肿', field: 'swollen', visible: true, align: 'center', valign: 'middle'},
            {title: '其他体征', field: 'otherfeatures', visible: true, align: 'center', valign: 'middle'},
            {title: '是否规律服药', field: 'regularmedicine', visible: true, align: 'center', valign: 'middle'},
            {title: '不规律原因', field: 'irregularreason', visible: true, align: 'center', valign: 'middle'},
            {title: '西地那非', field: 'xdnf', visible: true, align: 'center', valign: 'middle'},
            {title: '西地那非计量', field: 'xdnfDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '他达那非', field: 'tdnf', visible: true, align: 'center', valign: 'middle'},
            {title: '他达那非计量', field: 'tdnfDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '面色潮红', field: 'facered1', visible: true, align: 'center', valign: 'middle'},
            {title: '头痛', field: 'headache1', visible: true, align: 'center', valign: 'middle'},
            {title: '鼻塞', field: 'stuffynose1', visible: true, align: 'center', valign: 'middle'},
            {title: '肌肉疼痛', field: 'musclepain1', visible: true, align: 'center', valign: 'middle'},
            {title: '头晕', field: 'dizziness1', visible: true, align: 'center', valign: 'middle'},
            {title: '视物模糊', field: 'blurredvision1', visible: true, align: 'center', valign: 'middle'},
            {title: '低血压', field: 'hypotension1', visible: true, align: 'center', valign: 'middle'},
            {title: '月经紊乱', field: 'menstrualdisorder1', visible: true, align: 'center', valign: 'middle'},
            {title: '其他', field: 'other1', visible: true, align: 'center', valign: 'middle'},
            {title: '波生坦', field: 'bst', visible: true, align: 'center', valign: 'middle'},
            {title: '波生坦计量', field: 'bstDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '马昔腾坦', field: 'mxtt', visible: true, align: 'center', valign: 'middle'},
            {title: '马昔腾坦计量', field: 'mxttDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '面色潮红', field: 'facered2', visible: true, align: 'center', valign: 'middle'},
            {title: '头痛', field: 'headache2', visible: true, align: 'center', valign: 'middle'},
            {title: '鼻塞', field: 'stuffynose2', visible: true, align: 'center', valign: 'middle'},
            {title: '肌肉疼痛', field: 'musclepain2', visible: true, align: 'center', valign: 'middle'},
            {title: '头晕', field: 'dizziness2', visible: true, align: 'center', valign: 'middle'},
            {title: '转氨酶增高', field: 'transaminaseraise2', visible: true, align: 'center', valign: 'middle'},
            {title: '贫血', field: 'anemia2', visible: true, align: 'center', valign: 'middle'},
            {title: '外周浮肿', field: 'peripheraledema2', visible: true, align: 'center', valign: 'middle'},
            {title: '低血压', field: 'hypotension2', visible: true, align: 'center', valign: 'middle'},
            {title: '月经紊乱', field: 'menstrualdisorder2', visible: true, align: 'center', valign: 'middle'},
            {title: '其他', field: 'other2', visible: true, align: 'center', valign: 'middle'},
            {title: '贝前列素', field: 'bqls', visible: true, align: 'center', valign: 'middle'},
            {title: '贝前列素剂量', field: 'bqlsDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '瑞莫杜林', field: 'rmdl', visible: true, align: 'center', valign: 'middle'},
            {title: '瑞莫杜林剂量', field: 'rmdlDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '面色潮红', field: 'facered3', visible: true, align: 'center', valign: 'middle'},
            {title: '头痛', field: 'headache3', visible: true, align: 'center', valign: 'middle'},
            {title: '鼻塞', field: 'stuffynose3', visible: true, align: 'center', valign: 'middle'},
            {title: '肌肉疼痛', field: 'musclepain3', visible: true, align: 'center', valign: 'middle'},
            {title: '腹泻', field: 'diarrhea3', visible: true, align: 'center', valign: 'middle'},
            {title: '局部疼痛', field: 'localpain3', visible: true, align: 'center', valign: 'middle'},
            {title: '低血压', field: 'hypotension3', visible: true, align: 'center', valign: 'middle'},
            {title: '其他', field: 'other3', visible: true, align: 'center', valign: 'middle'},
            {title: '利奥西呱', field: 'laxg', visible: true, align: 'center', valign: 'middle'},
            {title: '利奥西呱计量', field: 'laxgDosage', visible: true, align: 'center', valign: 'middle'},
            {title: '面色潮红', field: 'facered4', visible: true, align: 'center', valign: 'middle'},
            {title: '头痛', field: 'headache4', visible: true, align: 'center', valign: 'middle'},
            {title: '鼻塞', field: 'stuffynose4', visible: true, align: 'center', valign: 'middle'},
            {title: '头晕', field: 'dizziness4', visible: true, align: 'center', valign: 'middle'},
            {title: '腹泻', field: 'diarrhea4', visible: true, align: 'center', valign: 'middle'},
            {title: '低血压', field: 'hypotension4', visible: true, align: 'center', valign: 'middle'},
            {title: '其他', field: 'other4', visible: true, align: 'center', valign: 'middle'},
            {title: '血常规', field: 'routineblood', visible: true, align: 'center', valign: 'middle'},
            {title: '血生化', field: 'bloodbiochemistry', visible: true, align: 'center', valign: 'middle'},
            {title: 'NT-PROBNP', field: 'nt', visible: true, align: 'center', valign: 'middle'},
            {title: 'NT-PROBNP数值', field: 'ntnumber', visible: true, align: 'center', valign: 'middle'},
            {title: '性激素', field: 'sexhormone', visible: true, align: 'center', valign: 'middle'},
            {title: '铁代谢', field: 'ironmetabolism', visible: true, align: 'center', valign: 'middle'},
            {title: '六分钟步行', field: 'walk', visible: true, align: 'center', valign: 'middle'},
            {title: '六分钟步行距离', field: 'walkdistance', visible: true, align: 'center', valign: 'middle'},
            {title: 'CT', field: 'ct', visible: true, align: 'center', valign: 'middle'},
            {title: 'CPET', field: 'cpet', visible: true, align: 'center', valign: 'middle'},
            {title: 'MRI', field: 'mri', visible: true, align: 'center', valign: 'middle'},
            {title: '其他检查', field: 'othercheck', visible: true, align: 'center', valign: 'middle'},
            {title: '创建人', field: 'creator', visible: true, align: 'center', valign: 'middle'},
            {title: '创建时间', field: 'creationtime', visible: true, align: 'center', valign: 'middle'},
            {title: '修改人', field: 'modifier', visible: true, align: 'center', valign: 'middle'},
            {title: '修改时间', field: 'modifiedtime', visible: true, align: 'center', valign: 'middle'},
            {title: '时间戳', field: 'ts', visible: true, align: 'center', valign: 'middle'},
            {title: '删除标记', field: 'dr', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Pulhyfollow.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Pulhyfollow.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加pulhyFollow
 */
Pulhyfollow.openAddPulhyfollow = function () {
    var index = layer.open({
        type: 2,
        title: '添加pulhyFollow',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/pulhyfollow/pulhyfollow_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看pulhyFollow详情
 */
Pulhyfollow.openPulhyfollowDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'pulhyFollow详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/pulhyfollow/pulhyfollow_update/' + Pulhyfollow.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除pulhyFollow
 */
Pulhyfollow.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/pulhyfollow/delete", function (data) {
            Feng.success("删除成功!");
            Pulhyfollow.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("pulhyfollowId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询pulhyFollow列表
 */
Pulhyfollow.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Pulhyfollow.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Pulhyfollow.initColumn();
    var table = new BSTable(Pulhyfollow.id, "/pulhyfollow/list", defaultColunms);
    table.setPaginationType("client");
    Pulhyfollow.table = table.init();
});

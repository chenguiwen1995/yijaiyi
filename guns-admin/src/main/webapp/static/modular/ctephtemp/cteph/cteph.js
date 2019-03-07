/**
 * ctephtemp管理初始化
 */
var Cteph = {
    id: "CtephTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Cteph.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},


        // {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle'},
        {title: '编号', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '参与中心', field: 'departmentName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '填表人', field: 'fillingpersonName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者姓名', field: 'patient_name', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者性别', field: 'sexName', visible: true, align: 'center', valign: 'middle', sortable: true},
        // {title: '患者年龄', field: 'patient_age', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者地址', field: 'patientAddress', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '出生日期', field: 'birthday', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '身高(cm)', field: 'height', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '体重(kg)', field: 'weight', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '首发症状时间', field: 'firsttime', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '特殊临床症状体征', field: 'specialsigns', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: 'VTE病史', field: 'vtehistory', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '急性肺栓塞', field: 'ape', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '下肢深静脉血栓', field: 'ledvt', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '其他部位深静脉血栓', field: 'otherthrombus', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '首发VTE事件时间', field: 'firstvtetime', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '是否有VTE事件复发', field: 'vterelapse', visible: false, align: 'center', valign: 'middle', sortable: true, sortable: true},
        {title: '恶性肿瘤', field: 'malignanttumor', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脾切除', field: 'splenectomy', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '起搏器植入', field: 'pacemaker', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脑室心房分流手术病史', field: 'atrialhistory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗磷脂抗体综合征', field: 'aas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '高同型半胱氨酸血症', field: 'hps', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白C缺乏', field: 'cdeficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白S缺乏', field: 'sdeficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ATIII缺乏', field: 'atdeficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '下肢静脉曲张', field: 'levv', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '炎症性肠病', field: 'ibd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '炎症性肠病具体', field: 'ibdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他危险因素', field: 'otherrisk', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '高血压', field: 'hypertension', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '冠心病', field: 'coronaryheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '冠心病是否已行血运重建', field: 'revascularization', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '糖尿病', field: 'diabetes', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肾功能不全', field: 'renalinsufficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脑梗塞', field: 'cerebralinfarction', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '慢性阻塞性肺疾病', field: 'copd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '先天性心脏病', field: 'congenitalheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '先天性心脏病具体', field: 'chdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '结缔组织病', field: 'connectivetissue', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '结缔组织病具体', field: 'ctdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '甲状腺功能减低', field: 'hypothyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '甲状腺功能亢进', field: 'hyperthyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '贫血', field: 'anemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '红细胞增多症', field: 'polycythemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血小板减低', field: 'plateletlower', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血小板增多', field: 'plateletup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他重要合并疾病', field: 'othercomplications', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '确诊CTEPH时心功能分级', field: 'cteph', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '6MWD是否进行', field: 'sixmwd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '未进行原因', field: 'noreason1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '步行距离(m)', field: 'walking', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肺灌注显像', field: 'ppi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'CT肺动脉增强', field: 'ctpat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'MRI肺动脉增强', field: 'mripae', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '心脏MRI', field: 'cmri', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '右心导管', field: 'rhc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '未做原因', field: 'noreason2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他原因', field: 'otherreason', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肺动脉造影', field: 'pa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '首次导管时间', field: 'firstcatheter', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'HR, bpm', field: 'hr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'BP收缩(mm Hg)', field: 'bpshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'BP舒张(mm Hg)', field: 'bprelaxation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'BP平均(mm Hg)', field: 'bpave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RAP', field: 'rap', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RAP收缩(mm Hg)', field: 'rapshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RAP舒张(mm Hg)', field: 'raprelaxation1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RAP平均(mm Hg)', field: 'rapave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAP', field: 'pap', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAP收缩(mm Hg)', field: 'papshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAP舒张(mm Hg)', field: 'raprelaxation2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAP平均(mm Hg)', field: 'papave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAWP', field: 'pawp', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAWP收缩(mm Hg)', field: 'pawpshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAWP舒张(mm Hg)', field: 'pawprelaxation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PAWP平均(mm Hg)', field: 'pawpave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'CO (Qp), L/min', field: 'co', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'CO测定方法', field: 'comethod', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'CI, L/min/m2', field: 'ci', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PVR, Wood U', field: 'pvr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'SvO2, %', field: 'svo2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左室舒张末内径LVEDD (mm)', field: 'lvedd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左室射血分数LVEF (%)', field: 'lvef', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '超声估测肺动脉收缩压PASP(mm Hg)', field: 'pasp', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '心包积液', field: 'pe', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血型', field: 'bloodgroup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'HCY', field: 'hcy', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'HCY umol/L', field: 'hcynumber', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'NT-proBNP', field: 'nt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'NT-proBNP pg/ml', field: 'ntnumber', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗磷脂抗体', field: 'aa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '狼疮抗凝物（LA）', field: 'la', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ACL IgG', field: 'acllgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ACL IgM', field: 'acllgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'β2GP1 IgG', field: 'lgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'β2GP1 IgM', field: 'lgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '易栓三项', field: 'threeitems', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ATIII %', field: 'ats', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白S', field: 'proteins', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白C', field: 'proteinc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '是否接受华发林抗凝治疗', field: 'hat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血气', field: 'bloodgas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PH', field: 'ph', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PCO2 mm Hg', field: 'pco', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PO2 mm Hg', field: 'po', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'SaO2 %', field: 'sao', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'P(A-a) mm Hg', field: 'paa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗凝治疗', field: 'anticoagulant', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他药物', field: 'otherdrug', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '靶向治疗', field: 'targeting', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '利奥西呱', field: 'laxg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '5型磷酸二酯酶抑制剂', field: 'fivepi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '内皮素受体拮抗剂', field: 'era', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug3', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '前列环素', field: 'prostacyclin', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug4', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肺动脉内膜剥脱术', field: 'exfoliation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '球囊肺动脉成形术', field: 'angioplasty', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '是否死亡', field: 'death', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '死亡原因', field: 'deathreason', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition1', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition2', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition3', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition4', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition5', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition6', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition7', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition8', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition9', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition10', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '创建人', field: 'creator', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '创建时间', field: 'creationtime', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '最近修改者', field: 'modifier', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '最近修改时间', field: 'modifiedtime', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'ts', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'dr', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Cteph.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Cteph.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加ctephtemp
 */
Cteph.openAddCteph = function () {
    var index = layer.open({
        type: 2,
        title: '添加ctephtemp',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cteph/cteph_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看ctephtemp详情
 */
Cteph.openCtephDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'ctephtemp详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cteph/cteph_update/' + Cteph.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除ctephtemp
 */
Cteph.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cteph/delete", function (data) {
            Feng.success("删除成功!");
            Cteph.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("ctephId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询ctephtemp列表
 */
Cteph.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Cteph.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Cteph.initColumn();
    var table = new BSTable(Cteph.id, "/cteph/list", defaultColunms);
    table.setPaginationType("client");
    Cteph.table = table.init();
});

/**
 * CTEPH调查表管理初始化
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
        // {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
        {title: '编号', field: 'code', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '参与中心', field: 'departmentName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '填表人', field: 'fillingpersonName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者姓名', field: 'patient_name', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者性别', field: 'sexName', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '患者地址', field: 'patientAddress', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '出生日期', field: 'birthday', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '身高(cm)', field: 'height', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '体重(kg)', field: 'weight', visible: true, align: 'center', valign: 'middle', sortable: true},
        {title: '首发症状时间', field: 'firsttime', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '特殊临床症状体征', field: 'specialsigns', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '既往静脉血栓栓塞症（VTE）病史', field: 'vtehistory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '急性肺栓塞', field: 'ape', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '下肢深静脉血栓', field: 'ledvt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他部位深静脉血栓', field: 'otherthrombus', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '首发VTE事件时间', field: 'firstvtetime', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '是否有VTE事件复发', field: 'vterelapse', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '恶性肿瘤', field: 'malignanttumor', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '具体肿瘤诊断', field: 'specifictumor', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '诊断时间', field: 'malignanttumordate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脾切除', field: 'splenectomy', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脾切除手术时间', field: 'splenectormydate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '起搏器植入', field: 'pacemaker', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '起搏器植入时间', field: 'pacemakerdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脑室心房分流手术', field: 'atrialhistory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '手术时间', field: 'atrialhistorydate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '下肢静脉曲张', field: 'levv', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '诊断时间', field: 'levvdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '炎症性肠病', field: 'ibd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '具体诊断', field: 'ibddiagnosis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '诊断时间', field: 'ibddate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '结缔组织病', field: 'connectivetissue', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗磷脂抗体综合征', field: 'aas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '狼疮抗凝物（LA）', field: 'la', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ACL IgG', field: 'acllgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ACL IgM', field: 'acllgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'β2GP1 IgG', field: 'lgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'β2GP1 IgM', field: 'lgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '系统性红斑狼疮', field: 'sie', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '干燥综合征', field: 'sjogrens', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '系统性硬化症', field: 'ssclerosis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '混合性结缔组织病', field: 'mctd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '类风湿性关节炎', field: 'rarthritis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '未分化结缔组织病', field: 'uctd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他结缔组织病', field: 'octd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '具体其他结缔组织病', field: 'octdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '高同型半胱氨酸（HCY）血症', field: 'hps', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'HCY水平', field: 'hcylevel', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '参考值上限', field: 'maximum', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '易栓三项', field: 'threeitems', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ATIII %', field: 'at', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白S', field: 'proteins', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '蛋白C', field: 'proteinc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '检测时或之前7日是否接受华法林抗凝治疗', field: 'hat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他危险因素', field: 'otherriskjudge', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '具体危险因素', field: 'otherrisk', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '高血压', field: 'hypertension', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '冠心病', field: 'coronaryheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '冠心病是否已行血运重建', field: 'revascularization', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '糖尿病', field: 'diabetes', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左心衰竭', field: 'lhfailure', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左心衰竭具体', field: 'lhfailurespecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '慢性肾功能不全', field: 'renalinsufficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '脑梗塞', field: 'cerebralinfarction', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '慢性阻塞性肺疾病', field: 'copd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '先天性心脏病', field: 'congenitalheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '先天性心脏病具体', field: 'chdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '甲状腺功能减低', field: 'hypothyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '甲状腺功能亢进', field: 'hyperthyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '贫血', field: 'anemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '红细胞增多症', field: 'polycythemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '嗜酸粒细胞增多增多症', field: 'eosinophilia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血小板减低', field: 'plateletlower', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血小板增多', field: 'plateletup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他重要合并疾病', field: 'othercomplications', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '具体疾病', field: 'othercomplicationss', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '确诊CTEPH时心功能分级', field: 'cteph', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '6MWD是否进行', field: 'sixmwd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '未进行原因', field: 'noreason1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '步行距离（m）', field: 'walking', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '呼吸功能', field: 'respiratory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'VC MAX (%)', field: 'vcmax', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'TLC (%)', field: 'tlc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RV(%)', field: 'rv', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'RV/TLC (%)', field: 'rvtlc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'FEV1 (%)实/预', field: 'fev1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'FEV1/FVC (%)实测', field: 'fev1fvc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'FEF25-75 (%)', field: 'fef', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'TLCO SB (%)', field: 'tlcosb', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'TLCO/VA (%)', field: 'tlcova', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '心肺运动试验', field: 'cet', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '心脏MRI', field: 'heartmri', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肺灌注显像', field: 'ppi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'CT肺动脉增强', field: 'ctpat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'MRI肺动脉增强', field: 'mripae', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'cmri', visible: false, align: 'center', valign: 'middle', sortable: true},
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
        {title: 'SvO2 (肺动脉氧饱和度), %', field: 'svo2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左室舒张末内径LVEDD (mm)', field: 'lvedd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '左室射血分数LVEF (%)', field: 'lvef', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '超声估测肺动脉收缩压PASP(mm Hg)', field: 'pasp', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '三尖瓣环收缩期位移 TAPSE（mm）', field: 'tapse', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '心包积液', field: 'pe', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血型', field: 'bloodgroup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'D-二聚体(μg/mL)', field: 'ddimer', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'NT-proBNP', field: 'nt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'NT-proBNP pg/ml', field: 'ntnumber', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'AST（IU/ml）', field: 'ast', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'ALT（IU/ml）', field: 'alt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'Tbil（μmol/L）', field: 'tbil', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'Dbil（μmol/L）', field: 'dbil', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '血Cr（μmol/L）', field: 'cr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '动脉血气', field: 'bloodgas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '动脉血气类型', field: 'abgt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PCO2 mmHg', field: 'pco', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'PO2 mmHg', field: 'po', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'SaO2 %', field: 'sao', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'P(A-a) mmHg', field: 'paa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗凝治疗', field: 'anticoagulant', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他药物', field: 'otherdrug', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '抗血小板治疗', field: 'antiplatelet', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug5', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '其他药物', field: 'otherdrug2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '靶向治疗', field: 'targeting', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '利奥西呱', field: 'laxg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '5型磷酸二酯酶抑制剂', field: 'fivepi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '内皮素受体拮抗剂', field: 'era', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug3', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '前列环素', field: 'prostacyclin', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '药物', field: 'drug4', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '肺动脉内膜剥脱术', field: 'exfoliation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '手术时间', field: 'exfoliationdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '球囊肺动脉成形术', field: 'angioplasty', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '首次手术时间', field: 'angioplastyfdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '是否死亡', field: 'death', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '死亡原因', field: 'deathreason', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'addition1', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition2', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition3', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition4', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition5', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition6', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition7', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition8', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition9', visible: true, align: 'center', valign: 'middle'},
        // {title: '', field: 'addition10', visible: true, align: 'center', valign: 'middle'},
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
 * 点击添加CTEPH调查表
 */
Cteph.openAddCteph = function () {
    if (window.innerHeight)
        var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
    else if ((document.body) && (document.body.clientHeight))
        var winHeight = document.body.clientHeight;
    var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
    var index = layer.open({
        type: 2,
        title: '添加CTEPH调查表',
        area: ['800px', layheight], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cteph/cteph_add'
    });
    this.layerIndex = index;
};

/**
 * 修改CTEPH调查表详情
 */
Cteph.openCtephDetail = function () {
    if (this.check()) {
        if (window.innerHeight)
            var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
        else if ((document.body) && (document.body.clientHeight))
            var winHeight = document.body.clientHeight;
        var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
        var index = layer.open({
            type: 2,
            title: 'CTEPH调查表详情',
            area: ['800px', layheight], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cteph/cteph_update/' + Cteph.seItem.id
        });
        this.layerIndex = index;
    }
};


/**
 * 打开查看CTEPH调查表详情
 */
Cteph.viewCtephDetail = function () {
    if (this.check()) {
        if (window.innerHeight)
            var winHeight = window.innerHeight;         //此方式获取的是这个窗口的高度的字符串
        else if ((document.body) && (document.body.clientHeight))
            var winHeight = document.body.clientHeight;
        var layheight = String(parseInt(winHeight) - 30) + 'px';    //字符串转为数字进行计算，再通过String()转为字符串
        var index = layer.open({
            type: 2,
            title: 'CTEPH调查表详情',
            area: ['800px', layheight], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cteph/cteph_view/' + Cteph.seItem.id
        });
        this.layerIndex = index;
    }
};


/**
 * 删除CTEPH调查表
 */
Cteph.delete = function () {
    if (this.check()) {

        var operation = function () {
            var ajax = new $ax(Feng.ctxPath + "/cteph/delete", function (data) {
                Feng.success("删除成功!");
                Cteph.table.refresh();
            }, function (data) {
                Feng.error("删除失败!" + data.responseJSON.message + "!");
            });
            ajax.set("ctephId", Cteph.seItem.id);     //将this.seItem.id改为Cteph.seItem.id
            ajax.start();
        };

        Feng.confirm("是否刪除该CTEPH调查表?", operation);
    }
};

/**
 * 查询CTEPH调查表列表
 */
Cteph.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    console.log($("#condition").val());
    Cteph.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Cteph.initColumn();
    var table = new BSTable(Cteph.id, "/cteph/list", defaultColunms);
    table.setPaginationType("client");
    Cteph.table = table.init();
});

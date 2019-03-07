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
            {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'code', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'department', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'fillingperson', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientName', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientSex', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'patientAddress', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'birthday', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'height', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'weight', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'firsttime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'specialsigns', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'vtehistory', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ape', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ledvt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherthrombus', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'firstvtetime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'vterelapse', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'malignanttumor', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'specifictumor', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'malignanttumordate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'splenectomy', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'splenectormydate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pacemaker', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pacemakerdate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'atrialhistory', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'atrialhistorydate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'levv', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'levvdate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ibd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ibddiagnosis', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ibddate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'connectivetissue', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'aas', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'la', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'acllgg', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'acllgm', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lgg', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lgm', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sie', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sjogrens', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ssclerosis', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'mctd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rarthritis', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'uctd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'octd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'octdspecific', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hps', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hcylevel', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'maximum', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'threeitems', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'at', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'proteins', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'proteinc', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hat', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherriskjudge', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherrisk', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypertension', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'coronaryheart', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'revascularization', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'diabetes', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lhfailure', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lhfailurespecific', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'renalinsufficiency', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cerebralinfarction', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'copd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'congenitalheart', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'chdspecific', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hypothyroidism', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hyperthyroidism', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'anemia', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'polycythemia', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'eosinophilia', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'plateletlower', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'plateletup', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'othercomplications', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'othercomplicationss', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cteph', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sixmwd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'noreason1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'walking', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'respiratory', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'vcmax', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tlc', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rv', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rvtlc', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'fev1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'fev1fvc', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'fef', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tlcosb', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tlcova', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cet', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'heartmri', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ppi', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ctpat', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'mripae', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cmri', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rhc', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'noreason2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherreason', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pa', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'firstcatheter', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'hr', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bpshrink', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bprelaxation', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bpave', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rap', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rapshrink', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'raprelaxation1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'rapave', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pap', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'papshrink', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'raprelaxation2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'papave', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pawp', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pawpshrink', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pawprelaxation', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pawpave', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'co', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'comethod', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ci', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pvr', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lvedd', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'lvef', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pasp', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tapse', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pe', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bloodgroup', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ddimer', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'nt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ntnumber', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ast', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'alt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'tbil', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dbil', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'cr', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'bloodgas', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'abgt', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'pco', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'po', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'sao', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'paa', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'anticoagulant', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'drug1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherdrug', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'antiplatelet', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'drug5', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'otherdrug2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'targeting', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'laxg', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'fivepi', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'drug2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'era', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'drug3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'prostacyclin', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'drug4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'exfoliation', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'exfoliationdate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'angioplasty', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'angioplastyfdate', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'death', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'deathreason', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition1', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition2', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition3', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition4', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition5', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition6', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition7', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition8', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition9', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'addition10', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creator', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'creationtime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifier', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'modifiedtime', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'ts', visible: true, align: 'center', valign: 'middle'},
            {title: '', field: 'dr', visible: true, align: 'center', valign: 'middle'}
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

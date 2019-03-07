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
        {title: '', field: 'firsttime', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'specialsigns', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'vtehistory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ape', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ledvt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherthrombus', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'firstvtetime', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'vterelapse', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'malignanttumor', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'specifictumor', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'malignanttumordate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'splenectomy', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'splenectormydate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pacemaker', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pacemakerdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'atrialhistory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'atrialhistorydate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'levv', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'levvdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ibd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ibddiagnosis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ibddate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'connectivetissue', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'aas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'la', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'acllgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'acllgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lgg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lgm', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'sie', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'sjogrens', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ssclerosis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'mctd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rarthritis', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'uctd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'octd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'octdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hps', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hcylevel', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'maximum', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'threeitems', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'at', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'proteins', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'proteinc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherriskjudge', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherrisk', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hypertension', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'coronaryheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'revascularization', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'diabetes', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lhfailure', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lhfailurespecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'renalinsufficiency', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'cerebralinfarction', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'copd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'congenitalheart', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'chdspecific', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hypothyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hyperthyroidism', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'anemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'polycythemia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'eosinophilia', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'plateletlower', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'plateletup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'othercomplications', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'othercomplicationss', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'cteph', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'sixmwd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'noreason1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'walking', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'respiratory', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'vcmax', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'tlc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rv', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rvtlc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'fev1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'fev1fvc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'fef', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'tlcosb', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'tlcova', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'cet', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'heartmri', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ppi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ctpat', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'mripae', visible: false, align: 'center', valign: 'middle', sortable: true},
        // {title: '', field: 'cmri', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rhc', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'noreason2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherreason', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'firstcatheter', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'hr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'bpshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'bprelaxation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'bpave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rap', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rapshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'raprelaxation1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'rapave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pap', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'papshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'raprelaxation2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'papave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pawp', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pawpshrink', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pawprelaxation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pawpave', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'co', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'comethod', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ci', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pvr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'svo2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lvedd', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'lvef', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pasp', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'tapse', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pe', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'bloodgroup', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ddimer', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'nt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ntnumber', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'ast', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'alt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'tbil', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'dbil', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'cr', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'bloodgas', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'abgt', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'pco', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'po', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'sao', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'paa', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'anticoagulant', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'drug1', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherdrug', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'antiplatelet', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'drug5', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'otherdrug2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'targeting', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'laxg', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'fivepi', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'drug2', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'era', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'drug3', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'prostacyclin', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'drug4', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'exfoliation', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'exfoliationdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'angioplasty', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'angioplastyfdate', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'death', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: '', field: 'deathreason', visible: false, align: 'center', valign: 'middle', sortable: true},
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

/**
 * 初始化CTEPH调查表详情对话框
 */
var CtephInfoDlg = {
    ctephInfoData : {}
};

/**
 * 清除数据
 */
CtephInfoDlg.clearData = function() {
    this.ctephInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CtephInfoDlg.set = function(key, val) { //通过id传值,文本框多用id传值
    console.log("input[id="+key+"].val() = "+ $("#" + key).val());
    this.ctephInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    if( this.ctephInfoData[key]=="") //添加这个判断可以解决时间控件为空字符串的情况也可以提交成功,因为空字符串无法转化为时间格式,但设置为空可以提交
        this.ctephInfoData[key]=undefined;
    return this;
}
CtephInfoDlg.setByName = function(key, val) { //通过name传值,单选多选多用name传值
    console.log("input[name="+key+"].val() = "+$("input[name='"+key+"']:checked").val());
    this.ctephInfoData[key] = (typeof val == "undefined") ? ($("input[name='"+key+"']:checked").val()=="undefined"? 0:$("input[name='"+key+"']:checked").val()) : val;
    // this.ctephInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CtephInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CtephInfoDlg.close = function() {
    parent.layer.close(window.parent.Cteph.layerIndex);
}

/**
 * 收集数据
 */
CtephInfoDlg.collectData = function() {
    this
        .set('id')
        .set('code')
        //.set('department')
        //.set('fillingperson')
        .set('patientName')
        .set('patientSex')
      //  .set('patientAge')
        .set('patientAddress')
        .set('birthday')
        .set('height')
        .set('weight')
        .set('firsttime')
        .setByName('specialsigns')
        .setByName('vtehistory')
        .setByName('ape')
        .set('ledvt')
        .set('otherthrombus')
        .set('firstvtetime')
        .setByName('vterelapse')
        .setByName('malignanttumor')
        .setByName('splenectomy')
        .setByName('pacemaker')
        .setByName('atrialhistory')
        .setByName('aas')
        .setByName('hps')
        .setByName('cdeficiency')
        .setByName('sdeficiency')
        .setByName('atdeficiency')
        .setByName('levv')
        .setByName('ibd')
     //   .set('ibdspecific')
        .set('otherrisk')
        .setByName('hypertension')
        .setByName('coronaryheart')
        .setByName('revascularization')
        .setByName('diabetes')
        .setByName('renalinsufficiency')
        .setByName('cerebralinfarction')
        .setByName('copd')
        .setByName('congenitalheart')
        .set('chdspecific')
        .setByName('connectivetissue')
        .set('ctdspecific')
        .setByName('hypothyroidism')
        .setByName('hyperthyroidism')
        .setByName('anemia')
        .setByName('polycythemia')
        .setByName('plateletlower')
        .setByName('plateletup')
        .setByName('othercomplications')
        .setByName('cteph')
        .setByName('sixmwd')
        .setByName('noreason1')
        .set('walking')
        .setByName('ppi')
        .setByName('ctpat')
        .setByName('mripae')
        .setByName('cmri')
        .setByName('rhc')
        .setByName('noreason2')
        .set('otherreason')
        .setByName('pa')
        .set('firstcatheter')
        .set('hr')
        .set('bpshrink')
        .set('bprelaxation')
        .set('bpave')
        .setByName('rap')
        .set('rapshrink')
        .set('raprelaxation1')
        .set('rapave')
        .setByName('pap')
        .set('papshrink')
        .set('raprelaxation2')
        .set('papave')
        .setByName('pawp')
        .set('pawpshrink')
        .set('pawprelaxation')
        .set('pawpave')
        .set('co')
        .setByName('comethod')
        .set('ci')
        .set('pvr')
        .set('svo2')
        .set('lvedd')
        .set('lvef')
        .set('pasp')
        .setByName('pe')
        .setByName('bloodgroup')
        .setByName('hcy')
        .set('hcynumber')
        .setByName('nt')
        .set('ntnumber')
        .setByName('aa')
        .setByName('la')
        .setByName('acllgg')
        .setByName('acllgm')
        .setByName('lgg')
        .setByName('lgm')
        .setByName('threeitems')
        .set('ats')
        .set('proteins')
        .set('proteinc')
        .setByName('hat')
        .setByName('bloodgas')
    //    .set('ph')
        .set('pco')
        .set('po')
        .set('sao')
        .set('paa')
        .setByName('anticoagulant')
        .setByName('drug1')
        .set('otherdrug')
        .setByName('targeting')
        .setByName('laxg')
        .setByName('fivepi')
        .setByName('drug2')
        .setByName('era')
        .setByName('drug3')
        .setByName('prostacyclin')
        .setByName('drug4')
        .setByName('exfoliation')
        .setByName('angioplasty')
        .setByName('death')
        .setByName('deathreason')
        .set('addition1')
        .set('addition2')
        .set('addition3')
        .set('addition4')
        .set('addition5')
        .set('addition6')
        .set('addition7')
        .set('addition8')
        .set('addition9')
        .set('addition10')
        .set('creator')
        .set('creationtime')
        .set('modifier')
        .set('modifiedtime')
        .set('ts')
        .set('dr')


        //添加
        .set('specifictumor')
        .set('malignanttumordate')
        .set('splenectomydate')

        .setByName('atrialhistory')
        .set('atrialhistorydate')
        .set('levvdate')

        .set('ibddiagnosis')
        .set('ibddate')

        .setByName('sjogrens')
        .setByName('ssclerosis')
        .setByName('mctd')
        .setByName('rarthritis')
        .setByName('uctd')
        .setByName('octd')

        .set('octdspecific')
        .set('othercomplicationss')
        .setByName('sjogrens')
        .setByName('ssclerosis')
        .setByName('eosinophilia')
        .setByName('lhfailurespecific')
        .setByName('lhfailure')
        .setByName('otherriskjudge')



        .set('vcmax')
        .set('tlc')
        .setByName('antiplatelet')

        .setByName('abgt')
        .setByName('cet')
        .setByName('heartmri')

        .set('rv')
        .set('rvtlc')
        .set('fev1')
        .set('fev1fvc')
        .set('fef')
        .set('tlcosb')
        .set('tlcova')
        .set('modifiedtime')
        .set('ddimer')
        .set('ast')

        .set('alt')
        .set('fef')
        .set('tbil')
        .set('dbil')
        .set('cr')

        .setByName('drug5')
        .set('otherdrug2')

        .set('exfoliationdate')
        .set('angioplastyfdate')

}

/**
 * 提交添加
 */
CtephInfoDlg.addSubmit = function() {
    this.clearData();
    this.collectData();

    var mapString = { //必填项
        // "department" : "参与中心",
        // "fillingperson":"填表人",
        "patientName" : "患者姓名",
        "patientSex":"患者性别",
      //  "patientAge":"患者年龄",
        "birthday":"患者出生日期",
        "height":"患者身高",
        "weight":"患者体重"
    };

    for (var key in mapString) { //必填项提醒
        if(this.ctephInfoData[key]==null||this.ctephInfoData[key]==""){
            alert("请填写"+mapString[key]+"!");
            return;
            //Feng.error("添加失败!");
        }
    }

    this.ctephInfoData['creationtime'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(); //创建时间为当前时间,需要转化格式
    this.ctephInfoData['modifiedtime'] = this.ctephInfoData['creationtime']; //添加时修改时间与创建时间一致
    this.ctephInfoData['ts'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(); //时间戳
    this.ctephInfoData['creator'] =  this.ctephInfoData['fillingperson']; //创建人与填表人为同一个人
    this.ctephInfoData['modifier'] = this.ctephInfoData['fillingperson']; //添加时修改人与填表人一致

    console.log(this.ctephInfoData['creationtime']);//打印创建时间
    console.log(this.ctephInfoData['modifiedtime']);//打印创建时间
    console.log(this.ctephInfoData['ts']);//打印创建时间
    console.log(this.ctephInfoData);//打印填入的数据
    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cteph/add", function(data){
        Feng.success("添加成功!");
        window.parent.Cteph.table.refresh();
        CtephInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.ctephInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CtephInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cteph/update", function(data){
        Feng.success("修改成功!");
        window.parent.Cteph.table.refresh();
        CtephInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.ctephInfoData);
    ajax.start();
}


$(function() {
    //初始化性别选项
    $("#patientSex").val($("#sexValue").val());
});
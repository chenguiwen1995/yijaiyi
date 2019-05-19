/**
 * 初始化follow详情对话框
 */
var FollowInfoDlg = {
    followInfoData : {}
};

/**
 * 清除数据
 */
FollowInfoDlg.clearData = function() {
    this.followInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowInfoDlg.set = function(key, val) {
    this.followInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FollowInfoDlg.close = function() {
    parent.layer.close(window.parent.Follow.layerIndex);
}

/**
 * 收集数据
 */
FollowInfoDlg.collectData = function() {
    this
    .set('id')
    .set('code')
    .set('name')
    .set('department')
    .set('doctor')
    .set('patientName')
    .set('patientSex')
    .set('patientAge')
    .set('patientMedno')
    .set('patientPhone')
    .set('patientPhone2')
    .set('patientWechat')
    .set('patientAddress')
    .set('familyPhone')
    .set('pamilyPhone2')
    .set('deteriorate')
    .set('hospitalization')
    .set('number')
    .set('pulmonary')
    .set('rightheartfailure')
    .set('hemoptysis1')
    .set('other')
    .set('pulmonaryembolism')
    .set('lowervein')
    .set('arrhythmia')
    .set('death')
    .set('deathdate')
    .set('nonpertension')
    .set('specific')
    .set('review')
    .set('hospitalizationdate1')
    .set('hospitalizationdate2')
    .set('hospitalizationdate3')
    .set('deterioratespecific')
    .set('regulardose')
    .set('medicineExpenses')
    .set('medicineUntowardeffect')
    .set('medicineCurativeeffect')
    .set('othersereason')
    .set('xdnf')
    .set('xdnfDosage')
    .set('tdnf')
    .set('tdnfDosage')
    .set('facered1')
    .set('headache1')
    .set('stuffynose1')
    .set('musclepain1')
    .set('dizziness1')
    .set('blurredvision1')
    .set('hypotension1')
    .set('menstrualdisorder1')
    .set('other1')
    .set('bst')
    .set('bstDosage')
    .set('mxtt')
    .set('mxttDosage')
    .set('facered2')
    .set('headache2')
    .set('stuffynose2')
    .set('musclepain2')
    .set('dizziness2')
    .set('transaminaseraise2')
    .set('anemia2')
    .set('peripheraledema2')
    .set('hypotension2')
    .set('menstrualdisorder2')
    .set('other2')
    .set('bqls')
    .set('bqlsDosage')
    .set('rmdl')
    .set('rmdlDosage')
    .set('facered3')
    .set('headache3')
    .set('stuffynose3')
    .set('musclepain3')
    .set('diarrhea3')
    .set('localpain3')
    .set('hypotension3')
    .set('other3')
    .set('laxg')
    .set('laxgDosage')
    .set('facered4')
    .set('headache4')
    .set('stuffynose4')
    .set('dizziness4')
    .set('diarrhea4')
    .set('hypotension4')
    .set('other4')
    .set('routineblood')
    .set('bloodbiochemistry')
    .set('nt')
    .set('ntnumber')
    .set('sexhormone')
    .set('ironmetabolism')
    .set('walk')
    .set('walkdistance')
    .set('ct')
    .set('cprt')
    .set('mri')
    .set('othercheck')
    .set('breathShort')
    .set('syncope')
    .set('syncopeTimes')
    .set('syncopeTime')
    .set('hemoptysis')
    .set('hemoptysisTimes')
    .set('hemoptysisMax')
    .set('swollen')
    .set('others')
    .set('creator')
    .set('creationTime')
    .set('modifier')
    .set('modifiedTime')
    .set('ts')
    .set('dr');
}

/**
 * 提交添加
 */
FollowInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    this.followInfoData['creationTime'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(); //创建时间为当前时间,需要转化格式
    this.followInfoData['deathdate'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['hemoptysisMax'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['hospitalizationdate1'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['hospitalizationdate2'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['hospitalizationdate3'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['syncopeTime'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    this.followInfoData['modifiedTime'] = this.followInfoData['creationTime']; //添加时修改时间与创建时间一致
    this.followInfoData['ts'] = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(); //时间戳

    console.log(this.followInfoData['creationTime']);//打印创建时间
    console.log(this.followInfoData['deathdate']);
    console.log(this.followInfoData['hemoptysisMax']);
    console.log(this.followInfoData['hospitalizationdate1']);
    console.log(this.followInfoData['hospitalizationdate2']);
    console.log(this.followInfoData['hospitalizationdate3']);
    console.log(this.followInfoData['syncopeTime']);
    console.log(this.followInfoData['modifiedTime']);
    console.log(this.followInfoData['ts']);
    console.log(this.followInfoData);//打印填入的数据

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/follow/add", function(data){
        Feng.success("添加成功!");
        window.parent.Follow.table.refresh();
        FollowInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.followInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
FollowInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/follow/update", function(data){
        Feng.success("修改成功!");
        window.parent.Follow.table.refresh();
        FollowInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.followInfoData);
    ajax.start();
}

$(function() {

});

/**
 * 向后台传输变量
 *
 * @param followh 表头
 * @param followFeatures 体征表
 * */
// var followh = {
// };
/**
 * 向后台传输变量
 *
 * @param followh 表头
 * @param followFeatures 体征表
 * */
// var followFeatures = {
//  };
/**
 * 向后台传输变量
 *
 * @param followh 表头
 * @param followFeatures 体征表
 * */
// var dataWarpper = {
//     followh:{},
//     followFeatures:{}
// };

/**
 * 初始化随访单详情对话框
 */
var FollowHInfoDlg = {
    dataWarpper : {
        followh:{},
        followFeatures:{},
        patient:{},
        followEvent:{},
        followResult:{},
        followMedcine:{}
    }
};

/**
 * 清除数据
 */
FollowHInfoDlg.clearData = function () {
    this.dataWarpper = {
        followh:{},
        followFeatures:{},
        patient:{},
        followEvent:{},
        followResult:{},
        followMedcine:{}
    };
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowHInfoDlg.setFollowh = function (key, val) {
    this.dataWarpper.followh[key.slice(8,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
};
FollowHInfoDlg.setFollowFeatures = function (key, val) {
    this.dataWarpper.followFeatures[key.slice(17,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
};
FollowHInfoDlg.setPatient = function (key, val) {
    this.dataWarpper.patient[key.slice(7,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
};
FollowHInfoDlg.setFollowEventById = function (key, val) {
    this.dataWarpper.followEvent[key.slice(16,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
    if( this.dataWarpper.followEvent[key.slice(16,key.length)]=="")
        this.dataWarpper.followEvent[key.slice(16,key.length)]=undefined;
    return this;
};
FollowHInfoDlg.setFollowEventByName = function (key, val) {
    this.dataWarpper.followEvent[key.slice(16,key.length)] = (typeof val == "undefined") ? ($("input[name='"+key+"']:checked").val()=="undefined"? 0:$("input[name='"+key+"']:checked").val()) : val;
    return this;
};
FollowHInfoDlg.setFollowResult = function (key, val) {
    this.dataWarpper.followResult[key.slice(15,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
};
FollowHInfoDlg.setFollowMedcineById = function (key, val) {
    this.dataWarpper.followMedcine[key.slice(19,key.length)] = (typeof val == "undefined") ? ($("#" + key).val()=="undefined"?0:$("#" + key).val()) : val;
    return this;
};
FollowHInfoDlg.setFollowMedcineByName = function (key, val) {
    this.dataWarpper.followMedcine[key.slice(19,key.length)] = (typeof val == "undefined") ? ($("input[name='"+key+"']:checked").val()=="undefined"? 0:$("input[name='"+key+"']:checked").val()) : val;
    return this;
};

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
// followFeatures.set = function (key, val) {
//     dataWarpper.followFeatures[key.slice(14,key.length)] = (typeof val == "undefined") ? $("#" + key).val() : val;
//     return this;
// };

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
FollowHInfoDlg.get = function (key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
FollowHInfoDlg.close = function () {
    console.log('closeeee');
    parent.layer.close(window.parent.FollowH.layerIndex);
}

/**
 * 收集数据
 */
FollowHInfoDlg.collectData = function () {
    this
        // .setFollowh('id')
        // .setFollowh('code')
        // .setFollowh('name')
        .setFollowh('followH_department')
        .setFollowh('followH_doctor')
        .setFollowh('followH_patientName')
        .setFollowh('followH_patientSex')
        .setFollowh('followH_patientAge')
        .setFollowh('followH_patientMedno')
        .setFollowh('followH_patientPhone')
        //.setFollowh('followH_patientPhone2')
        .setFollowh('followH_patientWechat')
        .setFollowh('followH_patientAddress')
        .setFollowh('followH_familyPhone')
        //.setFollowh('followH_pamilyPhone2')
        // .setFollowh('creationTime')
        // .setFollowh('modifiedTime')
        // .setFollowh('ts')
        // .setFollowh('dr')
        // .setPatient('id')

            //patient表暂时先不管
        // .setPatient('followH_patientMedno')
        // .setPatient('followH_patientName')
        // .setPatient('followH_patientSex')
        // .setPatient('followH_patientAge')
        // .setPatient('followH_patientPhone')
        // .setPatient('followH_familyPhone')
        // .setPatient('followH_patientWechat')
        // .setPatient('followH_patientAddress')
        // .setPatient('yjyPatient_addition1')

        // .setPatient('dr')
        // .setFollowFeatures('id')
        .setFollowFeatures('flFollowFeatures_breathShort')
        .setFollowFeatures('flFollowFeatures_syncope')
        .setFollowFeatures('flFollowFeatures_syncopeTimes')
        .setFollowFeatures('flFollowFeatures_syncopeTime')
        .setFollowFeatures('flFollowFeatures_hemoptysis')
        .setFollowFeatures('flFollowFeatures_hemoptysisTimes')
        .setFollowFeatures('flFollowFeatures_hemoptysisTime')
        .setFollowFeatures('flFollowFeatures_swollen')
        .setFollowFeatures('flFollowFeatures_others')
        // .setFollowFeatures('creationTime')
        // .setFollowFeatures('modifiedTime')
        // .setFollowFeatures('ts')
        // .setFollowFeatures('dr');
        // .setFollowResult('id')
        // .setFollowResult('flCode')
        // .setFollowResult('crowno')
        // .setFollowResult('hid')
        .setFollowResult('flFollowResult_routineblood')
        .setFollowResult('flFollowResult_bloodbiochemistry')
        .setFollowResult('flFollowResult_nt')
        .setFollowResult('flFollowResult_ntnumber')
        .setFollowResult('flFollowResult_sexhormone')
        .setFollowResult('flFollowResult_ironmetabolism')
        .setFollowResult('flFollowResult_walk')
        .setFollowResult('flFollowResult_walkdistance')
        .setFollowResult('flFollowResult_ct')
        .setFollowResult('flFollowResult_cprt')
        .setFollowResult('flFollowResult_mri')
        .setFollowResult('flFollowResult_othercheck')
        // .setFollowResult('flFollowResult_creationTime')
        // .setFollowResult('flFollowResult_creater')
        // .setFollowResult('flFollowResult_modifiedTime')
        // .setFollowResult('flFollowResult_modifier')
        // .set('ts')
        // .set('dr');

        // .setFollowMedcine('id')
        // .setFollowMedcine('flCode')
        // .setFollowMedcine('crowno')
        // .setFollowMedcine('hid')

        .setFollowMedcineByName('fl_follow_medicine_regulardose')
        .setFollowMedcineByName('fl_follow_medicine_expenses')
        .setFollowMedcineByName('fl_follow_medicine_untowardeffect')
        .setFollowMedcineByName('fl_follow_medicine_curativeeffect')
        .setFollowMedcineById('fl_follow_medicine_othersereason')
        // .setFollowMedcine('nodosereason')
        .setFollowMedcineByName('fl_follow_medicine_xdnf')
        .setFollowMedcineById('fl_follow_medicine_xdnfDosage')
        .setFollowMedcineByName('fl_follow_medicine_tdnf')
        .setFollowMedcineById('fl_follow_medicine_tdnfDosage')
        .setFollowMedcineByName('fl_follow_medicine_facered1')
        .setFollowMedcineByName('fl_follow_medicine_headache1')
        .setFollowMedcineByName('fl_follow_medicine_stuffynose1')
        .setFollowMedcineByName('fl_follow_medicine_musclepain1')
        .setFollowMedcineByName('fl_follow_medicine_dizziness1')
        .setFollowMedcineByName('fl_follow_medicine_blurredvision1')
        .setFollowMedcineByName('fl_follow_medicine_hypotension1')
        .setFollowMedcineByName('fl_follow_medicine_menstrualdisorder1')
        .setFollowMedcineById('fl_follow_medicine_other1')
        .setFollowMedcineByName('fl_follow_medicine_bst')
        .setFollowMedcineById('fl_follow_medicine_bstDosage')
        .setFollowMedcineByName('fl_follow_medicine_alst')
        .setFollowMedcineById('fl_follow_medicine_alst_dosage')
        .setFollowMedcineByName('fl_follow_medicine_mxtt')
        .setFollowMedcineById('fl_follow_medicine_mxttDosage')
        .setFollowMedcineByName('fl_follow_medicine_facered2')
        .setFollowMedcineByName('fl_follow_medicine_headache2')
        .setFollowMedcineByName('fl_follow_medicine_stuffynose2')
        .setFollowMedcineByName('fl_follow_medicine_musclepain2')
        .setFollowMedcineByName('fl_follow_medicine_dizziness2')
        .setFollowMedcineByName('fl_follow_medicine_transaminaseraise2')
        .setFollowMedcineByName('fl_follow_medicine_anemia2')
        .setFollowMedcineByName('fl_follow_medicine_peripheraledema2')
        .setFollowMedcineByName('fl_follow_medicine_hypotension2')
        .setFollowMedcineByName('fl_follow_medicine_menstrualdisorder2')
        .setFollowMedcineById('fl_follow_medicine_other2')
        .setFollowMedcineByName('fl_follow_medicine_bqls')
        .setFollowMedcineById('fl_follow_medicine_bqlsDosage')
        .setFollowMedcineByName('fl_follow_medicine_rmdl')
        .setFollowMedcineById('fl_follow_medicine_rmdlDosage')
        .setFollowMedcineByName('fl_follow_medicine_facered3')
        .setFollowMedcineByName('fl_follow_medicine_headache3')
        .setFollowMedcineByName('fl_follow_medicine_stuffynose3')
        .setFollowMedcineByName('fl_follow_medicine_musclepain3')
        .setFollowMedcineByName('fl_follow_medicine_diarrhea3')
        .setFollowMedcineByName('fl_follow_medicine_localpain3')
        .setFollowMedcineByName('fl_follow_medicine_hypotension3')
        .setFollowMedcineById('fl_follow_medicine_other3')
        .setFollowMedcineByName('fl_follow_medicine_laxg')
        .setFollowMedcineById('fl_follow_medicine_laxgDosage')
        .setFollowMedcineByName('ffl_follow_medicine_facered4')
        .setFollowMedcineByName('fl_follow_medicine_headache4')
        .setFollowMedcineByName('fl_follow_medicine_stuffynose4')
        .setFollowMedcineByName('fl_follow_medicine_dizziness4')
        .setFollowMedcineByName('fl_follow_medicine_diarrhea4')
        .setFollowMedcineByName('fl_follow_medicine_hypotension4')
        .setFollowMedcineById('fl_follow_medicine_other4')


        // .setFollowMedcine('flFollowMedicine_creationTime')
        // .setFollowMedcine('flFollowMedicine_creater')
        // .setFollowMedcine('flFollowMedicine_modifiedTime')
        // .setFollowMedcine('flFollowMedicine_modifier')
        // .setFollowMedcine('ts')
        // .setFollowMedcine('dr');
    this
        // .setFollowEvent('id')
        // .setFollowEvent('hid')
        // .setFollowEvent('flCode')
        .setFollowEventByName('fl_follow_event_deteriorate')
        .setFollowEventByName('fl_follow_event_hospitalization')
        .setFollowEventByName('fl_follow_event_number')
        .setFollowEventByName('fl_follow_event_pulmonary')
        .setFollowEventByName('fl_follow_event_rightheartfailure')
        .setFollowEventByName('fl_follow_event_hemoptysis')
        .setFollowEventByName('fl_follow_event_other')
        .setFollowEventByName('fl_follow_event_pulmonaryembolism')
        .setFollowEventByName('fl_follow_event_lowervein')
        .setFollowEventByName('fl_follow_event_arrhythmia')
        .setFollowEventByName('fl_follow_event_death')
        .setFollowEventById('fl_follow_event_deathdate')
        .setFollowEventByName('fl_follow_event_nonpertension')
        .setFollowEventById('fl_follow_event_specific')
        .setFollowEventByName('fl_follow_event_review')
        .setFollowEventById('fl_follow_event_hospitalizationdate1')
        .setFollowEventById('fl_follow_event_hospitalizationdate2')
        .setFollowEventById('fl_follow_event_hospitalizationdate3')
        .setFollowEventById('fl_follow_event_deterioratespecific')
        // .set('creationtime')
        // .set('creator')
        // .set('modifiedtime')
        // .set('modifier')
        // .set('ts')
        // .set('dr');

    // followh
    //     .set('followhid')
    //     .set('followhcode')
    //     .set('followhname')
    //     .set('followhdepartment')
    //     .set('followhdoctor')
    //     .set('followhpatientName')
    //     .set('followhpatientSex')
    //     .set('followhpatientAge')
    //     .set('followhpatientMedno')
    //     .set('followhpatientPhone')
    //     .set('followhpatientPhone2')
    //     .set('followhpatientWechat')
    //     .set('followhpatientAddress')
    //     .set('followhfamilyPhone')
    //     .set('followhpamilyPhone2')
    //     .set('followhcreationTime')
    //     .set('followhmodifiedTime')
    //     .set('followhts')
    //     .set('followhdr');
    // followFeatures
    //     .set('followFeaturesid')
    //     .set('followFeaturesbreathShort')
    //     .set('followFeaturessyncope')
    //     .set('followFeaturessyncopeTimes')
    //     .set('followFeaturessyncopeTime')
    //     .set('followFeatureshemoptysis')
    //     .set('followFeatureshemoptysisMax')
    //     .set('followFeaturesswollen')
    //     .set('followFeaturesothers');

    // dataWarpper.followh = followh;
    // dataWarpper.followFeatures = followFeatures;
        // .set('fl_follow_event.id')
        // .set('fl_follow_event.hid')
        // .set('fl_follow_event.fl_code')
        // .set('fl_follow_event.deteriorate')
        // .set('fl_follow_event.hospitalization')
        // .set('fl_follow_event.number')
        // .set('fl_follow_event.pulmonary')
        // .set('fl_follow_event.rightheartfailure')
        // .set('fl_follow_event.hemoptysis')
        // .set('fl_follow_event.other')
        // .set('fl_follow_event.pulmonaryembolism')
        // .set('fl_follow_event.lowervein')
        // .set('fl_follow_event.arrhythmia')
        // .set('fl_follow_event.death')
        // .set('fl_follow_event.deathdate')
        // .set('fl_follow_event.nonpertension')
        // .set('fl_follow_event.specific')
        // .set('fl_follow_event.review')
        // .set('fl_follow_event.hospitalizationdate1')
        // .set('fl_follow_event.hospitalizationdate2')
        // .set('fl_follow_event.hospitalizationdate3')
        // .set('fl_follow_event.deterioratespecific')
        // .set('fl_follow_event.creationtime')
        // .set('fl_follow_event.creator')
        // .set('fl_follow_event.modifiedtime')
        // .set('fl_follow_event.modifier')
        // .set('fl_follow_event.ts')
        // .set('fl_follow_event.dr')
        // .set('fl_follow_medicine.id')
        // .set('fl_follow_medicine.fl_code')
        // .set('fl_follow_medicine.crowno')
        // .set('fl_follow_medicine.hid')
        // .set('fl_follow_medicine.dose')
        // .set('fl_follow_medicine.nodosereason')
        // .set('fl_follow_medicine.xdnf')
        // .set('fl_follow_medicine.xdnf_dosage')
        // .set('fl_follow_medicine.tdnf')
        // .set('fl_follow_medicine.tdnf_dosage')
        // .set('fl_follow_medicine.facered1')
        // .set('fl_follow_medicine.headache1')
        // .set('fl_follow_medicine.stuffynose1')
        // .set('fl_follow_medicine.musclepain1')
        // .set('fl_follow_medicine.dizziness1')
        // .set('fl_follow_medicine.blurredvision1')
        // .set('fl_follow_medicine.hypotension1')
        // .set('fl_follow_medicine.menstrualdisorder1')
        // .set('fl_follow_medicine.other1')
        // .set('fl_follow_medicine.vbst')
        // .set('fl_follow_medicine.bst_dosage')
        // .set('fl_follow_medicine.alst')
        // .set('fl_follow_medicine.alst_dosage')
        // .set('fl_follow_medicine.mxtt')
        // .set('fl_follow_medicine.mxtt_dosage')
        // .set('fl_follow_medicine.facered2')
        // .set('fl_follow_medicine.headache2')
        // .set('fl_follow_medicine.stuffynose2')
        // .set('fl_follow_medicine.musclepain2')
        // .set('fl_follow_medicine.dizziness2')
        // .set('fl_follow_medicine.transaminaseraise2')
        // .set('fl_follow_medicine.anemia2')
        // .set('fl_follow_medicine.peripheraledema2')
        // .set('fl_follow_medicine.hypotension2')
        // .set('fl_follow_medicine.menstrualdisorder2')
        // .set('fl_follow_medicine.other2')
        // .set('fl_follow_medicine.bqls')
        // .set('fl_follow_medicine.bqls_dosage')
        // .set('fl_follow_medicine.rmdl')
        // .set('fl_follow_medicine.rmdl_dosage')
        // .set('fl_follow_medicine.facered3')
        // .set('fl_follow_medicine.headache3')
        // .set('fl_follow_medicine.stuffynose3')
        // .set('fl_follow_medicine.musclepain3')
        // .set('fl_follow_medicine.diarrhea3')
        // .set('fl_follow_medicine.localpain3')
        // .set('fl_follow_medicine.hypotension3')
        // .set('fl_follow_medicine.other3')
        // .set('fl_follow_medicine.laxg')
        // .set('fl_follow_medicine.laxg_dosage')
        // .set('fl_follow_medicine.facered4')
        // .set('fl_follow_medicine.headache4')
        // .set('fl_follow_medicine.stuffynose4')
        // .set('fl_follow_medicine.dizziness4')
        // .set('fl_follow_medicine.diarrhea4')
        // .set('fl_follow_medicine.hypotension4')
        // .set('fl_follow_medicine.other4')
        // .set('fl_follow_medicine.creationtime')
        // .set('fl_follow_medicine.creator')
        // .set('fl_follow_medicine.modifiedtime')
        // .set('fl_follow_medicine.modifier')
        // .set('fl_follow_medicine.ts')
        // .set('fl_follow_medicine.dr')
        // .set('fl_follow_result.id')
        // .set('fl_follow_result.fl_code')
        // .set('fl_follow_result.crowno')
        // .set('fl_follow_result.hid')
        // .set('fl_follow_result.routineblood')
        // .set('fl_follow_result.bloodbiochemistry')
        // .set('fl_follow_result.nt')
        // .set('fl_follow_result.ntnumber')
        // .set('fl_follow_result.sexhormone')
        // .set('fl_follow_result.ironmetabolism')
        // .set('fl_follow_result.walk')
        // .set('fl_follow_result.walkdistance')
        // .set('fl_follow_result.ct')
        // .set('fl_follow_result.cprt')
        // .set('fl_follow_result.mri')
        // .set('fl_follow_result.othercheck')
        // .set('fl_follow_result.creationtime')
        // .set('fl_follow_result.creator')
        // .set('fl_follow_result.modifier')
        // .set('fl_follow_result.ts')
        // .set('fl_follow_result.dr')
}

/**
 * 提交添加
 */
FollowHInfoDlg.addSubmit = function () {
    console.log('addsubmit');
    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/followH/add", function (data) {
        Feng.success("添加成功!");
        //window.parent.FollowH.table.refresh();
        //FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.dataWarpper.followh);
    ajax.start();


    var ajax1 = new $ax(Feng.ctxPath + "/followFeatures/add", function (data) {
        Feng.success("添加成功!");
        //window.parent.FollowH.table.refresh();
        //FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax1.set(this.dataWarpper.followFeatures);
    ajax1.start();

    var ajax2 = new $ax(Feng.ctxPath + "/flFollowResult/add", function (data) {
        Feng.success("添加成功!");
       // window.parent.FollowH.table.refresh();
       // FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax2.set(this.dataWarpper.followResult);
    ajax2.start();


    var ajax3 = new $ax(Feng.ctxPath + "/flFollowMedicine/add", function (data) {
        Feng.success("添加成功!");
        //window.parent.FollowH.table.refresh();
        //FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax3.set(this.dataWarpper.followMedcine);
    ajax3.start();
    //
    var ajax4 = new $ax(Feng.ctxPath + "/flFollowEvent/add", function (data) {
        Feng.success("添加成功!");
        window.parent.FollowH.table.refresh();
        FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax4.set(this.dataWarpper.followEvent);
    ajax4.start();

    // var ajax5 = new $ax(Feng.ctxPath + "/yjyPatient/add", function (data) {
    //     Feng.success("添加成功!");
    //     window.parent.FollowH.table.refresh();
    //     FollowHInfoDlg.close();
    // }, function (data) {
    //     Feng.error("添加失败!" + data.responseJSON.message + "!");
    // });
    // ajax5.set(this.dataWarpper.patient);
    // ajax5.start();
}

/**
 * 提交修改
 */
FollowHInfoDlg.editSubmit = function () {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/followH/update", function (data) {
        Feng.success("修改成功!");
        // window.parent.FollowH.table.refresh();
        // FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.dataWarpper.followh);
    ajax.start();

    //提交信息
    var ajax1 = new $ax(Feng.ctxPath + "/followFeatures/update", function (data) {
        Feng.success("修改成功!");
        // window.parent.FollowH.table.refresh();
        // FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax1.set(this.dataWarpper.followFeatures);
    ajax1.start();

    //提交信息
    var ajax2 = new $ax(Feng.ctxPath + "/flFollowResult/update", function (data) {
        Feng.success("修改成功!");
        // window.parent.FollowH.table.refresh();
        // FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax2.set(this.dataWarpper.followResult);
    ajax2.start();

    //提交信息
    var ajax3 = new $ax(Feng.ctxPath + "/flFollowMedicine/update", function (data) {
        Feng.success("修改成功!");
        // window.parent.FollowH.table.refresh();
        // FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax3.set(this.dataWarpper.followMedcine);
    ajax3.start();

    //提交信息
    var ajax4 = new $ax(Feng.ctxPath + "/flFollowEvent/update", function (data) {
        Feng.success("修改成功!");
        window.parent.FollowH.table.refresh();
        FollowHInfoDlg.close();
    }, function (data) {
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax4.set(this.dataWarpper.followEvent);
    ajax4.start();
}

$(function() {
    //初始化性别选项
    $("#patientSex").val($("#sexValue").val());

});
CREATE TABLE pulhyFollow (id INT NOT NULL AUTO_INCREMENT comment '主键', code VARCHAR(45) NULL comment '随访编号', department VARCHAR(45) NULL comment '随访科室', doctor VARCHAR(45) NULL comment '医生', patient_name VARCHAR(45) NULL comment '患者姓名', patient_sex INT NULL comment '患者性别', patient_birth INT NULL comment '患者出生日期', patient_medno VARCHAR(45) NULL comment '患者病历号', patient_phone CHAR(11) NULL comment '患者手机号码', patient_phone2 CHAR(11) NULL comment '患者电话', patient_wechat VARCHAR(45) NULL comment '患者微信', patient_address VARCHAR(45) NULL comment '患者地址', family_phone CHAR(11) NULL comment '家人手机号码', pamily_phone2 CHAR(11) NULL comment '家人电话', bdeteriorate int(1) comment '是否发生临床恶化时间',  bhospitalization int(1) comment '是否住院',  nnumber int comment '住院次数',  bpulmonary int(1) comment '是否肺部感染',  brightheartfailure int(1) comment '右心衰加重',  bhemoptysis int(1) comment '咳血',  other varchar(100) comment '其他出血情况',  pulmonaryembolism int(1) comment '是否再发肺栓塞',  lowervein int(1) comment '下肢深静脉血栓',  arrhythmia int(1) comment '是否心率失常',  death int(1) comment '是否死亡',  deathdate datetime comment '死亡日期',  nonpertension int(1) comment '非肺高压原因',  vspecific varchar(200) comment '请具体',hospitalizationdate1 datetime comment '住院时间',  hospitalizationdate2 datetime comment '住院时间',  hospitalizationdate3 datetime comment '住院时间',  deterioratespecific varchar(200) comment '重要恶化时间详情',  breath_short INT DEFAULT NULL comment '气短',syncope INT DEFAULT NULL comment '晕厥', syncope_times INT DEFAULT NULL comment '晕厥次数', syncope_time DATETIME DEFAULT NULL comment '上次晕厥时间', hemoptysis INT DEFAULT NULL comment '咳血', hemoptysis_times INT DEFAULT NULL comment '咳血次数', hemoptysis_time DATETIME DEFAULT NULL comment '上次咳血时间', swollen INT DEFAULT NULL comment '浮肿', otherfeatures VARCHAR(500) DEFAULT NULL comment '其他体征',regularmedicine int(1) DEFAULT NULL comment '是否规律服药',  irregularreason varchar(200) DEFAULT NULL comment '不规律原因',  xdnf int(1) DEFAULT NULL comment '西地那非',  xdnf_dosage double(20,8) DEFAULT NULL comment '西地那非计量',  tdnf int(1) DEFAULT NULL comment '他达那非',  tdnf_dosage double(20,8) DEFAULT NULL comment '他达那非计量',  facered1 int(1) DEFAULT NULL comment '面色潮红',  headache1 int(1) DEFAULT NULL comment '头痛',  stuffynose1 int(1) DEFAULT NULL comment '鼻塞',  musclepain1 int(1) DEFAULT NULL comment '肌肉疼痛',  dizziness1 int(1) DEFAULT NULL comment '头晕',  blurredvision1 int(1) DEFAULT NULL comment '视物模糊',  hypotension1 int(1) DEFAULT NULL comment '低血压', menstrualdisorder1 int(1) DEFAULT NULL comment '月经紊乱',  other1 varchar(200) DEFAULT NULL comment '其他', bst int(1) DEFAULT NULL comment '波生坦',  bst_dosage double(20,8) DEFAULT NULL comment '波生坦计量', mxtt int(1) DEFAULT NULL comment '马昔腾坦', mxtt_dosage double(20 ,8) DEFAULT NULL comment '马昔腾坦计量',  facered2 int(1) DEFAULT NULL comment '面色潮红',  headache2 int(1) DEFAULT NULL comment '头痛',  stuffynose2 int(1) DEFAULT NULL comment '鼻塞',  musclepain2 int(1) DEFAULT NULL comment '肌肉疼痛', dizziness2 int(1) DEFAULT NULL comment '头晕', transaminaseraise2 int(1) DEFAULT NULL comment '转氨酶增高',  anemia2 int(1) DEFAULT NULL comment '贫血',  peripheraledema2 int(1) DEFAULT NULL comment '外周浮肿',  hypotension2 int(1) DEFAULT NULL comment '低血压',  menstrualdisorder2 int(1) DEFAULT NULL comment '月经紊乱',  other2 varchar(200) DEFAULT NULL comment '其他',  bqls int(1) DEFAULT NULL comment '贝前列素',  bqls_dosage double(20 ,8) DEFAULT NULL comment '贝前列素剂量',  rmdl int(1) DEFAULT NULL comment '瑞莫杜林',  rmdl_dosage double(20,8) DEFAULT NULL comment '瑞莫杜林剂量',  facered3 int(1) DEFAULT NULL comment '面色潮红',  headache3 int(1) DEFAULT NULL comment '头痛',  stuffynose3 int(1) DEFAULT NULL comment '鼻塞',  musclepain3 int(1) DEFAULT NULL comment '肌肉疼痛',  diarrhea3 int(1) DEFAULT NULL comment '腹泻',  localpain3 int(1) DEFAULT NULL comment '局部疼痛',  hypotension3 int(1) DEFAULT NULL comment '低血压',  other3 varchar(200) DEFAULT NULL comment '其他',  laxg int(1) DEFAULT NULL comment '利奥西呱',  laxg_dosage double(20,8) DEFAULT NULL comment '利奥西呱计量',  facered4 int(1) DEFAULT NULL comment '面色潮红',  headache4 int(1) DEFAULT NULL comment '头痛',  stuffynose4 int(1) DEFAULT NULL comment '鼻塞',  dizziness4 int(1) DEFAULT NULL comment '头晕',  diarrhea4 int(1) DEFAULT NULL comment '腹泻',  hypotension4 int(1) DEFAULT NULL comment '低血压',  other4 varchar(200) DEFAULT NULL comment '其他',  routineblood int(1) DEFAULT NULL comment '血常规',  bloodbiochemistry int(1) DEFAULT NULL comment '血生化',  nt int(1) DEFAULT NULL comment 'NT-PROBNP',  ntnumber double(20,8) DEFAULT NULL comment 'NT-PROBNP数值',  sexhormone int(1) DEFAULT NULL comment '性激素',  ironmetabolism int(1) DEFAULT NULL comment '铁代谢',  walk int(1) DEFAULT NULL comment '六分钟步行',  walkdistance double(20,8) DEFAULT NULL comment '六分钟步行距离',  ct int(1) DEFAULT NULL comment 'CT',  cpet int(1) DEFAULT NULL comment 'CPET',  mri int(1) DEFAULT NULL comment 'MRI',  othercheck varchar(200) DEFAULT NULL comment '其他检查', creator int DEFAULT NULL comment '创建人',creationtime TIMESTAMP NULL comment '创建时间', modifier int DEFAULT NULL comment '修改人',modifiedtime DATETIME NULL comment '修改时间', ts TIMESTAMP NULL comment '时间戳', dr INT NULL comment '删除标记',PRIMARY KEY (`id`));
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833730', 'pulhyfollow', 'system', '[0],[system],', 'pulhyFollow', '', '/pulhyfollow', '99', '2', '1', NULL, '1', '0');
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833731', 'pulhyfollow_list', 'pulhyfollow', '[0],[system],[pulhyfollow],', 'pulhyFollow列表', '', '/pulhyfollow/list', '99', '3', '0', NULL, '1', '0');
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833732', 'pulhyfollow_add', 'pulhyfollow', '[0],[system],[pulhyfollow],', 'pulhyFollow添加', '', '/pulhyfollow/add', '99', '3', '0', NULL, '1', '0');
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833733', 'pulhyfollow_update', 'pulhyfollow', '[0],[system],[pulhyfollow],', 'pulhyFollow更新', '', '/pulhyfollow/update', '99', '3', '0', NULL, '1', '0');
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833734', 'pulhyfollow_delete', 'pulhyfollow', '[0],[system],[pulhyfollow],', 'pulhyFollow删除', '', '/pulhyfollow/delete', '99', '3', '0', NULL, '1', '0');
INSERT INTO `guns`.`sys_menu` (`id`, `code`, `pcode`, `pcodes`, `name`, `icon`, `url`, `num`, `levels`, `ismenu`, `tips`, `status`, `isopen`) VALUES ('1103190164405833735', 'pulhyfollow_detail', 'pulhyfollow', '[0],[system],[pulhyfollow],', 'pulhyFollow详情', '', '/pulhyfollow/detail', '99', '3', '0', NULL, '1', '0');

<template>
  <div>
    <div class="awards-li">
      <span class="active">
        <router-link to="/TeacherGroup">教师团队</router-link>
      </span>
      <span>
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </span>
      <span>
        <router-link to="/Awards">教师竞赛获奖</router-link>
      </span>
      <span>
        <router-link to="/StudentAwards">学生竞赛获奖</router-link>
      </span>
    </div>
    <div class="teacher-group" v-show="htmlId == 1">
      <p>课程负责人</p>
      <div class="teacher-cards">
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/xie.2730c8e.png')"
          :name="'谢光强'"
          :content="'博士、教授\n广东工业大学计算机学院副院长\n中国人工智能学会科普工作委员会委员'"
          :main="'人工智能、无人驾驶、数据挖掘'"
          @click.native="toPage(0)"
        />
      </div>
      <p>骨干教师</p>
      <div class="teacher-cards">
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/wu.8919f53.png')"
          :name="'吴伟民'"
          :content="'教授、研究生导师\n广东工业大学计算机学院副院长\n广东省计算机学会常务理事、图像图形分会秘书长'"
          :main="'数据结构与算法、可视计算与虚拟机、系统介入与信息安全'"
          @click.native="toPage(1)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/an.e2db41f.png')"
          :name="'曾安'"
          :content="'教授、博士\n广东工业大学计算机学院任教\nIEEE会员'"
          :main="'人工智能,数据挖掘'"
          @click.native="toPage(2)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/bo.61a80ac.png')"
          :name="'谢国波'"
          :content="'教授、硕士生导师\n广东工业大学教学科研工作者\n广东省高端厨房电器企业重点实验室负责人'"
          :main="'混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量'"
          @click.native="toPage(3)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/wei.d6be8f3.png')"
          :name="'林伟'"
          :content="'副教授\n广东工业大学计算机学院教师'"
          :main="'计算机管理系统，嵌入式系统应用'"
          @click.native="toPage(4)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/yang.png')"
          :name="'李杨'"
          :content="'博士，副教授\n广东工业大学计算机学院计算机科学系副主任\n广东省计算机学会大数据专业委员会会员'"
          :main="'人工智能,移动互联网,数据挖掘'"
          @click.native="toPage(5)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/zhu.30b1e6a.png')"
          :name="'朱清华'"
          :content="'博士、副教授\n广东工业大学计算机学院硕士生导师\nIEEE 高级会员，ACM会员'"
          :main="'离散事件系统、Petri网理论及应用、优化调度算法'"
          @click.native="toPage(6)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/chen.1961b0c.png')"
          :name="'陈云华'"
          :content="'博士、副教授\n广东工业大学计算机学院讲师\nCCF会员'"
          :main="'智能视频监控、面部表情识别、图像超分辨率、智能与软计算'"
          @click.native="toPage(7)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/ying.f8cd54b.jpg')"
          :name="'曾颖'"
          :content="'广东工业大学计算机学院讲师\n广东工业大学十佳青年授课教师'"
          :main="'数据结构与算法'"
          @click.native="toPage(8)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/xuan.d808a03.jpg')"
          :name="'孙宣东'"
          :content="'博士\n广东工业大学计算机学院讲师\nACM指导教师'"
          :main="'信息安全'"
          @click.native="toPage(9)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/hui.4ced16d.jpg')"
          :name="'汪明慧'"
          :content="'广东工业大学计算机学院讲师'"
          :main="'基于可信计算技术的自助服务系统终端可信环境构建研究'"
          @click.native="toPage(10)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/lu.b03aa5f.jpg')"
          :name="'路璐'"
          :content="'广东工业大学计算机学院讲师\n十佳青年授课教师'"
          :main="'信息安全'"
          @click.native="toPage(11)"
        />
      </div>
    </div>
    <div class="teacher-detail" v-show="htmlId == 2">
      <div>
        <label @click="htmlId = 1">师资团队</label>
        <span v-if="teacherId == 0">谢光强</span>
        <span v-if="teacherId == 1">吴伟民</span>
        <span v-if="teacherId == 2">曾安</span>
        <span v-if="teacherId == 3">谢国波</span>
        <span v-if="teacherId == 4">林伟</span>
        <span v-if="teacherId == 5">李杨</span>
        <span v-if="teacherId == 6">朱清华</span>
        <span v-if="teacherId == 7">陈云华</span>
        <span v-if="teacherId == 8">曾颖</span>
        <span v-if="teacherId == 9">孙宣东</span>
        <span v-if="teacherId == 10">汪明慧</span>
        <span v-if="teacherId == 11">路璐</span>
      </div>
      <div v-if="teacherId == 0">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/xie.2730c8e.png" />
          <p class="teacher-name">谢光强</p>
          <p>课程负责人</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
谢光强，博士，教授，广东工业大学计算机学院副院长，中国人工智能学会科普工作委员会委员、中国人工智能学会知识工程与分布智能专业委员会青年委员、CCF计算机应用专业委员会通信委员、广东省青年科学家协会第四届理事、广东省科技咨询专家库专家、CCF YOCSEF 广州委员、广东省计算机学会大数据专业委员会委员、广东省电子政务大数据专家委员会专家，广东省科技咨询专家库专家，广东省高等学校"千百十工程"培养对象、广东工业大学创新行动计划专家委员会委员。

主要研究领域为人工智能、无人驾驶、数据挖掘。主持和参加国家自然科学基金、省市科技等各类项目30余项，申请专利和软件著作权33项，获授权23项，发表论文20余篇。个人共获各类省、市、校奖项40余项，指导学生获各类科技竞赛奖项140余项，其中省级以上奖项50余项，其中被评选为广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”、“年度优秀教师” ，获得“先进科技工作者”、“教学优秀一等奖”、“计算机学院师德先进个人”等荣誉称号。

一、主持1项省精品资源共享课，3项校教育教学改革项目, 参与的教改成果《与产业深度融合全程融入的大学生创新创业教育改革与实践》，获得了2017年广东省教育教学成果奖（高等教育）“一等奖”。

二、主持研发的一项科技成果《质量计量信息一体化网络平台》通过成果鉴定，为省内首创，获得云浮市级科技进步奖二等奖,该成果推广到多个国家级、地市级产品质量检测机构。负责国内首部石材企业信用等级的划分与评定标准的设计工作，编制了广东省地方标准《石材生产企业信用等级的划分与评定》,为国内石材企业信用评级提出标准，主持研发了配套的《石材企业信用评级网络平台》，实现石材企业信用的网络化实时自动评级，广东省3000多家石材企业信用数据都将纳入平台进行管理，为广东省石材企业信用实现标准化、信息化提供了重要支撑。

三、指导学生获各类科技竞赛奖项140余项，省级以上奖项50余项，指导学生获得第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛"特等奖"（全国共三项）、第十二届"挑战杯"全国大学生课外学术科技作品竞赛终审决赛"一等奖"，均刷新了学校在"挑战杯"竞赛中获奖层次的记录！指导的大学生科技成果受到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，2017年5月，项目组接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中作为头条播出，作品获广东省教育厅推荐，代表广东省参加2017第十届全国大学生创新创业年会。

四、创建了学生科研创新团队“QG工作室”，大力提高学生科研创新、团队协作能力，工作室被评为广东工业大学“标志性获奖团队”；申请国家大学生创新创业训练计划、广东省大学生科技创新培育专项(重点)资金等项目30多项。“QG工作室”获得了由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立的，以邓小平同志命名的大学生“小平科技创新团队”称号，广东省共有两个团队获得此项称号，全国共50个大学生科技创新团队获得此项称号。

五、培养的学生多人获得“国家一等奖学金”等各类奖学金、获得“广东工业大学十佳优秀学业大学生”称号3人（人数约占当年毕业生总数的千分之一），“广东工业大学十佳创新之星”称号2人，“广东工业大学十佳自强不息大学生”提名奖1人。

六、培养的大部分学生进入了华为、阿里巴巴、百度、腾讯、京东等知名IT公司工作，获得用人单位的肯定和好评！其中指导的毕业生，曾获得了"百度最佳个人"（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额每年只有五个）、“腾讯最佳员工”（人数约占腾讯员工数的5%）、“腾讯微信事业群绩效突出者”（人数约占微信事业群1700人的10%）。
          </pre>
          <p>主要荣誉</p>
          <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
9、广东工业大学教学优秀“二等奖”（4次）
10、2010 云浮市“科学技术奖二等奖”（排名第二）
11、2013 广东工业大学“科研工作先进者”
12、2011 广东工业大学“优秀指导老师”
13、广东工业大学“优秀班主任”（2005-2008，2017）
14、2007 计算机学院“师德先进个人”
15、2009 广东工业大学“大学毕业生就业工作先进个人”
16、2015 广东工业大学“优秀工会积极分子”
17、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”
18、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。
          </pre>
          <p>指导学生获奖</p>
          <pre>
1. 大学生“小平科技创新团队”（全国50支，广东省2支）
2. 第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛，“特等奖”（全国共三项）
3. 第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛，“一等奖”
4.“挑战杯”广东省大学生课外学术科技作品竞赛，“特等奖”3项
5.“挑战杯”广东省大学生课外学术科技作品竞赛，“一等奖”3项、“二等奖”1项
6 .“挑战杯-创青春"广东大学生创业大赛，银奖
7.全国高校移动互联网应用创新大赛“二等奖”1项、“三等奖”1项。
8.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛全国总决赛，JAVA软件开发、嵌入式设计与开发组，“三等奖”各1项
9.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛广东省赛区C/C++程序设计、JAVA软件开发、嵌入式设计与开发组，“一等奖”5项，“二等奖”10项，“三等奖”10项
10. 泛珠三角大学生计算机作品赛，“铜奖”1项，“优胜奖”1项
11.广东省“高校杯”软件设计竞赛，“一等奖”1项、“二等奖”5项
12.广东省计算机专业本科大学生毕业作品赛，“一等奖”4项，“二等奖”1项
13.广东省大学生数字图像图形创作大赛，“一等奖”3项，“二等奖”2项
14.广东省高校移动互联网应用开发创意大赛“金奖”1项，“银奖”1项
15.广东省大学生电子设计竞赛，“二等奖”1项，“三等奖”2项
16. 广东省大学生“合泰杯”单片机应用设计邀请赛，“二等奖”2项
17. 广东省“粤嵌杯”大学生嵌入式与物联网设计大赛，“二等奖”1项，“三等奖”2项
18. 广东省粤港澳大学生计算机软件应用大赛，“二等奖”和“最佳用户体验奖”
19. 广东省Java程序员竞赛“三等奖”
20. 广东省C程序员竞赛“二等奖”、“三等奖”
          </pre>
          <p>知识产权</p>
          <pre>
1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x
2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5
3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0
4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1
5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5
6.一种基于体感设备的康复训练评估方法及系统， 发明专利，专利申请号：201710533108.0
7.一种基于控制器的并行打印系统， 实用新型专利，专利申请号：201720511717.1
8.一种嵌入式系统及单色位图压缩主机， 实用新型专利，专利申请号：201720659842.7
9.一种智能急救头盔， 实用新型专利，专利申请号：201720626760.2
10.一种车祸监测系统， 实用新型专利，专利申请号：201720632265.2
11.一种可穿戴设备电源管理装置， 实用新型专利，专利申请号：201720632371.0
12.一种基于体感设备的康复训练评估系统， 实用新型专利， 专利申请号：201720802908.3
13.一款头盔内部硬件构造专利，外观专利， 专利申请号：2017302528844
14.订单集群打印系统，计算机软件著作权，软著登记号：2017SR267145
15.移动订单管理及打印系统，计算机软件著作权，软著登记号：2017SR274760
16.微型控制打印系统，计算机软件著作权，软著登记号：2017SR274774
17.智能急救头盔系统，计算机软件著作权，软著登记号：2017SR287905
18.智能急救头盔APP软件，计算机软件著作权，软著登记号：2017SR288722
19.康复训练及评估平台，计算机软件著作权，软著登记号：2017SR385752
20.康复训练及评估移动管理系统，计算机软件著作权，软著登记号：2017SR385305
21.一种电子药盒及其管理系统，发明专利，200910258397.3
22.多功能便携式数据拷贝装置，实用新型专利，201110180046.8
23.建筑楼宇声光质量检测模拟系统，计算机软件著作权，软著登记号：2011R11L029047
24.企业缴费一卡通综合管理平台软件，计算机软件著作权，软著登记号：2011SR071360
25.质量计量信息一体化管理平台软件，计算机软件著作权，软著登记号：2010SR000003
26.3D虚拟场景编辑系统，计算机软件著作权，软著登记号：2009SR061272
27.数字化虚拟场景实时漫游系统，计算机软件著作权，软著登记号：2009SR061274
28.一种电子药盒，实用新型专利，200920291910.4
29.一种无线智能家电语音控制系统，发明专利，专利申请号：200910213857.0
30.一种交互式投影的检测系统，实用新型专利，专利申请号：200920194269.2
          </pre>
          <p>研究兴趣</p>
          <pre>人工智能 , 移动互联网 ,数据挖掘</pre>
        </div>
      </div>
      <div v-if="teacherId == 1">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/wu.8919f53.png" />
          <p class="teacher-name">吴伟民</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
    吴伟民，国务院政府特殊津贴专家，全国高等学校计算机教育研究会理事，广东省计算机学会常务理事。与清华大学严蔚敏教授合著的数据结构系列教材是全国考研指定教材和高校主流教材，在海内外发行400余万册，荣获国家级普通高校优秀教材特等奖，相关成果获国家级科技进步三等奖。主要研究领域：计算机系统软件与系统结构，计算机系统逆向和介入工程技术及工具，数据结构与可视计算，程序设计语言和编译系统，虚拟机和虚拟化技术，程序可视化运行、调试与测评，智能系统与电器，嵌入式系统等。其他主要获奖：广东省教学成果二等奖、电子工业部科技成果二等奖、霍英东青年教师三等奖、曾宪梓高师教师三等奖、广东省计算机学会特等奖等。</pre
          >
          <p>教育背景</p>
          <pre>
1997.09-1998.01,1997.9-1998.1 清华大学计算机科学与技术系研究课题访问学者
1993.05-1993.12,1993.5-1993.12 新西兰奥克兰大学计算机科学系高级访问学者
1983.09-1984.07,1983.9-1984.7 清华大学计算机科学与技术系进修教师，担任助教工作
1975.09-1978.06,1975.9-1978.6 华南师范大学数学系数学专业</pre
          >
          <p>工作经历</p>
          <pre>
1998.07-now,1998.7起 广东工业大学计算机学院，历任副教授、教授，研究生导师(1999年起)，副院长(2006.12起)
1978.07-1998.06,1978.7-1998.6 华南师范大学计算机系，历任助教、讲师、副教授，副系主任（1992-1996）</pre
          >
          <p>主要荣誉</p>
          <pre>
1997.07 广东省计算机学会首届安利电脑科技奖特等奖，排名1/1
1997.06 广东省教学成果二等奖，排名1/5
1996.12 国家级科技进步三等奖，排名2/2
1993.11 霍英东青年教师奖三等奖，排名1/1
1993.10 国务院政府特殊津贴专家
1993.02 国家级普通高等学院优秀教材特等奖，排名2/3</pre
          >
          <p>教学信息</p>
          <pre>
数据结构，编译原理，等
虚拟机技术，可视计算，等</pre
          >
          <p>研究兴趣</p>
          <pre>
数据结构与算法 可视计算与虚拟机 系统介入与信息安全 智能电器与应用系统</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 2">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/an.e2db41f.png" />
          <p class="teacher-name">曾安</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
    曾安, 教授、博士，IEEE会员，校级“千百十人才工程”培养对象。
    在华南理工大学获得计算机应用技术工学博士学位，IEEE会员，校级“千百十人才工程”培养对象，副教授。十几年来一直致力于人工智能，数据挖掘和概率统计理论与方法的研究及其应用。先后作为主要参与者参加过多项国家自然科学基金，省自然科学基金。并主持完成过省自然科学基金。在IEEE Intelligent Systems (ISSN: 1541-1672)、 IEEE Transactions on Systems Man and Cybernetics (ISSN: 1083-4427)、 Lecture Notes in Computer Science (ISSN: 0302-9743)、电子学报、机械工程学报、IEEE SMC、IJCNN （International Joint Conference on Neural Networks）等国内外著名期刊或会议上发表了10多篇论文，并全部被SCI或EI索引。</pre
          >
          <p>教育背景</p>
          <pre>
2002.09-2005.07,2002.9－2005.7 华南理工大学 工学博士
1999.09-2002.07,1999.9－2002.7 华南理工大学 工学硕士
1995.09-1999.07,1995.9－1999.7 南昌航空工业学院 学士</pre
          >
          <p>工作经历</p>
          <pre>2005.07-now,2005年7月－至今 广东工业大学计算机学院任教</pre>
          <p>主要论文</p>
          <pre>
    1.ZENG An, GAO Qi-gang, PAN Dan. A Global Unsupervised Data Discretization Algorithm based on Collective Correlation Coefficient. In: Proceedings of The 24th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE'11), Lecture Notes in Artificial Intelligence (LNAI), U.S.A, June 28- July 1, 2011.
    2.Zeng An, Pan Dan, Zheng Qilun, Peng Hong, Knowledge Acquisition Approach Based on Rough Set and Principal Component Analysis, IEEE Intelligent Systems, Vol. 21, No. 2, 2006, pp. 78-85.
    3.Zeng An, Pan Dan, He Jian-bin, Prediction of MHC II-binding Peptides Using Rough Set-based Rule Sets Ensemble, Applied Intelligence，Vol.27, No.2, 2007, pp. 153-166.
    4.Pan Dan, Zheng Qilun, Zeng An, Hu Jin-song, A Novel Self-Optimizing Approach for Knowledge Acquisition, IEEE Transactions on Systems, Man And Cybernetics- Part A: Systems and Humans, Vol.32, No.4, July 2002, pp. 505-514.
    5.曾安, 郑启伦, 潘丹, 彭宏. 基于排序学习前向掩蔽模型的快速增量学习算法. 电子学报. 2004, Vol.32, No.12, pp.2051-2055.
    6.Zeng An, Pan Dan, He Jian-bin, Yu Yong-quan., A Rule Sets Ensemble for Predicting MHC II-Binding Peptides, In: Proceedings of The 19th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE'06), Lecture Notes in Artificial Intelligence (LNAI 4031), Annecy, France, June 27-30, 2006, pp. 353-362.
    7.Zeng An, Pan Dan, Yu Yong-quan, Zeng Bi, Rule Induction for Prediction</pre
          >
          <p>研究兴趣</p>
          <pre>
人工智能 , 数据挖掘和概率统计理论与方法的研究及其在医学临床诊断和金融数据分析中的应用</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 3">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/bo.61a80ac.png" />
          <p class="teacher-name">谢国波</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
    1977年出生，男，汉族，广东工业大学计算机学院教授、硕士生导师。目前，主要从事网络与分布式系统、复杂系统的分析与建模应用、基于DSP和FPGA平台的混沌信号产生与保密通信技术、信息网格研究领域的教学和科研工作，在相关领域，有较为丰富的理论和实践经验，主持和参与过多项相关科研项目。近3年主持的科研项目广东省教育部产学研、广东省科技计划等项目10多项。</pre
          >
          <p>学科领域</p>
          <pre>
    科学学位：
    计算机科学与技术 软件工程 计算机软件与理论 计算机应用技术
    专业学位：
    计算机技术 软件工程</pre
          >
          <p>工作经历</p>
          <pre>2006.01-now,毕业至今一直在广东工业大学从事教学科研工作</pre>
          <p>主要荣誉</p>
          <pre>
1.广东工业大学科技先进工作者
2.吴文俊人工智能科学技术进步三等奖</pre
          >
          <p>主要论文</p>
          <pre>
1.（包括：代表性著作及论文、获奖及专利等）在国内外期刊发表论文多篇</pre
          >
          <p>教学信息</p>
          <pre>
    1.《操作系统》，《C程序设计》 隶属于计算机学院网络空间安全系
    2.为本科生和研究生讲授了下面的课程：软件工程，软件需求分析，数据库，计算机网络，操作系统，数据结构，网络安全，计算机原理，分布式操作系统与实时操作系统，计算机系统的建模与分析，实时系统，计算机高新技术</pre
          >
          <p>科研项目</p>
          <pre>
    1.新型通道式安检机的关键技术研究及其产业化,省部产学研结合项目,项目编号：2012B091100497，下达文号：粤财教[2012]393号，下达单位：广东省科技厅，项目起止时间：2012.7.1-2014.12.31，
    2.厨房生活垃圾处理器关键技术研究及其产业化,广东省重大科技专项项目,项目编号：2012A080103010，下达文号：粤科规划字[2012]99号，下达单位：广东省科技厅，项目起止时间：2012.3.1-2014.12.31，项目经费：120万元，主持。
    3.全自动大型高效节能纸箱印刷开槽模切生产线成套设备关键技术的研发及其产业化 ,广东省粤港关键领域重点突破项目,项目编号：2012A080107007，下达文号：粤科高字[2012]197号，下达单位：广东省科技厅，项目起止时间：2012.10.1-2014.12.31，项目经费：150万元，校方主持人。
    4.不锈钢制品抛光机器人的研制及其产业化,省部产学研结合项目,项目编号：2012B091100191，下达文号：粤财教[2012]393号，下达单位：广东省科技厅，项目起止时间：2012.5.1-2014.12.31，项目经费：50万元，主持。
    5.广东省高端厨房电器技术企业重点实验室，广东省企业重点实验室建设项目，项目编号：2011A091000046，下达文号：粤财教[2011]508号，下达单位：广东省科技厅，项目起止时间：2011.3.1-2013.2.28，项目经费：100万元，主持。
    6.五华县棉洋水果专业镇技术创新服务平台建设，专业镇中小微企业公共服务平台建设工程，项目编号：2012B091400020， 下达单位：广东省科技厅，项目经费：50万，项目起止时间：2013.01.01-2014.12.31,校方主持。</pre
          >
          <p>知识产权</p>
          <pre>软件版权3项。</pre>
          <p>研究兴趣</p>
          <pre>
混沌保密通信，云计算与大数据，基于机器视觉的高精度检测和测量</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 4">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/wei.d6be8f3.png" />
          <p class="teacher-name">林伟</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
    副教授 主要研究涉及计算机管理系统，嵌入式系统应用，信息处理及智能化技术，模糊控制技术，网络技术等多方面的硬件和软件的设计，擅长硬件设计和底层软件设计。教学方面主要承担单片原理，嵌入式系统，计算机控制的教学。</pre
          >
          <p>学术领域</p>
          <pre>
科学学位： 计算机应用技术计算机软件与理论计算机科学与技术
专业学位： 计算机技术软件工程</pre
          >
          <p>教育背景</p>
          <pre>
1989.09-1991.07, 1991年于广东工学院自动化研究生毕业
1985.09-1988.07, 1988年于湖南大学电气工程系自动化专业本科毕业</pre
          >
          <p>工作经历</p>
          <pre>1991.07-now, 1991年7月开始广东工业大学计算机学院任教</pre>
          <p>主要荣誉</p>
          <pre>“DW系列微电脑多功能模糊控制蒸炖煲”98广州科技进步2等奖</pre>
          <p>主要论文</p>
          <pre>
1."高速图像采集和传输系统设计"《现代计算机》2009-12
2."Adaptive Neural-based Fuzzy Inference System Approach applied to Steering Control"《Lecture Notes in Computer Science》2009.5
3."基于物理层隔离的单向文件轮渡系统的设计及应用"《计算机安全》2009.1
4."基于AVR的长度自动测量系统的设计"《微计算机信息》2009.1</pre
          >
          <p>主要著作</p>
          <pre>
1.《廉价单片机原理及应用》，北京航空航天大学出版社
2.《单片微型机原理及开发应用》，广东高等教育出版社</pre
          >
          <p>科研项目</p>
          <pre>
1.智能高效节能多功能电控压力锅的研制及产业化（省部级产学研）
2.电力制造设备研究与开发
3.企业ERP管理软件开发。
4.广东省南方电力局培训管理系统设计
5.基于ARM嵌入式技术视觉定位系统设计
6.LonWork网络系统应用设计
7.LonWork智能节点设计
8.智能家居网络系统设计
9.工厂自动化控制系统设计
10.电力线载波数字通讯控制器设计
11.家用电器模糊控制的检测技术</pre
          >
          <p>研究兴趣</p>
          <pre>智能工程 , 嵌入式系统 , 计算机控制</pre>
        </div>
      </div>
      <div v-if="teacherId == 5">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/yang.png" />
          <p class="teacher-name">李杨</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
李杨，博士，副教授，计算机科学系副主任，CCF会员、 CCF YOCSEF广州委员、中关村大数据产业联盟会员、 广东省计算机学会大数据专业委员会会员。主持和参加国家自然科学基金、省市科技等各类项目13项，获专利授权10项，其中发明专利1项，在国际期刊、会议和核心期刊发表论文10多篇。个人共获各类省、市、校奖项30多项，其中被评选为广东工业大学 “十佳授课教师”，获得“先进科技工作者”、“年度优秀教师” 、“计算机学院师德先进个人”等荣誉称号。获得市级科技进步奖“二等奖”1项，指导学生获各类国家、省级、校级奖项30多项。曾获邀为中关村大数据联盟“大数据100分”论坛作大数据安全相关的学术报告，引起了大数据研究者和从业者的广泛关注。</pre
          >
          <p>学科领域</p>
          <pre>
1.科学学位： 计算机科学与技术软件工程
2.专业学位： 计算机技术软件工程</pre
          >
          <p>学术兼职</p>
          <pre>
1.CCF会员
2.CCF YOCSEF广州委员
3.中关村大数据产业联盟会员
4.广东省计算机学会大数据专业委员会会员</pre
          >
          <p>主要荣誉</p>
          <pre>
一、个人获奖
1.广东工业大学“十佳授课教师”
2.广东工业大学“年度优秀教师”
3.云浮市“科学技术奖二等奖”
4.广东工业大学“科研工作先进者”
5.广东工业大学教学优秀“一等奖”，“二等奖”
6.广东工业大学“优秀指导老师”
7.广东工业大学“优秀工会积极分子”
8.广东工业大学年度考核“优秀”
9.广东工业大学“优秀班主任”
10.“计算机学院师德先进个人”
二、指导学生获奖
1.第十二届“挑战杯”广东大学生课外学术科技作品竞赛终审决赛，特等奖
2.第十二届“挑战杯”广东大学生课外学术科技作品竞赛终审决赛，一等奖
3.第二十二届广东省高校软件作品设计竞赛（华资高校杯），二等奖
4.2012年广东省大学生电子设计竞赛，三等奖
5.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，一等奖2项
6.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，二等奖1项
7.第五届“挑战杯”广东工业大学课外学术科技作品竞赛，三等奖2项
8.2008、2013年指导毕业设计“创新奖”
9.2013年国家级大学生创新创业训练项目
10.2012年广东省大学生创新创业训练项目
11.2014年广东省大学生创新创业训练项目</pre
          >
          <p>主要论文</p>
          <pre>
1. 李杨 *，郝志峰，肖燕珊，袁淦钊，谢光强.差分隐私DPE k-means数据聚合下的多维数据可视化[J].小型微型计算机系统，2013,34(7):1637-1640
2. 李杨 *，郝志峰，谢光强,袁淦钊.质量度量指标驱动的数据聚合与多维数据可视化[J]. 智能系统学报，2013,8(4):299-304
3. 李杨 *，杨春燕，李立希.企业资源矛盾问题分析与求解系统设计与实现[J].哈尔滨工业大学学报，2006,38(7):1195-1198
4. 李杨 *，郝志峰，温雯，谢光强. 差分隐私保护k-means聚类方法研究[J].计算机科学,2013,40(3):287-290
5. 李杨 *，温雯，谢光强.差分隐私保护研究综述[J].计算机应用研究,2012,29(9) :3201-3205
6. Li Yang *, Xie Guangqiang,Li Xiaomei , Liu Hua. Dependent function interval parameters training algorithm based on DBSCAN clustering[C]. Proceedings of the 31st Chinese Control Conference, CCC 2012:7709-7712（EI：20130716024809）</pre
          >
          <p>科研项目</p>
          <pre>
1.广东省专业镇中小微企业服务平台项目，面向不锈钢产业的质量检测公共服务平台(项目编号：13ZK0119)
2.广东质检院综合业务管理信息系统检验系统开发(项目编号：13HK0182)
3.韶关企业缴费一卡通综合管理平台（项目编号：2010014）
4.质量计量网络信息管理系统（项目编号：2007082）
5.质量信息一体化平台（项目编号：2007068）
6.质量计量业务管理平台（项目编号：2007067）
7.石材企业信用评级软件平台（项目编号：2011185）
8.石材企业信用等级评定标准关键技术及总体方案设计（项目编号：2011183）
9.质量计量信息一体化平台运行优化研究（项目编号：2011184）
10.企业可拓智能决策支持系统的设计与实现（项目编号：20066007）
11.基于最大间隔的多示例学习算法设计与分析（项目编号：12ZK0245）
12.基于可拓数据挖掘的客户价值研究（项目编号：100230）
13.不锈钢特色产业产学研合作创新平台（项目编号：13ZK0120）</pre
          >
          <p>知识产权</p>
          <pre>
1.一种电子药盒及其管理系统，发明专利，200910258397.3，2012.01
2.多功能便携式数据拷贝装置，实用新型，201110180046.8，2012.01
3.基于Android的移动协同办公系统，计算机软件著作权，软著登字第0551454号，2013.05
4.高校课程自主学习平台系统，计算机软件著作权，软著登字第0550394号，2013.05</pre
          >
          <p>指导团队</p>
          <pre>
1.数据挖掘与信息检索实验室
2.数据结构与可视计算学生工作室（负责人、指导教师）
3.QG工作室（指导教师）</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 6">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/zhu.30b1e6a.png" />
          <p class="teacher-name">朱清华</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
    朱清华，博士，副教授，硕士生导师，IEEE 高级会员，ACM会员. 2014/10~2015/10，2017/09~2018/09, 在美国新泽西理工学院(New Jersey Institute of Technology)任访问学者。
    研究领域包括：离散事件系统、Petri网理论及应用、优化调度算法（应用背景：半导体制造、云计算）。</pre
          >
          <p>教育背景</p>
          <pre>
1997.09-1998.01,1997.9-1998.1 清华大学计算机科学与技术系研究课题访问学者
1993.05-1993.12,1993.5-1993.12 新西兰奥克兰大学计算机科学系高级访问学者
1983.09-1984.07,1983.9-1984.7 清华大学计算机科学与技术系进修教师，担任助教工作
1975.09-1978.06,1975.9-1978.6 华南师范大学数学系数学专业</pre
          >
          <p>工作经历</p>
          <pre>
2003-至今，广东工业大学计算机学院；
2014/10-2015/10，在美国新泽西理工学院(www.njit.edu)电气与计算机工程系任访问学者, 与该系杰出教授MengChu Zhou (IEEE Fellow, AAAS Fellow)开展合作研究。
1997-2000，江西财经大学信息管理学院计算机系；</pre
          >
          <p>学科领域</p>
          <pre>
科学学位：计算机科学与技术 软件工程
专业学位：计算机技术软件工程</pre
          >
          <p>学术研究</p>
          <pre>
1.目前在研课题包括：本人负责的1项国家自然科学基金面上项目(2017~2020)和2项广东省自然科学基金项目。曾参与多项国家自然科学基金项目的研究工作。主持或作为技术负责人完成了多个企业web信息系统、网络安全软件的研究与开发。
2.在IEEE Transactions等期刊、IEEE国际会议上发表10多篇论文(均被SCI或EI检索)。
3.研究领域：优化调度（半导体制造、云计算）、离散事件系统、Petri网理论及应用。
4.代表成果：发现半导体芯片制造系统(multi-cluster tools)存在1-晶圆(1-wafer)调度及其存在的充要条件，提出了求解能达生产周期下界的1-晶圆周期调度的高效算法。</pre
          >
          <p>学术兼职</p>
          <pre>
担任如下期刊的审稿人：
1.IEEE Transactions on Semiconductor Manufacturing (SCI检索),
2.Journal of Intelligent Manufacturing (SCI检索) ,
3.IEEE Access (SCI检索) ,
4.IEEE/CAA Journal of Automatica Sinica (SCI检索) ,
5.控制理论与应用 (EI检索)。
6.担任波兰国家自然科学基金OPUS项目评审员。
7.担任如下国际会议的分会主席/程序委员会(PC)成员或技术委员会成员：
分会主席： 2017 IEEE International Conference on Robotics and Automation, Singapore, May 2017
程序委员会成员： (1)2017 IEEE International Conference on Networking, Sensing and Control (Calabria, Italy); (2)2017 International Conference on Modeling, Simulation and Control of Discrete Event Systems (Yilan, Taiwan)
技术委员会成员：Human Centered Transportation Systems Technical Committee, IEEE SMC Society。</pre
          >
          <p>主要论文</p>
          <pre>
期刊论文:
[1] QingHua Zhu, MengChu Zhou, Yan Qiao, and NaiQi  Wu. Petri Net Modeling and Scheduling  of a Close-Down Process for Time-Constrained Single-Arm Cluster Tools. IEEE  Transactions on Systems, Man, and Cybernetics:  Systems, accepted, to appear
[2] Q. H. Zhu, N.  Q. Wu, Y. Qiao, and M. C. Zhou. Optimal Scheduling of Complex Multi-cluster Tools based on Timed  Resource-oriented Petri Nets. IEEE Access, vol. 4, pp. 2096 – 2109, Apr. 2016 (http://ieeexplore.ieee.org/abstract/document/7445820/)
[3] Q. H. Zhu, N. Q. Wu, Y.  Qiao, and M. C. Zhou. Scheduling of Single-Arm Multi-cluster Tools With Wafer Residency Time Constraints in  Semiconductor Manufacturing. IEEE Transactions on  Semiconductor Manufacturing, vol. 28,  no.1, pp. 117-125, Feb. 2015
[4] Q. H. Zhu, N. Q. Wu, Y.  Qiao, and M. C. Zhou. Petri Net-Based Optimal One-Wafer Scheduling of Single-Arm Multi-Cluster Tools in  Semiconductor Manufacturing. IEEE Transactions on  Semiconductor Manufacturing, vol. 26,  no. 4, pp. 578~591, Nov. 2013. (http://ieeexplore.ieee.org/abstract/document/6579732/)
[5] 朱清华，伍乃骐，滕少华 . 半导体制造中多组合设备的Petri网建模及死锁分析. 东南大学学报,2010,40(11) Sup. II :267-271 .
[6] 朱清华，伍乃骐，滕少华. 多组合设备调度控制的研究综述. 控制理论与应用,2010,27(10):   1369-1375.
[7] 朱清华, 陈剑云. 分布式SCADA系统的UML建模分析设计. 计算机工程, 2005, 31(6): 218-221
会议论文：
[1] QingHua Zhu, Mengchu  Zhou, Yan Qiao, and Naiqi Wu. Scheduling Close-down Processes Subject to Wafer Residency Constraints for Single-arm  Cluster Tools. 2015 IEEE International Conference on System, Man,  and Cybernetics, Hongkong, Oct. 2015,  pp. 521-526
[2] QingHua Zhu, Yan  Qiao and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Tree-like Multi-Cluster Tools. 2015 IEEE International Conference on Automation Science and  Engineering, Sweden, Aug. 2015, pp. 292-297
[3] QingHua Zhu, NaiQi Wu, Yan Qiao, and MengChu  Zhou. Modeling and Schedulability  Analysis of Single-Arm Multi-Cluster Tools with Residency Time Constraints via Petri Nets. 2014 IEEE International Conference on Automation Science and Engineering, Taipei,  Taiwan, Aug. 2014, pp. 81-86.
[4] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Petri Net Modeling and One-Wafer Scheduling of Single-Arm Multi-Cluster Tools. 2013 IEEE International  Conference on Automation Science and Engineering,Madison, Wisconsin, Aug. 2013, pp. 862-867.
[5] QingHua Zhu, NaiQi  Wu, Yan Qiao, and MengChu Zhou. Scheduling of Single-Arm Multi-Cluster Tools to Achieve the Minimum  Cycle Time. 2013 IEEE International  Conference on Robotics and Automation, Karlsruhe, Germany, May 2013, pp. 3555-3560. （中国计算机学会推荐B类高水平会议）</pre
          >
          <p>教学活动</p>
          <pre>
本科生课程：C语言程序设计，Java程序设计，面向对象的系统分析与设计</pre
          >
          <p>科研项目</p>
          <pre>
[1] 国家自然科学基金面上项目，多组合设备晶圆加工复杂瞬态过程的优化调度方法(2017-2020)，(61673123)
[2] 广东省自然科学基金,半导体制造中小批量晶圆切换生产过程的优化调度(2016-2019),(2016A030313702)
[3] 广东省自然科学基金,半导体芯片制造中线性多组合设备的调度优化(2015-2017),(2014A030310118)
另外，主持或作为技术负责人完成了多个企业web信息系统、网络安全软件的研究与开发。</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 7">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/chen.1961b0c.png" />
          <p class="teacher-name">陈云华</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>个人简介</p>
          <pre>
陈云华，女，博士，CCF会员。武汉测绘科技大学学士，武汉大学硕士，广东工业大学博士，现为广东工业大学计算机学院讲师。主要研究方向为智能视频监控、面部表情识别、图像超分辨率、智能与软计算等。近年来在国内外著名刊物发表学术论文14篇，申请和获得专利2项，获得软件著作权1项，主持承担省部级项目4项、企业项目1项，作为主要成员参与10多项项目的研发，所主持的项目经费超过400万元。</pre
          >
          <p>教育背景</p>
          <pre>
2007/09 - 2013/07，广东工业大学，控制理论与控制工程专业，博士
2000/09 - 2003/07，武汉大学，计算机应用技术专业，硕士
1996/09 - 2000/07，武汉测绘科技大学，计算机软件专业，学士</pre
          >
          <p>工作经历</p>
          <pre>2003/09至今，广东工业大学大学计算机学院教师</pre>
          <p>主要荣誉</p>
          <pre>
1.中国软件行业协会嵌入式系统分会中国嵌入式系统产业联盟“嵌入式Linux系统开发最具潜力讲师”
2.“粤嵌杯”广东省大学生嵌入式与物联网设计大赛“一等奖”
3.广东工业大学教学优秀“二等奖”
4.广东工业大学毕业生就业工作“先进个人”
5.广东工业大学毕业设计（论文）创新奖
6.广东工业大学年度考核“优秀”</pre
          >
          <p>主要论文</p>
          <pre>
1.精神疲劳可拓模型与求解策略，计算机科学.2015.
2.基于嘴巴特征点曲线拟合的哈欠检测, 计算机工程与科学，2014.
3.基于多策略融合的亚像素精度立体匹配研究，计算机应用与软件，2014.
4.基于限制广播的ZigBee分布式动态能量均衡协议，传感技术学报，2014.
5.精神疲劳实时监测中多面部特征时序分类模型，中国图象图形学报，2013.
6.基于面部视觉特征的精神疲劳可拓辨识模型，计算机科学，2013.
7.面向精神疲劳监测的实用虹膜定位方法，微电子学与计算机，2013.
8.基于眼动参数云融合模型的疲劳检测方法，计算机科学与设计，2013.
9.基于J2EE与ArcGIS的测绘成果管理系统研究与实现，微电子学与计算机，2011.
10.基于J2EE与ArcIMS的WebGIS研究与应用，微电子学与计算机，2010.
11.一种改进的双群进化规划算法，计算机工程，2010.
12.Extension evaluation method and its application in waste organic gas treatment.Proceedings of ACTEA 2009.
13.Extension detecting technology and the implementing method for its application in engineering.Proceedings of ICMLC 2009.
14.Application of granular computing in extension criminal reconnaissance system.Proceedings of GrC 2007.
15.一种基于新型遗传算法的块运动估计算法，计算机工程与应用，2005.
16.一种结合时域信息的量化误差模型，微机发展，2004.</pre
          >
          <p>学术领域</p>
          <pre>
1.科学学位：信号与信息处理计算机科学与技术
2.专业学位：计算机技术软件工程</pre
          >
          <p>科研项目</p>
          <pre>
1.低质量监控视频人脸超分辨率算法研究，广东省自然科学基金项目，2014/10-2017/10.
2.适用于恶劣环境的视频监控系统开发与产业化，广东省科技计划项目，2014/1-2016/12.
3.支持小间距LED显示的多屏实时处理器系统的研发，广州市科技计划项目，2014/10-2016/10.
4.兴宁市水口镇中小微企业信息化公共服务平台建设，广东省科技计划项目，2014/1-2016/10
5.基于眼动分析的驾驶员分心检测系统的研制，广东省科技计划国际合作项目，2011/1-2013/12.
6.基于Android的数字家庭综合业务服务开放平台研究与开发，广州市科技计划项目，2011/7-2014/7.
7.面向社区医疗服务的物联网应用系统研究与开发，广州市黄埔区科技计划，2011/1-2014/1.
8.运动会比赛项目管理系统，企业项目，2010/10-2013/10。
9.基于3G的售后服务行业物联网应用系统研究与开发，广东省教育部产学研合作项目，2010/9-2013/9.</pre
          >
          <p>学术兼职</p>
          <pre>CCF会员</pre>
          <p>教学活动</p>
          <pre>
1.基于S3C6410的驾驶疲劳检测系统研究与实现，大学生创新创业训练项目，2012/9-2013/9.
2.基于S3C6410的远程音视频同步监控系统，大学生创新创业训练项目，2012/9-2013/9.
3.便携式跟踪定位器设计与实现，广东工业大学合生珠江大学生创新性实验项目，2011/9-2012/9.
4.基于云存储的移动视频监控系统，广东省大学生创新实验项目，2010/9-2011/9.
5.参与《程序设计》课程建设及教改项目1项.</pre
          >
          <p>知识产权</p>
          <pre>
1.面部特征点快速定位方法，中国，201410487599.6
2.一种面向社区医疗服务的智能手持终端，中国，CN203290884 U
3.驾驶疲劳检测和预警软件(原始取得)，登记号：2014SR020060</pre
          >
          <p>指导团队</p>
          <pre>智美乐视觉</pre>
          <p>研究兴趣</p>
          <pre>视频监控 , 面部表情识别 , 图像超分辨率 , 智能与软计算</pre>
        </div>
      </div>
      <div v-if="teacherId == 8">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/ying.f8cd54b.jpg" />
          <p class="teacher-name">曾颖</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>主要荣誉</p>
          <pre>
1.自2012年起承担《程序设计》课程教学工作，获第6届广东工业大学“十佳青年授课教师“称号
2.获广东工业大学教学优秀一等奖1次
3.获广东工业大学教学优秀二等奖2次</pre
          >
          <p>科研项目</p>
          <pre>
面向纺织精密数控设备的综合服务平台建设,项目编号：2013B011304007，下达文号：粤科规财字[2014]205号，广东省数控一代机械产品创新应用示范工程专项资金项目审批，项目经费：100万元，主持。</pre
          >
        </div>
      </div>
      <div v-if="teacherId == 9">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/xuan.d808a03.jpg" />
          <p class="teacher-name">孙宣东</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>科研项目</p>
          <pre>
1.分组等重码实验平台研究与实现（项目编号201211845053）
2.基于GE码的新型分布式存储系统研究与实现
3.面向福利彩票行业的数据存储备份系统研究
4.ACM在线学习与测试平台的建设与应用</pre
          >
          <p>指导学生获奖</p>
          <div class="honor-photo">
            <img
              v-for="(item, index) in detailTeacher.honorPhoto"
              :key="index"
              :src="item"
            />
          </div>
        </div>
      </div>
      <div v-if="teacherId == 10">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/hui.4ced16d.jpg" />
          <p class="teacher-name">汪明慧</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>指导获奖</p>
          <pre>海上丝绸之路动态历史地理信息系统 第六届挑战杯特等奖</pre>
          <p>研究兴趣</p>
          <pre>基于可信计算技术的自助服务系统终端可信环境构建研究</pre>
        </div>
      </div>
      <div v-if="teacherId == 11">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/lu.b03aa5f.jpg" />
          <p class="teacher-name">路璐</p>
          <p>骨干教师</p>
        </div>
        <div class="teacher-main">
          <p>主要荣誉</p>
          <pre>
1.2014年获得广东工业大学十佳授课教师
2.获得2014-2015学年度，广东工业大学教学优秀一等奖
3.获得2015-2016学年度，广东工业大学教学优秀一等奖</pre
          >
          <p>指导获奖</p>
          <pre>
1.指导大学生创新创业项目两项（国家级、省级各一项）,2012年
2.以校第二完成人身份参与的广东省现代信息服务业发展专项资金项目《广业车盟电子商务综合信息服务平台》荣获广东省科学技术进步三等奖，2013
3.2013年计算机学院青年教师教学竞赛，获一等奖
4.2012-2013学年度考核优秀
5.获得2015-2016学年度，广东工业大学教学优秀一等奖
6.获得2014-2015学年度，广东工业大学教学优秀一等奖
7.2015年公开发表”基于CDIO模式的数据库课程设计教学改革与实践”教改文章一篇
8.获得2016年教学改革项目“基于android的数据库移动学习交互平台的研究与实践”省级立项1项。
9.2017年公开发表“软件工程专业五位一体培养体系的探索与实践”教改文章一篇
10.2018年公开发表“基于Android的数据库移动学习系统的设计与实现” 教改文章一篇</pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherCard from "./../../../components/TeacherCard/TeacherCard";
export default {
  data() {
    return {
      htmlId: 1,
      teacherId: 0,
    };
  },
  components: {
    TeacherCard,
  },
  methods: {
    toPage(index) {
      this.htmlId = 2;
      this.teacherId = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.awards-li {
  width: 100%;
  margin-bottom: 24px;
  span {
    a {
      color: #515a6e;
    }
    display: inline-block;
    font-size: 16px;
    margin: 0 12px;
    padding: 8px 0;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #3b888b;
      font-weight: 600;
    }
  }
  .active {
    border-bottom: 3px solid #3b888b;
    font-weight: 600;
  }
}
.teacher-group {
  width: 100%;
  > p {
    font-size: 16px;
    font-weight: 600;
  }
  .teacher-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
.teacher-detail {
  > div:first-child {
    font-weight: 600;
    label {
      color: #57aeb1;
      margin-right: 12px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #57aeb1;
      }
    }
  }
  > div:nth-child(2) {
    width: 100%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 12px auto;
    padding: 48px 64px;
    .detail-photo {
      width: 72px;
      margin: 0 36px 36px 0;
      float: left;
      img {
        width: 72px;
        height: 100px;
        background: #868684;
        border-radius: 8px;
        overflow: hidden;
        border: none;
      }
      p {
        font-size: 10px;
        text-align: center;
        color: #868684;
      }
      .teacher-name {
        color: #585858;
        font-weight: 600;
        letter-spacing: 0.1em;
        font-size: 16px;
      }
    }
    .teacher-main {
      width: 100%;
      p {
        font-size: 14px;
        font-weight: 600;
        margin: 8px 0;
        &:first-child {
          margin-top: 0;
        }
      }
      pre {
        margin-left: 24px;
        font-size: 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .honor-photo {
        width: calc(100% + 16px);
        margin: 12px -8px;
        display: flex;
        flex-wrap: wrap;

        img {
          width: calc(25% - 16px);
          height: 140px;
          margin: 8px;
          background-color: #868684;
        }
      }
    }
  }
}
</style>
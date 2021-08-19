<template>
  <div>
    <div
      class="university-alliance teacher-group teacher-detail"
      v-show="htmlId == 1"
    >
      <div class="teacher-big-card">
        <div class="schools">
          <div>
            <img src="./../../../assets/teacherstyle/school/gdut.png" />
            <span>广东工业大学</span>
          </div>
        </div>
        <div class="teacher-div">
          <div class="detail-photo">
            <img src="./../../../assets/teacherstyle/head/xie.jpg" />
            <p class="teacher-name">谢光强</p>
            <p>课程负责人</p>
          </div>
          <div class="teacher-main">
            <p>个人简介</p>
            <pre>
    谢光强，广东工业大学计算机学院副院长，博士，教授，硕士生导师。研究领域为人工智能、无人驾驶、数据挖掘。国家用自动控制器标准化技术委员会变频控制器分技术委员会副主任委员、中国人工智能学会科普工作委员会委员、中国人工智能学会知识工程与分布智能专业委员会委员、中国计算机学会高级会员、计算机应用专业委员会委员、广东省青年科学家协会第四届理事、广东省科技咨询专家库专家、CCF YOCSEF广州副主席、广东省计算机学会大数据专业委员会委员、广东省电子政务大数据专家委员会专家，广东省高等学校"千百十工程"培养对象。

    主持和参加国家自然科学基金、省市科技等各类项目30余项，申请专利和软件著作权近60项，在相关领域国际、国内期刊和会议发表学术论文40余篇。主持主持广东省在线开放课程和精品资源共享课各一项，课程评教得分曾名列全校第一。个人获奖和指导学生获奖280余项（国家级40项、省级140项），获得了广东省教育教学成果奖（高等教育）“一等奖”、广东省“五四青年奖章”集体提名奖、广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”、“五四青年奖章”， “优秀教师”等重要荣誉，主持研发的一项科技成果通过鉴定，获得了市级科技进步奖“二等奖”。

    创建并指导的“QG科技创新工作室”，于2018年在北京人民大会堂获颁发了由共青团中央、全国青联、全国学联等权威机构共同评选的大学生“小平科技创新团队”称号（广东省2支，全国共50支），培养创新人才200多名，指导大学生创新创业训练计划30多项（国家级7项、省级13项、广东省攀登计划重点项目1项）。指导学生获各类科技竞赛奖项240余项，获得重要奖项包括第十四届“挑战杯”全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛"特等奖"（全国共三项）、第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛"一等奖"、中国大学生计算机设计大赛“一等奖”、全国大学生软件测试大赛全国总决赛“特等奖”、“中国软件杯”大学生软件设计大赛总决赛“一等奖”、泛珠三角大学生计算机作品赛总决赛“金奖”。指导国家级大创项目，三项结题为优秀，经广东省教育厅和教育部选拔推荐，三次代表广东省参加全国大学生创新创业年会，获得好评。培养的大部分学生进入了华为、阿里巴巴（支付宝、阿里云、淘宝）、腾讯（微信）、百度、字节跳动等知名IT公司工作，指导的毕业生曾获得“腾讯最佳员工”、“百度最佳个人”。所获成果受到了广东卫视等主流媒体的好评和采访，并在《广东新闻联播》中播出。
          </pre
            >
          </div>
        </div>
      </div>
      <div class="teacher-big-card">
        <div class="schools">
          <div>
            <img src="./../../../assets/teacherstyle/school/zsdx.png" />
            <span>中山大学</span>
          </div>
        </div>
        <div class="teacher-div">
          <div class="detail-photo">
            <img src="./../../../assets/teacherstyle/head/wan.png" />
            <p class="teacher-name">万海</p>
            <p>骨干教师</p>
          </div>
          <div class="teacher-main">
            <p>个人简介</p>
            <pre>
    中山大学数据科学与计算机学院，博士，副教授，硕士生导师。
    
    多年来一直从事知识的表示与推理（KR）、回答集编程 (ASP)、场景图谱 (SG)、可满足性问题 (SAT)、组合优化问题 (COP)理论研究。
    
    主持国家自然科学基金项目1项、广东省自然科学基金项目3项和广州市科技计划项目2项；发表20余篇论文，主讲高级程序设计与实践。</pre
            >
          </div>
        </div>
      </div>
      <div class="teacher-big-card">
        <div class="schools">
          <div>
            <img src="./../../../assets/teacherstyle/school/szdx.png" />
            <span>深圳大学</span>
          </div>
        </div>
        <div class="teacher-div">
          <div class="detail-photo">
            <img src="./../../../assets/teacherstyle/head/yyl.png" />
            <p class="teacher-name">杨艳丽</p>
            <p>骨干教师</p>
          </div>
          <div class="teacher-main">
            <p>个人简介</p>
            <pre>
    杨艳丽，深圳大学计算机与软件学院《程序设计基础》课程组负责人，博士，副教授，硕士生导师。研究领域为人工智能、智能控制。

    主持1项深圳大学精品资源共享课《程序设计基础》，参加1项广东省精品资源共享课《数据结构》。所带程序设计基础课程组2018年获深圳大学计算机与软件学院优秀课程奖。主持程序设计基础MOOC是深圳大学第四批建设项目，自2014年建设以来，累计开课近22次（一期两次），选课学生达2万余人次，涉及院校64个，累计互动5.4万余次。2014年获深圳大学 “腾讯益友杯”优秀教师奖，2016年获深圳市优秀班主任奖。学生培养成效显著，从2017年我校参加第10次、第11次，第13次CCF CSP认证均排名全国前十，2019年CSP18次认证排名前3。指导学生参加“挑战杯”指导学生参加广东省和深圳大学 “挑战杯”2项， “iPark/爱停”获深圳大学2015年“挑战杯”课外学术科技作品竞赛决赛特等奖，并获广东大学生科技创新培育专项资金（攀登计划）项目资助6万元，并报专利2项。
          </pre
            >
          </div>
        </div>
      </div>
      <div class="teacher-big-card">
        <div class="schools">
          <div>
            <img src="./../../../assets/teacherstyle/school/lnsfdx.png" />
            <span>岭南师范学院</span>
          </div>
        </div>
        <div class="teacher-div">
          <div class="detail-photo">
            <img src="./../../../assets/teacherstyle/head/wu.jpg" />
            <p class="teacher-name">吴涛</p>
            <p>骨干教师</p>
          </div>
          <div class="teacher-main">
            <p>个人简介</p>
            <pre>
    吴涛，岭南师范学院教学发展与质量测评中心主任，博士，教授。研究领域计算机图形图像学、教育信息技术及其应用。受聘华南师范大学、广东技术师范大学、广东海洋大学、佛山科学技术学院硕士生导师，联合培养研究生。兼任广东省科技咨询专家库专家、广东省中小学教师信息技术应用能力提升工程专家，广东省高等学校公共计算机课程教学指导委员会委员，湛江市教育信息技术协会常务理事，兼职受聘东软公司数据库开发工程师，曾入选广东省高等学校千百十校级培养对象、广东省优秀青年教师培养计划等。
    
    主持国家自然科学基金1项、其他省部级以上学术研究项目5项，主持广东省高等教育教学改革项目2项，发表学术论文近60篇、教研论文近10篇，获软件著作权、发明专利10余项，获江苏省优秀软件产品奖金慧奖，湛江市科技进步二等奖，岭南师范学院师德标兵、优秀教师，《中国图象图形学报》年度优秀论文，广东计算机学会优秀论文奖等。
    
    指导大学生创新创业训练计划项目近10项，指导学生获得挑战杯全国大学生课外学术科技作品赛广东省三等奖2次，中国大学生计算机设计大赛三等奖多次，广东省ACM程序设计大赛三等奖1次，全国软件和信息技术专业人才大赛（蓝桥杯）多项。
          </pre
            >
          </div>
        </div>
      </div>
      <div class="teacher-big-card">
        <div class="schools">
          <div>
            <img src="./../../../assets/teacherstyle/school/zknxy.png" />
            <span>仲恺农业工程学院</span>
          </div>
        </div>
        <div class="teacher-div">
          <div class="detail-photo">
            <img src="./../../../assets/teacherstyle/head/xu.png" />
            <p class="teacher-name">徐龙琴</p>
            <p>骨干教师</p>
          </div>
          <div class="teacher-main">
            <p>个人简介</p>
            <pre>
    徐龙琴，仲恺农业工程学院，硕士，教授，硕士生导师，广州市农产品质量安全溯源信息技术重点实验室副主任、广东省高校智慧农业工程技术研究中心副主任、广东省农产品安全大数据工程技术研究中心副主任，广东省“千百十工程”校级培养对象。研究领域为农业大数据、智能信息处理、数据挖掘、区块链。个人学术兼职：广州市智能工程研究会理事、广东省省部科技特派员、广东省科技计划项目、省基金项目评审专家、中国计算机学会会员。
    
    主持和参与国家自然科学基金项目、省市级科技等各类项目20多项，申请并授权发明专利和实用新型专利40多件，软件著作权30多项，在国际、国内期刊和会议发表学术论文40余篇，其中SCI/EI检索10多篇。主持广东省质量工程项目1项，获广东省科学技术奖三等奖、湛江市科学技术进步奖三等奖、广东省计算机学会科学技术一等奖、二等奖、三等奖、广东省计算机学会优秀论文三等奖、师德先进个人、校级教学质量优秀奖、校级教学成果一等奖和二等奖、广东省高等学校教育技术年会优质教学资源三等奖、本科优秀毕业论文指导奖、中国软件杯指导老师、蓝桥杯优秀指导老师等各类省部级、市厅级、校级40多项；指导学生大学生创新创业项目、攀登计划项目等国家级、省级10多项。建设了《数据库原理及应用》网络课程，教学质量和教学效果深的师生好评。
    </pre
            >
          </div>
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
  created() {
    // 获取传来的参数
    console.log(this.$route);
    const { teacherId } = this.$route.query;
    if (teacherId !== undefined) {
      this.toPage(teacherId);
    }
  },
};
</script>
<style lang="scss" scoped>
.teacher-big-card {
  background-image: url(./../../../assets/BG.png);
  background-size: cover;
  margin: 32px 0;
  border-radius: 16px;
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
.teacher-div {
  width: 100%;
  // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 12px auto;
  padding: 0 32px 24px;
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
// .teacher-detail {
//   > div:first-child {
//     font-weight: 600;
//     label {
//       color: #57aeb1;
//       margin-right: 12px;
//       font-size: 16px;
//       cursor: pointer;
//       &:hover {
//         border-bottom: 1px solid #57aeb1;
//       }
//     }
//   }
//   > div:nth-child(2) {
//     width: 100%;
//     // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
//     border-radius: 8px;
//     margin: 12px auto;
//     padding: 48px 64px;
//     .detail-photo {
//       width: 72px;
//       margin: 0 36px 36px 0;
//       float: left;
//       img {
//         width: 72px;
//         height: 100px;
//         background: #868684;
//         border-radius: 8px;
//         overflow: hidden;
//         border: none;
//       }
//       p {
//         font-size: 10px;
//         text-align: center;
//         color: #868684;
//       }
//       .teacher-name {
//         color: #585858;
//         font-weight: 600;
//         letter-spacing: 0.1em;
//         font-size: 16px;
//       }
//     }
//     .teacher-main {
//       width: 100%;
//       p {
//         font-size: 14px;
//         font-weight: 600;
//         margin: 8px 0;
//         &:first-child {
//           margin-top: 0;
//         }
//       }
//       pre {
//         margin-left: 24px;
//         font-size: 10px;
//         white-space: pre-wrap;
//         word-wrap: break-word;
//       }
//       .honor-photo {
//         width: calc(100% + 16px);
//         margin: 12px -8px;
//         display: flex;
//         flex-wrap: wrap;

//         img {
//           width: calc(25% - 16px);
//           height: 140px;
//           margin: 8px;
//           background-color: #868684;
//         }
//       }
//     }
//   }
// }
.university-alliance {
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .schools {
    width: calc(100% + 24px);
    // margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    > div {
      // box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
      height: 64px;
      line-height: 64px;
      width: 18%;
      margin: 6px 6px;
      display: flex;
      border-radius: 8px;
      img {
        width: 44px;
        height: 44px;
        margin: 10px;
        background-color: #868684;
      }
      span {
        font-weight: 600;
        font-size: 14px;
        color: #585858;
      }
    }
  }
}
</style>
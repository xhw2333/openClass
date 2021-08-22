<template>
  <div class="reform-title">
    <p>广东工业大学计算机学院教学改革项目列表（省级、校级）</p>
    <div>
      <p>教改项目</p>
      <Table
        :columns="columns1"
        :data="data1"
        style="z-index: -1; margin: 0; width: 100%"
      ></Table>
    </div>
    <div>
      <p>指导大学生创新创业训练项目</p>
      <!-- <iframe
        src="http://qgailab.com/cloud/course/static/pdf/5.0b9f967.pdf"
        class="guide_project"
      ></iframe> -->
      <!-- <img src="../../../assets/pdf/innovation.jpg" alt=""> -->
      <Table :columns="columns2" :data="softwares" style="z-index: -1; margin: 0; width: 100%"></Table>
    </div>
    <div>
      <p>专利</p>
      <!-- <iframe
        src="http://qgailab.com/cloud/course/static/pdf/6.d18a2da.pdf"
        class="guide_project"
      ></iframe> -->
      <!-- <img src="../../../assets/pdf/patent.jpg" alt="" /> -->
      <Table :columns="columns3" :data="copyrights" style="z-index: -1; margin: 0; width: 100%"></Table>
    </div>
    <div>
      <p>研究成果：教改论文</p>
      <Table :columns="columns4" :data="papers" style="z-index: -1; margin: 0; width: 100%"></Table>
      <div>
        <img src="../../../assets/images/result1.png" />
        <img src="../../../assets/images/result2.png" />
      </div>
    </div>
  </div>
</template>
<script>
const {softwares } = require("../../../assets/data/software");
const {copyrights} = require("../../../assets/data/copyright");
export default {
  data() {
    return {
      columns1: [
        {
          title: "序号",
          key: "num",
        },
        {
          title: "时间",
          key: "time",
        },
        {
          title: "教改项目名称",
          key: "name",
        },
        {
          title: "负责人",
          key: "man",
        },
        {
          title: "项目级别",
          key: "level",
        },
      ],
      data1: [
        {
          num: 1,
          time: 2015,
          name: "广东省精品资源共享课《程序设计》",
          man: "谢光强",
          level: "省级",
        },
        {
          num: 2,
          time: 2016,
          name:
            "广东省教学改革项目《基于android的数据库移动学习交互平台的研究与实践》",
          man: "路璐",
          level: "省级",
        },
        {
          num: 3,
          time: 2015,
          name: "《高水平实验教学示范中心建设的探索与研究》",
          man: "谢光强",
          level: "校级",
        },
        {
          num: 4,
          time: 2014,
          name: "《挑战杯竞赛为平台培养大学生创新能力的探索和研究》",
          man: "谢光强",
          level: "校级",
        },
      ],
      columns2: [
        {
          title: "名称",
          key: "name",
        },
        {
          title: "时间",
          key: "time",
        },
      ],
      softwares: softwares,
      copyrights: copyrights,
      columns3: [
        {
          title: "类型",
          key: "type"
        },{
          title: "名称",
          key: "name"
        },{
          title: "持有人",
          key: "owner"
        },{
          title: "专利号",
          key: "id"
        }
      ],
      columns4: [
        {
          title: "名称",
          key: "name"
        },{
          title: "时间",
          key: "time",
        }
      ],
      papers: [
        {
          name: "“基于CDIO模式的数据库课程设计教学改革与实践”",
          time: "2015年5期"
        },
        {
          name: "“软件工程专业五位一体培养体系的探索与实践”",
          time: "2017年28期"
        },
      ]
    };
  },
};
</script>
<style lang="scss">
.reform-title {
  > p {
    font-weight: 600;
    font-size: 16px;
    color: #585858;
    line-height: 36px;
    height: 36px;
  }
  > div {
    margin-bottom: 24px;
    > p {
      font-size: 16px;
      margin: 8px 0;
      font-weight: 600;
      color: #868684;
    }
    > pre {
      font-size: 12px;
      color: #868684;
    }
    > img {
      width: 100%;
      background-color: #868684;
    }
    > div {
      width: calc(100% + 24px);
      // height: 240px;
      margin: 0 -12px;
      display: flex;
      > img {
        width: 50%;
        height: 100%;
        margin: 0 12px;
        background-color: #868684;
      }
    }
  }

  .guide_project {
    border: none;
    width: 100%;
    height: 500px;
  }
}
</style>
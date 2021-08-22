<template>
  <div>
    <div class="awards-li">
      <span>
        <router-link to="/TeacherGroup">教师团队</router-link>
      </span>
      <span>
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </span>
      <span>
        <router-link to="/Awards">教师竞赛获奖</router-link>
      </span>
      <span class="active">
        <router-link to="/StudentAwards">学生竞赛获奖</router-link>
      </span>
    </div>
    <div class="student-awards">
      <!-- <iframe
        src="http://qgailab.com/cloud/course/static/pdf/4.c74a1e8.pdf"
        width="100%"
        height="100%"
        style="border: none"
      ></iframe> -->
       <Table stripe :columns="column1" :data="awards">

       </Table>
    </div>
  </div>
</template>
<script>
const {awards} = require('../../../assets/data/awards');
export default {
  data() {
    return {
      htmlId: 1,
      column1: [
        {
          title: "比赛",
          key: 'competition'
        },
        {
          title: "项目",
          key: 'project'
        },
        {
          title: "时间",
          key: 'time'
        },{
          title: "级别",
          key: 'level'
        },{
          title: "奖项",
          key: "award"
        }
      ],
      awards: awards
    };
  },
  methods: {
    show(index) {
      this.htmlId = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.awards-li {
  width: 100%;
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
.teacher-awards {
  color: #868684;
  p {
    font-weight: 600;
    margin: 12px 0;
  }
  pre {
    padding: 0 24px;
  }
}
.student-awards {
    width: 100%;
  height: 800px;
  margin: 16px 0;
  overflow-y: auto;
  // background-color: #868684;
  img{
    width: 100%;
  }
}
</style>
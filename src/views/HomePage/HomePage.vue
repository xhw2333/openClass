<template>
  <div id="HomePage">
    <div class="first_wrap">
      <div>
        <div class="left_wrap">
          <div class="top_wrap">
            <h2>THE FOUNDATION OF<br />PROGRAMMING DESIGN</h2>

            <h2 class="main_title">广东省在线开放课程<br />程序设计基础</h2>
          </div>
          <div class="bottom_wrap">
            <div class="select_item" @click="startStudy">
              开始学习 <img src="../../assets/images/mingshifudao.png" alt="" />
            </div>
            <a
              class="select_item"
              href="http://qgailab.com/anywork/html/login.html"
              target="blank"
              >在线测试<img
                src="../../assets/images/xueqianzhenduan.png"
                alt=""
            /></a>
          </div>
        </div>
        <img
          class="home_pic"
          src="../../assets/images/support-team.png"
          alt=""
        />
      </div>
    </div>
    <div class="class_info">
      <h3>课程简介</h3>
      <div class="content">
        <p>
          程序设计基础是高等院校计算机专业及相关专业重要的专业基础课，其目的是培养学生程序设计理念、掌握程序设计的基础方法，为后续课程打下坚实基础。
        </p>
        <p>
          我们在多年讲授和使用编程的基础上，深切感受到学习程序设计不仅要掌握的语法要点和编程规范，更重要的是要领会结构化程序设计思想，综合运用知识开发大型程序，为此，我们在原有讲授的基础上，增加了“软件开发过程的内容”，希望通过程序设计，用一个较大规范的实例掌握运用软件工程的思想进行程序开发的一般过程。
        </p>
        <img src="../../assets/images/shizibaozhang.png" alt="" class="pic1" />
      </div>
    </div>
    <!-- <div class="union_school">
      <h3>联盟高校</h3>
      <div class="union_list">
        <img
          src="../../assets/images/mingxiaomingshi.png"
          alt=""
          class="pic2"
        />
        <div
          class="union_item"
          v-for="(item, index) in unionSchool"
          :key="index"
        >
          <img :src="item.pic" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div> -->
    <div class="teacher_teams">
      <h3>高校联盟</h3>
      <div class="teacher_list">
        <img src="../../assets/images/shizililiang.png" alt="" class="pic3" />
        <div
          class="teacher_item"
          v-for="(item, index) in teacherTeam"
          :key="index"
          @click="goToTeacher()"
        >
          <div class="wrap">
            <div class="img_wrap">
              <img class="teacher_pic" :src="item.avatar" alt="" />
              <img class="school_pic" :src="item.pic" alt="" />
            </div>
            <div class="man">
              <p>{{ item.name }}</p>
              <span v-show="index === 0">课程负责人</span>
            </div>
          </div>
          <div class="info">
            <p>{{ item.info }}</p>
            <p>{{ item.rank }}</p>
            <h4>主要研究领域：</h4>
            <h4>{{ item.main }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      //教师团队
      teacherTeam: [
        {
          name: "谢光强",
          avatar: require("../../assets/teacherstyle/head/xie.jpg"),
          pic: require("../../assets/teacherstyle/school/gdut.png"),
          info: "广东工业大学计算机学院副院长",
          rank: "博士，教授，硕士生导师",
          main: "人工智能、无人驾驶、数据挖掘",
        },
        {
          name: "万海",
          pic: require("../../assets/teacherstyle/school/zsdx.png"),
          avatar: require("../../assets/teacherstyle/head/wan.png"),
          info: "中山大学数据科学与计算机学院",
          rank: "博士，副教授，硕士生导师",
          main: "KR、ASP、SG、SAT、COP理论研究",
        },
        {
          name: "杨艳丽",
          pic: require("../../assets/teacherstyle/school/szdx.png"),
          avatar: require("../../assets/teacherstyle/head/yyl.png"),
          info: "深圳大学计算机与软件学院",
          rank: "博士，副教授，硕士生导师",
          main: "人工智能、智能控制",
        },
        {
          name: "吴涛",
          pic: require("../../assets/teacherstyle/school/lnsfdx.png"),
          avatar: require("../../assets/teacherstyle/head/wu.jpg"),
          info: "岭南师范学院",
          rank: "教学发展与质量测评中心主任，博士，教授",
          main: "人工智能、无人驾驶、数据挖掘",
        },
        {
          name: "徐龙琴",
          pic: require("../../assets/teacherstyle/school/zknxy.png"),
          avatar: require("../../assets/teacherstyle/head/xu.png"),
          info: "仲恺农业工程学院",
          rank: "硕士，教授，硕士生导师",
          main: "农业大数据、智能信息处理、数据挖掘、区块链",
        },
      ],
      unionSchool: [
        {
          name: "广东工业大学",
          pic: require("../../assets/teacherstyle/school/gdut.png"),
        },
        {
          name: "中山大学",
          pic: require("../../assets/teacherstyle/school/zsdx.png"),
        },
        {
          name: "深圳大学",
          pic: require("../../assets/teacherstyle/school/szdx.png"),
        },
        {
          name: "岭南师范学院",
          pic: require("../../assets/teacherstyle/school/lnsfdx.png"),
        },
        {
          name: "仲恺农业工程学院",
          pic: require("../../assets/teacherstyle/school/zknxy.png"),
        },
      ],
    };
  },
  methods: {
    startStudy() {
      this.$store.commit("changePage", 1);
      this.$router.push({
        path: "/ClassResources/ClassLearn",
      });
    },
    goToTeacher() {
      this.$store.commit("changePage", 2);
      this.$router.push({
        path: "/UniversityAlliance",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#HomePage {
  background: #faf9f9;

  & > div {
    text-align: center;
  }

  h3 {
    display: inline-block;
    padding: 12px 30px;
    margin-bottom: 30px;
    margin-top: 40px;
    font-size: 18px;
    color: #585858;
    border-bottom: 5px solid #7ad3d6;
  }

  .first_wrap {
    // padding: 50px 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 400px;

    > div {
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: 50%;
      padding: 50px 0;
      // max-width: 1300px;
      // min-width: 600px;
    }

    .left_wrap {
      // flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .top_wrap {
        margin-left: 20px;
        // flex: 2.5;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;

        h2 {
          text-align: left;
          font-size: 20px;
          &.main_title {
            font-size: 28px;
          }
        }
      }

      .bottom_wrap {
        margin-top: 10px;
        // flex: 1;
        display: flex;
        justify-content: space-between;

        .select_item {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ff7a50;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          border-radius: 8px;
          padding: 15px;
          box-sizing: border-box;
          white-space: nowrap;
          cursor: pointer;

          &:last-child {
            margin-left: 10px;
            background: #50eeff;
          }

          img {
            margin-left: 10px;
            width: 25px;
            height: 25px;
          }
        }
      }
    }

    .home_pic {
      // flex: 1.5;
      margin-left: 10px;
    }
  }

  .class_info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      position: relative;
      width: 70%;
      padding: 50px 80px;
      color: #3b888b;
      background: #e1f3f5;
      text-align: left;
      font-size: 16px;

      p {
        text-indent: 32px;
        z-index: 1;
      }

      .pic1 {
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
        height: 250px;
        z-index: 0;
        transform: translate(30%, -25%);
      }
    }
  }

  /*   .union_school {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    .union_list {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1000px;
      flex-wrap: wrap;

      .pic2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 300px;
        transform: translate(-50%, -40%);
        z-index: 0;
      }

      .union_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
        border-radius: 3px;
        padding: 7px;
        z-index: 1;
        margin: 7px 3px;

        img {
          width: 44px;
          height: 44px;
          background: #868684;
        }

        p {
          margin-left: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          width: 120px;
          height: 50px;
          overflow: auto;
          &::-webkit-scrollbar {
            width: 0;
          }
        }

        // &:last-child {
        //   color: #3b888b;
        //   background: #e1f3f5;
        //   font-weight: bold;
        //   width: 189px;
        //   height: 64px;
        //   justify-content: center;
        //   box-shadow: none;
        //   cursor: pointer;
        // }
      }
    }
  } */

  .teacher_teams {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    padding-bottom: 150px;
    flex-wrap: wrap;

    .teacher_list {
      position: relative;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      align-items: stretch; //子元素撑开父元素
      // width: 1000px;
      flex-wrap: wrap;
      width: 70%;

      .pic3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 250px;
        z-index: 0;
        transform: translate(-30%, -50%);
      }

      .teacher_item {
        // display: flex;
        // justify-content: space-between;
        // align-items: flex-end;
        // flex-wrap: wrap;
        // text-align: left;
        display: block;
        flex: 1;
        padding: 15px 10px;
        margin: 7px 5px;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #eee;
        z-index: 1;
        color: #000;
        cursor: pointer;

        &::-webkit-scrollbar {
          width: 0;
        }

        .wrap {
          display: flex;
          // justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          text-align: left;

          .img_wrap {
            position: relative;

            .teacher_pic {
              height: 140px;
              width: 100px;
              vertical-align: middle;
              border-radius: 5px 5px 0 5px;
            }

            .school_pic {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 30px;
              height: 30px;
              border-radius: 5px 0 0 0;
            }
          }

          .man {
            margin-left: 5px;
            margin-bottom: 5px;
            p {
              margin-bottom: 5px;
              font-size: 16px;
              font-weight: 600;
            }
          }
        }

        .info {
          margin-top: 10px;
          text-align: left;
          // text-indent: 2em;

          p {
            // text-indent: 2em;
            margin-top: 5px;
          }

          h4 {
            margin-top: 10px;

            &:nth-last-child(1) {
              margin-top: 5px;
              text-indent: 2em;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  #HomePage {
    .first_wrap {
      > div {
        width: 100%;
      }
      .home_pic {
        // width: 200px;
        // height: 200px;
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>
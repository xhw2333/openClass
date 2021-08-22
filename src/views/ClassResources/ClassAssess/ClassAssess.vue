<template>
  <div id="ClassAssess">
    <Tabs value="name1" class="title_wrap">
      <TabPane label="课程评价" name="name1">
        <ul class="class_assess">
          <li v-for="(student, index) in studentAssess" :key="index">
            <img @click="showPic(student.pic)" class="assess_pic" :src="student.pic" />
            <p class="student_assess">学生{{ student.name }}评价</p>
          </li>
        </ul>
      </TabPane>
      <TabPane label="反馈与实践调查" name="name2">
        <ul class="experiment_check">
          <li v-for="(student, index) in studentTable" :key="index">
            <img @click="showPic(student.pic)" :src="student.pic" class="check_pic" />
            <p class="student_feedback">学生{{ student.name }}反馈表</p>
          </li>
        </ul>
      </TabPane>
    </Tabs>
    <!-- 展示图片的面板 -->
    <div @click="PicModal = false" class="big_panel" v-show="PicModal">
      <div><Icon @click="PicModal = false" class="icon" color="#165D60" size="38" type="md-backspace" /></div>
      <img :src="thePic" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //学生评价
      studentAssess: [
        {
          pic: "http://qgailab.com/cloud/course/static/img/1.26e7e63.jpg",
          name: "陈俊丰",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/2.566ea9f.jpg",
          name: "李国延",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/3.fb54750.jpg",
          name: "梁永康",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/4.99b0e4b.jpg",
          name: "叶志活",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/5.ea9375e.jpg",
          name: "张润鹏",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/6.c823b34.jpg",
          name: "张艺隽",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/7.c1008c1.jpg",
          name: "章世楠",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/8.00c3023.jpg",
          name: "郑俊铭",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/9.aebbb50.jpg",
          name: "郑伟滨",
        },
      ],
      //学生反馈表
      studentTable: [
        {
          pic: "http://qgailab.com/cloud/course/static/img/1.f671ea7.png",
          name: "郑俊铭",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/2.9dbb0e8.png",
          name: "张艺隽",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/3.2a39c47.png",
          name: "张润鹏",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/4.207bda2.png",
          name: "章世楠",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/5.912129d.png",
          name: "梁永康",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/6.e2dba6c.png",
          name: "陈俊丰",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/7.668fd7a.png",
          name: "叶志活",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/8.71bfa98.png",
          name: "周欣晖",
        },
        {
          pic: "http://qgailab.com/cloud/course/static/img/9.41b41e6.png",
          name: "郑伟滨",
        },
      ],
      thePic: "",
      PicModal: false,
    };
  },
  methods:{
    //展示图片
    showPic(pic){
      this.PicModal = true;
      this.thePic = pic;
    }
  }
};
</script>

<style lang="scss">
@import "./ClassAssess.scss";
#ClassAssess {
  .class_assess {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li {
      margin: 10px 1px;
      width: 30%;
      // height: 100px;
      border: 1px solid #868684;
      box-sizing: border-box;

      .assess_pic {
        width: 100%;
        height: 230px;
        background: #868684;
        cursor: pointer;
      }

      .student_assess {
        text-align: center;
        background: #f8f8f8;
        padding: 5px 0;
      }
    }
  }

  .experiment_check {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    li {
      margin: 10px 1px;
      width: 30%;
      // height: 100px;
      border: 1px solid #868684;
      box-sizing: border-box;

      .check_pic {
        width: 100%;
        height: 230px;
        background: #868684;
        cursor: pointer;
      }

      .student_feedback {
        text-align: center;
        background: #f8f8f8;
        padding: 5px 0;
      }
    }
  }

  .big_panel {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1000;


    img {
      width: 70%;
      height: 80%;
      background: #ccc;
    }

    >div {
      width: 70%;
      display: flex;
      justify-content: flex-end;

      .icon {
        margin-right: -25px;
        cursor: pointer;
      }
    }
  }
}
</style>
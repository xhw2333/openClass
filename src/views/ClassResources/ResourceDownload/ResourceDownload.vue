<template>
  <div id="ResourceDownload">
    <Tabs value="name1" class="title_wrap">
      <TabPane label="课程配套" name="name1">
        <div class="class_complement">
          <h3>配套资源</h3>
          <ul class="resource_content">
            <li v-for="item in resources" :key="item.index">
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
          <h3>实验计划</h3>
          <ul class="plan_content">
            <li v-for="item in testPlan" :key="item.index">
              <div>
                <a :href="item.exercise">题目 {{ item.name }}</a>
              </div>
              <div>
                <a :href="item.answer">答案 {{ item.name }}</a>
              </div>
            </li>
            <!-- <li>
              <div>题目 实验二</div>
              <div>答案 实验二</div>
            </li>
            <li>
              <div>题目 实验三</div>
              <div>答案 实验三</div>
            </li>
            <li>
              <div>题目 实验四</div>
              <div>答案 实验四</div>
            </li>
            <li>
              <div>题目 实验五</div>
              <div>答案 实验五</div>
            </li>
            <li>
              <div>题目 实验汇总</div>
              <div>答案 实验汇总</div>
            </li> -->
          </ul>
        </div>
      </TabPane>
      <TabPane label="实验指导书" name="name2">
        <div class="experiment_book">
          <iframe
            src="http://qgailab.com/cloud/course/static/pdf/1.8255401.pdf"
            width="100%"
            height="100%"
            style="border:none"
          ></iframe>
        </div>
      </TabPane>
      <TabPane label="课程设计" name="name3">
        <div class="class_design">
          <iframe
            src="http://qgailab.com/cloud/course/static/pdf/2.f849866.pdf"
            width="100%"
            height="100%"
            style="border:none"
          ></iframe>
          <!-- <img v-for="item in imgSrc" :src='item' alt=""> -->
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "ResourceDownload",
  data() {
    return {
      //配套资源的下载包地址
      resources: [
        {
          name: "教材下载",
          link: "http://qgailab.com/cloud/course/resources/teacher.zip",
        },
        {
          name: "软件包下载",
          link: "http://qgailab.com/cloud/course/resources/source.zip",
        },
        {
          name: "anyviewC下载",
          link: "http://qgailab.com/cloud/course/resources/AnyviewC.rar",
        },
        {
          name: "anyworkApp安装包下载",
          link: "http://qgailab.com/cloud/course/resources/AnyWork.apk",
        },
        {
          name: "TC下载",
          link: "http://qgailab.com/cloud/course/resources/tc.rar",
        },
      ],
      //包含实验计划题目和答案地址的数组
      testPlan: [
        {
          name: "实验一",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/1.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/1.docx",
        },
        {
          name: "实验二",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/2.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/2.docx",
        },
        {
          name: "实验三",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/3.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/3.docx",
        },
        {
          name: "实验四",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/4.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/4.docx",
        },
        {
          name: "实验五",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/5.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/5.docx",
        },
        {
          name: "实验汇总",
          answer:
            "http://qgailab.com/cloud/course/resources//practical/answer/all.docx",
          exercise:
            "http://qgailab.com/cloud/course/resources//practical/report/all.docx",
        },
      ],
      imgSrc: [
        require('../../../assets/pdf/classDesign/1.jpg'),
        require('../../../assets/pdf/classDesign/2.jpg'),
        require('../../../assets/pdf/classDesign/3.jpg'),
        require('../../../assets/pdf/classDesign/4.jpg'),
        require('../../../assets/pdf/classDesign/5.jpg'),
        require('../../../assets/pdf/classDesign/6.jpg'),
        require('../../../assets/pdf/classDesign/7.jpg'),
        require('../../../assets/pdf/classDesign/8.jpg'),
        require('../../../assets/pdf/classDesign/9.jpg'),
      ]
    };
  },
};
</script>

<style lang="scss">
@import "./ResourceDownload.scss";
#ResourceDownload {
  margin-bottom: 50px;
  .class_complement {
    h3 {
      color: #868684;
    }
    .resource_content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        flex: 1;
        margin: 5px;
        text-align: center;

        a {
          width: 100%;
          display: inline-block;
          color: #fff;
          padding: 15px 0;
          background: #509fa2;

          &:hover,
          &.downloaded {
            background: #165d60;
          }
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .plan_content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > li {
        width: 19%;
        margin: 5px 0;
        color: #fff;
        text-align: center;

        box-sizing: border-box;

        div {
          width: 100%;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 15px 0;
            color: #fff;
            background: #509fa2;

            &:hover,
            &.downloaded {
              background: #165d60;
            }
          }
        }

        // &:first-child,
        // &:last-child {
        //   margin-left: 0;
        // }

        // &:nth-last-child(2) {
        //   margin-right: 0;
        // }
      }
    }
  }

  .experiment_book {
    height: 800px;
  }
  .class_design {
    height: 800px;
    img{
      width: 100%;
    }
  }
}
</style>
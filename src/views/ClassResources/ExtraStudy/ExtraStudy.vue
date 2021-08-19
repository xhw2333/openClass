<template>
  <div id="ExtraStudy">
    <ul class="title_wrap">
      <li>经典案例</li>
    </ul>
    <ul class="classic_cases">
      <li v-for="item in classicCase" :key="item.index">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
    <ul class="title_wrap">
      <li>专题讲座</li>
    </ul>
    <div class="special_lecture_wrap">
      <ul class="special_lecture">
        <li v-for="(item1, index1) in specialLecture.slice(0, 6)" :key="index1">
          <div @click="ifShowPanel($event, index1)">
            {{ item1.name }} <span class="arrow">>></span>
          </div>
          <ul class="special_children" v-show="item1.show">
            <li v-for="item2 in item1.children" :key="item2.index">
              <a target="blank" :href="item2.link">{{ item2.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="special_lecture">
        <li v-for="(item1, index1) in specialLecture.slice(-6)" :key="index1">
          <div @click="ifShowPanel($event, index1 + 6)">
            {{ item1.name }} <span class="arrow">>></span>
          </div>
          <ul class="special_children" v-show="item1.show">
            <li v-for="item2 in item1.children" :key="item2.index">
              <a target="blank" :href="item2.link">{{ item2.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExtraStudy",
  data() {
    return {
      //经典案例题目
      classicCase: [
        {
          name: "第二章 数据类型、运算符与表达式、简单程序设计",
          link: "http://qgailab.com/course/resources/feature/chapter2.docx",
        },
        {
          name: "第三章 顺序程序设计",
          link: "http://qgailab.com/course/resources/feature/chapter3.docx",
        },
        {
          name: "第四章 选择结构程序设计",
          link: "http://qgailab.com/course/resources/feature/chapter4.docx",
        },
        {
          name: "第五章 循环控制",
          link: "http://qgailab.com/course/resources/feature/chapter5.docx",
        },
        {
          name: "第六章 数组",
          link: "http://qgailab.com/course/resources/feature/chapter6.docx",
        },
        {
          name: "第七章 函数",
          link: "http://qgailab.com/course/resources/feature/chapter7.docx",
        },
        {
          name: "第九章 指针",
          link: "http://qgailab.com/course/resources/feature/chapter9.docx",
        },
        {
          name: "第十章 结构体与共用体",
          link: "http://qgailab.com/course/resources/feature/chapter10.docx",
        },
      ],
      //专题讲座系列
      specialLecture: [
        {
          name: "专题一",
          show: false,
          children: [
            {
              name: "编译原理讲解",
              link:
                "http://www.cnblogs.com/sapvip/archive/2008/06/19/1225109.html",
            },
          ],
        },
        {
          name: "专题二",
          show: false,
          children: [
            {
              name: "操作系统讲解",
              link: "http://blog.csdn.net/sunayxin/article/details/74089989",
            },
          ],
        },
        {
          name: "专题三",
          show: false,
          children: [
            {
              name: "TCP/IP协议",
              link: "http://www.bilibili.com/video/av10610680/",
            },
          ],
        },
        {
          name: "专题四",
          show: false,
          children: [
            {
              name: "C语言循环控制语句",
              link: "http://www.jianshu.com/p/8bf773e80c9d",
            },
          ],
        },
        {
          name: "专题五",
          show: false,
          children: [
            {
              name: "C语言基础课程",
              link: "http://www.imooc.com/learn/249",
            },
          ],
        },
        {
          name: "专题六",
          show: false,
          children: [
            {
              name: "C语言文件读取与保存",
              link:
                "http://www.cnblogs.com/likebeta/archive/2012/06/16/2551780.html",
            },
          ],
        },
        {
          name: "专题七",
          show: false,
          children: [
            {
              name: "C语言数组讲解（一）",
              link: "http://www.jianshu.com/p/f54547d24221",
            },
            {
              name: "C语言数组讲解（二）",
              link: "http://www.jianshu.com/p/43b01bba91f5",
            },
          ],
        },
        {
          name: "专题八",
          show: false,
          children: [
            {
              name: "C语言预处理详解",
              link: "http://www.cnblogs.com/clover-toeic/p/3851102.html",
            },
          ],
        },
        {
          name: "专题九",
          show: false,
          children: [
            {
              name: "C语言指针详解",
              link: "http://blog.csdn.net/soonfly/article/details/51131141",
            },
          ],
        },
        {
          name: "专题十",
          show: false,
          children: [
            {
              name: "C结构体详解",
              link: "http://blog.csdn.net/huqinweI987/article/details/23625823",
            },
          ],
        },
        {
          name: "专题十一",
          show: false,
          children: [
            {
              name: "数据结构课程（一）",
              link: "http://www.imooc.com/learn/611",
            },
            {
              name: "数据结构课程（二）",
              link: "http://www.imooc.com/learn/519",
            },
            {
              name: "数据结构课程（三）",
              link: "http://www.imooc.com/learn/673",
            },
          ],
        },
        {
          name: "专题十二",
          show: false,
          children: [
            {
              name: "计算机网络课程",
              link: "http://www.iqiyi.com/w_19ru2v9ohd.html",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //是否展示小面板
    ifShowPanel(e, index) {
      let { show } = this.specialLecture[index];
      this.specialLecture[index].show = !show;
      //获取class为arrow的元素
      let arrow = e.currentTarget.querySelector(".arrow");
      //展开时
      if (!show) {
        arrow.style.transform = `rotate(90deg)`;
      } else {
        arrow.style.transform = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#ExtraStudy {
  .title_wrap {
    display: flex;
    align-items: center;
    height: 40px;
    li {
      font-weight: 600;
      font-size: 18px;
      color: #585858;
    }
  }

  .classic_cases {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;

    li {
      width: 24%;
      margin: 10px 1px;
      height: 60px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #509fa2;
        color: #fff;
        border-radius: 5px;
        text-align: center;

        .download,
        &:hover,
        &:visited {
          background: #165d60;
        }
      }
    }
  }

  .special_lecture_wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    .special_lecture {
      flex: 1;

      &:first-child {
        margin-right: 10px;
      }

      > li {
        // padding: 5px 0 5px 10px;
        // color: #868684;
        // background: #e1f3f5;
        margin-bottom: 10px;

        div {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          padding: 5px 10px;
          color: #868684;
          background: #e1f3f5;
          cursor: pointer;

          span {
            transition: all .5s;
            // transform: rotate(90deg);
          }
        }

        .special_children {
         
          > li {
            width: 100%;

            a {
              display: inline-block;
              width: 100%;
              padding: 3px 15px;
              color: #165d60;
              transition: all .2s;

              &:hover {
                background: #165d60;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
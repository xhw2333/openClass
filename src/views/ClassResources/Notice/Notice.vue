<template>
  <div id="Notice">
    <ul class="title_wrap">
      <li>近期公告</li>
    </ul>
    <div class="main_container">
      <ul class="notice">
        <li>
          <h3 class="title">前言</h3>
          <p>同学们好:</p>
          <p class="content">
            C语言是一门面向过程的、抽象化的通用程序设计语言，广泛应用于底层开发。C语言能以简易的方式编译、处理低级存储器。C语言是仅产生少量的机器语言以及不需要任何运行环境支持便能运行的高效率程序设计语言。
          </p>
          <p class="content">
            C语言是实践性很强的课程，你一定亲自动手敲代码，做练习，好好熟悉基本操作。通过这门课的学习，你能掌握用C语言写程序的基本手段，对编程有更进一步的了解。
          </p>
           <p class="content">
            讨论区是就是一个我们学习交流的平台。在这里，我们可以和各种各样的人交流讨论，共同分享学习收获到的知识。遇到不到的问题、疑惑，在讨论区提出来，请教一下别人；看到讨论区有你懂的问题，积极帮助别人解答，互帮互助，共同进步，一起走向更远的编程之路。
          </p>
          <!-- <p class="time">2021/02/01 14:00</p> -->
        </li>
        <li>
          <h3 class="title">通知</h3>
          <p class="content">
            课程学习在学习后需隔一段时间，才能获取到最新的进度，不要因为自己的进度还没更新而感到疑惑哈
          </p>
          <!-- <p class="time">2021/02/01 14:00</p> -->
        </li>
      </ul>
      <div class="calendar"><Calendar /></div>
    </div>
  </div>
</template>

<script>
import Calendar from "../../../components/ClassResource/Calendar/Calendar";
export default {
  name: "Notice",
  components: {
    Calendar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#Notice {
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

  .main_container {
    display: flex;
    // align-items: center;
    justify-content: space-between;

    .notice {
      flex: 2;

      li {
        padding: 10px 5px;
        border-bottom: 1px solid #dcdddb;
        font-size: 16px;

        .content {
          margin-bottom: 8px;
          text-indent: 30px;
        }

        .time {
          text-align: right;
        }
      }
    }

    .calendar {
      flex: 1;
      margin: 0 20px;
    }
  }

  @media screen and (max-width: 800px){
    .main_container {
      flex-direction: column-reverse;
    }
  }
}
</style>
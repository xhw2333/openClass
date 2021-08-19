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
            这是程序设计入门的第一个单元，通过这一个单元的学习，你应该能掌握用C语言写程序的基本手段，学会如何用变量来做计算。
          </p>
          <p class="content">
            C语言是实践性很强的课程，作业都需要自己写程序，在自己的电脑上运行成功后，提交到中国大学MOOC来检查，所以这一周建立好自己的编程软件非常重要。我们为大家提供了在线C语言开发环境，具体怎么使用，赶紧进课程来看一下吧！
          </p>
          <!-- <p class="time">2021/02/01 14:00</p> -->
        </li>
        <li>
          <h3 class="title">简介</h3>
          <p class="content">
            编程是这样一种脑力劳动：你读懂了题目知道要做的目标，你学了语言知道有哪些可以用的手段，但是如何运用这些手段来解决这个问题，需要的是你的智慧。在去讨论区寻找答案之前，不妨自己多试试。编程是学会的，更是练会的。从失败中总结，从经验中总结，这样学来的知识才更巩固。
          </p>
          <!-- <p class="time">2021/02/01 14:00</p> -->
        </li>
        <li>
          <!-- <h3 class="title">简介</h3> -->
          <p class="content">
            当然，讨论区是我们有力的学习工具。如果在线下的学习中，你会习惯与同学、老师讨论问题，那么，讨论区就是你和大家讨论的地方；如果你原本就不习惯和别人讨论自己的学习，那么，你可以试试善用我们的讨论区。比如，先悄悄地潜水，默默地浏览所有的帖子，偷偷地在屏幕前面点头、微笑或是摇头；然后，觉得自己准备好了，就可以大胆地提问、回答或是评论。
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
        padding: 20px 5px;
        border-bottom: 1px solid #dcdddb;
        font-size: 16px;

        .content {
          text-indent: 30px;
        }

        .time {
          text-align: right;
        }
      }
    }

    .calendar {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
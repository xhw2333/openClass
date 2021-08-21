<template>
  <div class="Problem">
    <div class="problem_index">({{ p_index + 1 }}) 单选题</div>
    <div class="content_wrap">
      <div class="title">{{ problem.title }}</div>
      <ul class="select_wrap">
        <li
          @click="selectItem(index)"
          :class="['item', { selected: index === selected }]"
          v-for="(prob, index) in problem.select"
          :key="index"
        >
          <span class="numb">{{ prob.numb }}</span>
          <span class="content">{{ prob.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'problem', //题目
    'p_index', //题目序号
    'status', //控制状态
    ],
  data() {
    return {
      selected: -1, //选中的选项
      //题目
      // problem: {
      //   title: "一个C程序的执行是从_____。",
      //   select: [
      //     {
      //       numb: "A",
      //       content: "本程序的main函数开始,到main函数结束",
      //     },
      //     {
      //       numb: "B",
      //       content:
      //         "本程序文件的第一个函数开始,到本程序文件的最后一个函数结束",
      //     },
      //     {
      //       numb: "C",
      //       content: "本程序的main函数开始,到本程序文件的最后一个函数结束",
      //     },
      //     {
      //       numb: "D",
      //       content: "本程序文件的第一个函数开始,到本程序main函数结束",
      //     },
      //   ],
      // },
    };
  },
  methods: {
    //选择选项
    selectItem(index) {
      if(this.status) return;
      this.selected = index;
      this.problem.user_ans = this.getNumbByIndex(index);
      this.$emit("pass",this.problem);
    },

    // 根据索引返回选项
    getNumbByIndex(index){
      switch(index){
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'D';
      }
    }
  },
  watch:{
    problem(val){
      this.selected = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
.Problem {
  padding: 0 3px;
  margin-bottom: 20px;

  .problem_index {
    padding: 3px 30px;
    background: #f2f2f2;
    color: #262626;
  }

  .content_wrap {
    padding: 10px;
    padding-left: 50px;
    color: #595959;

    .title {
      margin-bottom: 5px;
    }

    .select_wrap {
      margin-left: 10px;
      li {
        padding: 3px 0;
        cursor: pointer;

        .numb {
          font-size: 14px;
          color: #1890ff;
          border: 1px solid #1890ff;
          border-radius: 50%;
          padding: 2px 5px;
        }

        &.selected {
          .numb {
            background: #1890ff;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
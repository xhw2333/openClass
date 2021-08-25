<template>
  <div class="Problem">
    <div class="problem_index">({{ p_index + 1 }}) 单选题</div>
    <div class="content_wrap">
      <div class="title">{{ problem.title }}</div>
      <Input @on-change="fillItem" v-model="value" :disabled="status" class="fill" placeholder="" style="margin-top: 10px;width: 30%;min-width:100px;" />
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
      // status: false,
      // //题目
      // problem: {
      //   title: "break语句只能出现在___语句中",
      //   correct_ans: '',
      //   user_ans: '',
      // },
      value: '',
    };
  },
  methods: {
    //填空
    fillItem() {
      // if(this.status) return;
      this.problem.user_ans = this.value;
      // this.$emit("pass",this.problem);
    },

  },
  watch:{
    problem(val){
      // this.selected = -1;
      this.value = val.user_ans;
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
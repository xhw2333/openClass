<template>
  <div id="calendar">
    <!-- 年份 月份 -->
    <div class="month_wrap">
      <ul class="month">
        <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
        <li class="arrow" @click="pickPre(currentYear, currentMonth)">❮</li>
        <li class="year-month" @click="pickYear(currentYear, currentMonth)">
          <span class="choose-year">{{ currentYear }}年</span>
          <span class="choose-month">{{ currentMonth }}月</span>
          <!-- <span class="choose-day">{{ currentDay }}日</span> -->
        </li>
        <li class="arrow" @click="pickNext(currentYear, currentMonth)">❯</li>
      </ul>
    </div>

    <!-- 星期 -->
    <ul class="weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ul>
    <!-- 日期 -->
    <ul class="days">
      <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
      <li v-for="(item, index) in days" :key="index">
        <!--本月-->
        <!--如果不是本月  改变类名加灰色-->

        <span
          v-if="item.day.getMonth() + 1 != currentMonth"
          class="other-month"
          >{{ item.day.getDate() }}</span
        >

        <!--如果是本月  还需要判断是不是这一天-->
        <span v-else @click="chooseDate($event)">
          <!--今天  同年同月同日-->
          <span
            v-if="
              item.day.getFullYear() == new Date().getFullYear() &&
              item.day.getMonth() == new Date().getMonth() &&
              item.day.getDate() == new Date().getDate()
            "
            class="active"
            >{{ item.day.getDate() }}</span
          >
          <span v-else-if="ifSelected(item.day.getFullYear(),item.day.getMonth()+1,item.day.getDate())" class="selected">{{item.day.getDate()}}</span>
          <span v-else>{{ item.day.getDate() }}</span>
        </span>
      </li>
    </ul>

    <!-- 事件 -->
    <div class="events_wrap">
        <div class="events">
            暂无事件
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 2021,
      currentWeek: 1,
      days: [],
      //选中的日期
      selectedDate:{
          day: '',
          month: '',
          year: ''
      }
    };
  },
  created: function () {
    //在vue初始化时调用
    this.initData(null);
  },
  methods: {
      //初始化日期
    initData: function (cur) {
      var leftcount = 0; //存放剩余数量
      var date;

      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date();
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        d.setDate(35);
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      }
    //   console.log(date);
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;

      this.currentWeek = date.getDay(); // 1...6,0
      if (this.currentWeek == 0) {
        this.currentWeek = 7;
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个
      //初始化本周
      for (var i = this.currentWeek - 1; i >= 0; i--) {
        var d = new Date(str);
        d.setDate(d.getDate() - i);
        var dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
      }
      //其他周
      for (let i = 1; i <= 35 - this.currentWeek; i++) {
        var d = new Date(str);
        d.setDate(d.getDate() + i);
        var dayobject = {};
        dayobject.day = d;
        this.days.push(dayobject);
      }
    },
    //选择前一个月
    pickPre: function (year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    //选择后一个
    pickNext: function (year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickYear: function (year, month) {
      //   alert(year + "," + month);
    },
    //点击日期
    chooseDate(e){
        // console.log(e.target);
        let allSelected = document.getElementsByClassName('selected');
        //清除选中状态
        if(allSelected){
            for(let i = 0; i < allSelected.length; i++){
                allSelected[i].classList.remove('selected')
            }
        }
        // 添加选中态样式
        e.target.classList.add('selected');
        this.selectedDate.year = this.currentYear;
        this.selectedDate.month = this.currentMonth;
        this.selectedDate.day = e.target.innerHTML;
        // console.log(this.selectedDate);
    },

    ifSelected(year,month,day){
        // console.log(year,month,day);
        if(year == this.selectedDate.year && month == this.selectedDate.month && day == this.selectedDate.day)
            return true;
        else 
            return false;
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function (year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar {
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  .month_wrap {
    width: 100%;
    padding: 15px 5px 0;

    .month {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      width: 100%;
      color: #7d7d7d;
      border-bottom: 1px solid rgba(175, 175, 175, 0.3);

      li {
        // font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 3px;

        &.year-month {
          display: flex;
          align-items: center;
          justify-content: space-around;
          // margin-top: 10px;

          span {
            font-weight: 600;
            color: #7d7d7d;
          }
        }

        &.choose-month {
          text-align: center;
          //   font-size: 12px;
        }

        &.arrow {
          padding: 15px;
          color: #999999;
          cursor: pointer;
        }
      }
    }
  }

  .weekdays {
    padding: 5px 10px;
    display: flex;
    flex-wrap: wrap;
    color: #7d7d7d;
    justify-content: space-around;
    li {
      display: inline-block;
      width: 13.6%;
      text-align: center;
    }
  }

  .days {
    padding: 10px;
    background: #ffffff;
    display: flex;
    flex-wrap: wrap;

    li {
      display: inline-block;
      width: 14.2%;
      text-align: center;
      padding-bottom: 4px;
      padding-top: 10px;
      //   font-size: 12px;
      color: #7d7d7d;

      .active {
        // padding: 6px;
        // border-radius: 50%;
        // background: #3B888B;
        border: 1px solid #3b888b;
        // color: #fff;
      }

      .hasthing {
        background: rgba(140, 223, 226, 0.5);
      }

      .selected {
        background: #3b888b;
        color: #fff;
      }

      .other-month {
        color: #afafaf;
      }
      &:hover > span > span {
        background: #3b888b;
        color: #fff;
      }

      span {
        display: inline-block;
        text-align: center;
        line-height: 26px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        cursor: pointer;
        box-sizing: border-box;
      }
    }
  }

  .events_wrap {
      
      padding: 10px 20px 20px;

      .events {
          padding: 10px;
          width: 100%;
          height: 80px;
          overflow: auto;
          background: #E1F3F5;
          &::-webkit-scrollbar {
            width: 0;
          }
      }
  }
}
</style>
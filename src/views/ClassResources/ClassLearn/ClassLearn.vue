<template>
  <div id="ClassLearn">
    <div class="main_content">
      <div class="title_wrap">
        <div class="title">
          <h2 class="main_title">{{ mainTitle }}</h2>
          <h4 class="subtitle">{{ subtitle }}</h4>
        </div>
        <!-- <p>学习任务：{{ work }}</p> -->
      </div>
      <Tabs value="name1" class="study_wrap">
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', card[0].name),
                h('i', {
                  class: {
                    circle: !card[0].finsihed,
                  },
                }),
              ]);
            }
          "
          name="name1"
        >
          <p>请点击下方的链接进入预习，一定要好好预习哦！</p>
          <a href="http://qgailab.com/anywork/student/" target="blank"
            >anywork</a
          >
        </TabPane>
        <TabPane
          label="章节说明"
          name="name2"
        >
          章节说明
        </TabPane>
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', card[1].name),
                h('i', {
                  class: {
                    circle: !card[1].finsihed,
                  },
                }),
              ]);
            }
          "
          name="name3"
        >
          <div class="video_area">
            <video
              controls="controls"
              :src="videoSrc"
              controlslist="nodownload"
              class="video"
              @play="playVideo($event)"
              @pause="stopVideo($event)"
              @loadedmetadata="prePlay($event)"
            ></video>
          </div>
        </TabPane>
        <TabPane label="课件预览" name="name4">
          <iframe :src="filesrc" frameborder="0" class="class_file"></iframe>
        </TabPane>
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', card[2].name),
                h('i', {
                  class: {
                    circle: !card[2].finsihed,
                  },
                }),
              ]);
            }
          "
          name="name5"
        >
          <p>
            请自行打开anyview去进行小测，学习完每章的一小节后就可以去测试了，检验自己的学习成果，根据测试结果再调整自己的学习情况
          </p>
        </TabPane>
        <TabPane label="课堂讨论" name="name6"> 课堂讨论 </TabPane>
      </Tabs>
      <!-- 
      <div class="video_area">
        <video
          controls="controls"
          :src="videoSrc"
          controlslist="nodownload"
          class="video"
          @play="playVideo($event)"
          @pause="stopVideo($event)"
          @loadedmetadata="prePlay($event)"
        ></video>
      </div> -->
      <!-- <a
        target="blank"
        href="http://qgailab.com/anywork/html/login.html"
        class="online_test"
        >在线测试</a
      > -->
    </div>
    <ul class="class_list">
      <li v-for="(item1, index1) in classesList" :key="index1">
        <div
          @click="showDetail(index1)"
          class="class_title"
          :class="item1.rate == 100 ? 'class_done' : ''"
        >
          <span> {{ item1.title }}</span>
          <i
            :style="{
              transition: 'all 0.3s',
              transform: item1.show ? 'rotate(90deg)' : 'rotate(-90deg)',
            }"
            >></i
          >
          <!-- <i>{{ item1.rate }}%</i> -->
        </div>
        <ul class="class_detail" v-show="item1.show">
          <li
            :class="[
              { class_selected: subtitle === item1.detail[index2].title },
              { class_finished: item2.ifFinished },
            ]"
            @click="showVideo(index1, index2)"
            v-for="(item2, index2) in item1.detail"
            :key="index2"
          >
            <span class="charpter">{{
              `${index1 + 1}.${index2 + 1 + " " + item2.title}`
            }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              class="icon circle0"
              v-if="item2.ifFinished"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="矩形_265"
                    data-name="矩形 265"
                    class="cls-1"
                    width="14"
                    height="14"
                    transform="translate(1713 225)"
                  />
                </clipPath>
              </defs>
              <g
                id="蒙版组_10"
                data-name="蒙版组 10"
                class="cls-2"
                transform="translate(-1713 -225)"
              >
                <g id="check-circle" transform="translate(1712.459 224.533)">
                  <path
                    id="路径_5"
                    data-name="路径 5"
                    class="cls-3"
                    d="M13.74,6.92v.575a6.245,6.245,0,1,1-3.7-5.708"
                  />
                  <path
                    id="路径_6"
                    data-name="路径 6"
                    class="cls-3"
                    d="M13.74,2.5,7.495,8.75,5.621,6.876"
                  />
                </g>
              </g>
            </svg>
            <strong class="circle0" v-else></strong>
          </li>
        </ul>
      </li>
      <!-- <li>
        <div class="class_title class_done">
          <span> 一、C语言概述</span>
          <i>100%</i>
        </div>
        <ul class="class_detail">
          <li class="class_selected">
            <strong class="class_finished"></strong>
            <span>C语言概述</span>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { videoData } from "./videoSrc_new";
export default {
  data() {
    return {
      //章节的所有数据
      classesList: videoData,
      //视屏播放地址
      videoSrc: "http://qgailab.com/course/resources/video/1.5_1.mp4",
      //学习任务
      work: "理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。",
      //主标题
      mainTitle: "一、算法",
      //副标题
      subtitle: "算法",
      //进度id
      rateId: -1,
      //视频进度
      videoRate: 0,
      //视频章节
      videoChapterIndex: 0,
      //视频小章节
      videoSChapterIndex: 0,
      //课件地址
      filesrc: "http://qgailab.com/course/static/pdf/1.1_1.pdf",
      //控制时间函数
      timer: null,
      // 选项
      card: [
        {
          name: "课前预习",
          finsihed: false,
        },
        {
          name: "视频学习",
          finsihed: false,
        },
        {
          name: "课后测试",
          finsihed: false,
        },
      ],
    };
  },
  created() {
    this.getVideoStatus();
  },
  methods: {
    //展示收起详细内容
    showDetail(index) {
      let { title, work, detail, show, file } = this.classesList[index];
      this.classesList[index].show = !this.classesList[index].show;
      this.filesrc = file;
      console.log(file);

      //展开详细内容时更新
      if (!show) {
        this.videoSrc = detail[0].video;
        this.subtitle = detail[0].title;
        this.mainTitle = title;
        this.work = work;
        this.rateId = detail[0].id;
        this.videoRate = detail[0].rate;
        this.videoChapterIndex = index;
      }
    },

    //展示视频
    showVideo(index1, index2) {
      let { title, work, detail } = this.classesList[index1];
      this.videoSrc = detail[index2].video;
      this.subtitle = detail[index2].title;
      this.mainTitle = title;
      this.work = work;
      this.rateId = detail[index2].id;
      this.videoRate = detail[index2].rate;
      this.videoChapterIndex = index1;
      this.videoSChapterIndex = index2;
    },

    //获取视频进度
    getVideoStatus() {
      let data = new FormData();
      data.append("userId", window.sessionStorage.getItem("userId")); //用户id
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      // return;
      this.$http
        .post(this.domain + "/rate/sr", data)
        .then((res) => {
          console.log(res);

          let { code, data } = res.data;
          if (code === 1) {
            this.$Message.success("获取视频进度成功");
            //渲染每个视频的进度
            data.forEach((item, index) => {
              for (let i = 0; i < this.classesList.length; i++) {
                let len = this.classesList[i].detail.length;
                for (let j = 0; j < len; j++) {
                  // console.log()
                  if (this.classesList[i].detail[j].videoId == item.videoId) {
                    //进度id
                    this.classesList[i].detail[j].id = item.id;
                    //视频进度
                    this.classesList[i].detail[j].rate = item.rate;
                    break;
                  }
                }
              }
            });

            //渲染每个章节进度
            let rate = 0;
            for (let i = 0; i < this.classesList.length; i++) {
              rate = 0;
              let len = this.classesList[i].detail.length;
              for (let j = 0; j < len; j++) {
                //观看时长大于等于总时长
                if (
                  this.classesList[i].detail[j].rate >=
                  this.classesList[i].detail[j].total
                )
                  this.classesList[i].detail[j].ifFinished = true;
                //每个章节看完的视频累加
                if (this.classesList[i].detail[j].ifFinished) rate++;
              }
              this.classesList[i].rate = Math.round((rate / len) * 100);
            }

            // console.log(this.classesList);
          } else {
            this.$Message.error("获取视频进度失败");
          }
        })
        .catch((err) => {
          console.log(err);
          if (!window.sessionStorage.getItem("userId")) {
            this.$Message.info("登录获取观看进度");
          } else this.$Message.error("服务器连接失败");
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },

    //播放视频，发视频进度给后台并处理
    playVideo(e) {
      let video = e.target;
      //以秒为单位
      // video.currentTime = this.videoRate;
      let rateId = this.rateId;
      // return;
      //每30s发送一次进度给后台存储
      this.timer = setInterval(() => {
        //判断是否在当前页面
        if (rateId != this.rateId) {
          clearInterval(this.timer);
          console.log("错误");
          return false;
        }
        console.log("一直在动");
        //更新前端的数据
        for (let i = 0; i < this.classesList[i].length; i++) {
          let len = this.classesList[i].detail.length;
          for (let j = 0; j < len; j++) {
            if (this.classesList[i].detail[j].id == this.rateId) {
              if (video.currentTime >= video.duration) {
                this.classesList[i].detail[j].rate = Math.floor(video.duration);
              } else {
                this.classesList[i].detail[j].rate = Math.floor(
                  video.currentTime
                );
              }
              break;
            }
          }
        }
        //视屏结束
        if (video.currentTime >= video.duration) {
          clearInterval(this.timer);
          this.updateVideo(Math.floor(video.duration));
          console.log("end");
        } else {
          //没结束时
          this.updateVideo(Math.floor(video.currentTime));
        }
      }, 30000);
    },

    //暂停视频
    stopVideo(e) {
      let video = e.target;
      console.log(Math.floor(video.currentTime), "暂停视频");
      let rate = Math.floor(video.currentTime);
      // if(video.currentTime >= video.duration) {
      //   this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].ifFinished = true;
      //   this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].rate = Math.floor(video.duration);
      //   this.classesList[this.videoChapterIndex].rate = this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].length;

      // }
      //清除timer
      clearInterval(this.timer);
      //更新视频进度
      this.updateVideo(rate);
    },

    //预加载
    prePlay(e) {
      let video = e.target;
      //以秒为单位
      video.currentTime = this.videoRate || 0;
    },

    //一直播放视频 @timeupdate="stillPlay($event)"
    /* stillPlay(e) {
      return;
      let video = e.target;
      console.log(Math.floor(video.currentTime), "一直播放");
    }, */

    //更新视频进度 id -- 进度id rate -- 进度
    updateVideo(rate) {
      //无登录时不更新视频进度
      if (!this.rateId) return;
      let data = new FormData();
      data.append("id", this.rateId);
      data.append("rate", rate);
      this.$http
        .post(this.domain + "/rate/ur", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 渲染函数
    renderCard(h) {
      return h("div", [
        h("span", card.name),
        h("i", {
          class: {
            circle: card.finsihed,
          },
        }),
      ]);
    },
  },
};
</script>

<style lang="scss">
@import "./ClassLearn.scss";
</style>
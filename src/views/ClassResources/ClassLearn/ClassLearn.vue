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
      <Tabs :value="name" class="study_wrap">
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', '课前预习'),
                h('i', {
                  class: {
                    circle: !preStatus,
                  },
                }),
              ]);
            }
          "
          name="name1"
        >
          <!-- <p>请点击下方的链接进入预习，一定要好好预习哦！</p>
          <a href="http://qgailab.com/anywork/student/" target="blank"
            >anywork</a
          > -->
          <div v-for="(pro, index) in preProblem" :key="index">
            <ChooseProblem
              v-if="pro.type === 0"
              :p_index="index"
              :status="preStatus"
              :problem="pro"
              @pass="handleChild"
            />
            <FillProblem
              v-else-if="pro.type == 1"
              :p_index="index"
              :status="preStatus"
              :problem="pro"
            />
            <p v-else>暂无题目</p>
          </div>
          <div v-show="preProblem.length && videoId != -1" class="bottom_wrap">
            <div class="btn_wrap">
              <Button
                @click="preCommit"
                type="primary"
                size="large"
                :disabled="preStatus"
                >提交</Button
              >
            </div>
            <div class="your_ans" v-show="preStatus">
              你的答案
              <span v-for="(pro, index) in preProblem" :key="index">{{
                pro.user_ans ? pro.user_ans : "-"
              }}</span>
            </div>
            <div class="correct_ans" v-show="preStatus">
              正确答案
              <span v-for="(pro, index) in preProblem" :key="index">{{
                pro.correct_ans
              }}</span>
            </div>
          </div>
          <p v-show="!preProblem.length">请选择章节进行预习</p>
        </TabPane>
        <TabPane label="章节说明" name="name2"><p style="text-indent: 2em;">{{ summary }}</p></TabPane>
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', '视频学习'),
                h('i', {
                  class: {
                    circle: !videoStatus,
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
          <iframe
            v-show="filesrc"
            :src="filesrc"
            frameborder="0"
            class="class_file"
          ></iframe>
          <p v-show="!filesrc">暂无课件</p>
        </TabPane>
        <TabPane
          :label="
            (h) => {
              return h('div', [
                h('span', '课后小测'),
                h('i', {
                  class: {
                    circle: !testStatus,
                  },
                }),
              ]);
            }
          "
          name="name5"
        >
          <!-- <p>
            请自行打开anyview去进行小测，学习完每章的一小节后就可以去测试了，检验自己的学习成果，根据测试结果再调整自己的学习情况
          </p> -->
          <div v-for="(pro, index) in testProblem" :key="index">
            <ChooseProblem
              v-if="pro.type === 0"
              :p_index="index"
              :status="testStatus"
              :problem="pro"
              @pass="handleChild"
            />
            <FillProblem
              v-else-if="pro.type === 1"
              :p_index="index"
              :status="testStatus"
              :problem="pro"
            />
            <p v-else>暂无题目</p>
          </div>
          <div v-show="testProblem.length && videoId != -1" class="bottom_wrap">
            <div class="btn_wrap">
              <Button
                @click="testCommit"
                type="primary"
                size="large"
                :disabled="testStatus"
                >提交</Button
              >
            </div>
            <div class="your_ans" v-show="testStatus">
              你的答案
              <span v-for="(pro, index) in testProblem" :key="index">{{
                pro.user_ans ? pro.user_ans : "-"
              }}</span>
            </div>
            <div class="correct_ans" v-show="testStatus">
              正确答案
              <span v-for="(pro, index) in testProblem" :key="index">{{
                pro.correct_ans
              }}</span>
            </div>
          </div>
          <p v-show="!testProblem.length">请选择章节进行小测</p>
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
            @click="showSection(index1, index2)"
            v-for="(item2, index2) in item1.detail"
            :key="index2"
          >
            <span class="charpter">{{
              `${index1}.${index2 + 1 + " " + item2.title}`
            }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              class="icon circle0"
              v-if="item2.ifFinished && item2.ifPreview && item2.ifTest"
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
import ChooseProblem from "../../../components/ClassResource/Problem/ChooseProblem";
import FillProblem from "../../../components/ClassResource/Problem/FillProblem.vue";
import { prePro, testPro } from "../../../assets/data/question";
export default {
  components: {
    ChooseProblem,
    FillProblem,
  },
  data() {
    return {
      //章节的所有数据
      classesList: videoData,
      //视屏播放地址
      videoSrc: "",
      // "http://qgailab.com/course/resources/video/1.5_1.mp4",
      //学习任务
      work: "理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。",
      //主标题
      mainTitle: "章",
      //副标题
      subtitle: "小节",
      //进度id
      rateId: -1,
      //视频进度
      videoRate: 0,
      //视频章节
      videoChapterIndex: -1,
      //视频小章节
      videoSChapterIndex: -1,
      //课件地址
      filesrc: "",
      // "http://qgailab.com/cloud/course/static/pdf/1.1_1.pdf",
      // 章节说明
      summary: "请选择章节查看",
      //控制时间函数
      timer: null,
      // 视屏观看情况
      videoStatus: false,
      // 课前预习提交状态
      preStatus: false,
      // 课后小测提交状态
      testStatus: false,
      // 课后小测题目
      preProblem: [],
      // 课前预习题目
      testProblem: [],
      // 视频id
      videoId: -1,
      // 标签所在页
      name: 'name1',
    };
  },
  created() {
    this.getVideoStatus();
  },
  mounted() {
    let {index = 1,section = 0, chapter = 0} = this.$route.params;
    
    // 如果是从学习情况过来的
    // if(Object.getOwnPropertyNames(this.$route.params).length !== 0 && chapter == 0){
    //   section += 3;
    // }
    this.name = 'name' + index;
    let { title, detail, file } = this.classesList[chapter];
    this.filesrc = file;
    this.videoSrc = detail[section].video;
    this.videoStatus = detail[section].ifFinished;
    this.subtitle = detail[section].title;
    this.mainTitle = title;
    this.rateId = detail[section].id;
    this.videoRate = detail[section].rate;
    this.videoChapterIndex = chapter; //章
    this.videoSChapterIndex = section; //小节
    this.preProblem = prePro.get(detail[section].videoId);
    this.testProblem = testPro.get(detail[section].videoId);
    this.summary = detail[section].content;
    this.videoId = detail[section].videoId;
  },
  methods: {
    //展示收起详细内容
    showDetail(index) {
      let { title, detail, show, file } = this.classesList[index];
      this.classesList[index].show = !this.classesList[index].show;

      //展开详细内容时更新
      if (!show) {
        this.filesrc = file;
        this.videoSrc = detail[0].video;
        this.videoStatus = detail[0].ifFinished;
        this.subtitle = detail[0].title;
        this.mainTitle = title;
        this.rateId = detail[0].id;
        this.videoRate = detail[0].rate;
        this.videoChapterIndex = index;
        this.videoSChapterIndex = 0;
        this.preProblem = prePro.get(detail[0].videoId);
        this.testProblem = testPro.get(detail[0].videoId);
        this.summary = detail[0].content;
        this.videoId = detail[0].videoId;
      }
    },

    //展示章节
    showSection(index1, index2) {
      let { title, work, detail } = this.classesList[index1];
      this.videoSrc = detail[index2].video;
      this.subtitle = detail[index2].title;
      this.mainTitle = title;
      this.work = work;
      this.rateId = detail[index2].id;
      this.videoRate = detail[index2].rate;
      this.summary = detail[index2].content;
      this.videoChapterIndex = index1;
      this.videoSChapterIndex = index2;
      this.preProblem = prePro.get(detail[index2].videoId);
      this.testProblem = testPro.get(detail[index2].videoId);
      this.videoStatus = detail[index2].ifFinished;
      this.videoId = detail[index2].videoId;

      //查看对应章节的情况
      this.preStatus = detail[index2].ifPreview;
      this.testStatus = detail[index2].ifTest;

      // 如果有提交时再查看答题情况，否则不需要
      if (this.preStatus || this.testStatus) {
        const preExe = this.getExerciesId(this.preProblem),
          revExe = this.getExerciesId(this.testProblem);

        // 查看章节完成情况
        this.checkChapter(preExe, revExe, this.videoId);
      }
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
                    // 预习情况
                    this.classesList[i].detail[j].ifPreview = item.preview;
                    //小测情况
                    this.classesList[i].detail[j].ifTest = item.review;

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
                this.classesList[i].detail[j].ifFinished = true;
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
      if (!this.rateId || this.videoId == -1) return;
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

    // 查看章节预习、小测情况
    checkChapter(preExe, revExe, videoId) {
      console.log(...arguments);
      const userId = window.sessionStorage.getItem("userId");
      const data = new FormData();
      data.append("userId", userId);
      data.append("previewExercisesId[]", preExe);
      data.append("videoId", videoId);
      data.append("reviewExercisesId[]", revExe);
      this.$http
        .post(this.domain + "/exercises/show", data)
        .then((res) => {
          console.log(res);
          const { code, data } = res.data;

          if (code !== 1) {
            this.$Message.error("获取答题记录失败");
            return;
          }
          const { preview, review, previewDetails, reviewDetails } = data;
          this.preStatus = preview; //预习情况
          this.testStatus = review; //小测情况
          previewDetails &&
            previewDetails.forEach((v, i) => {
              this.preProblem[i].user_ans = v;
            });
          reviewDetails &&
            reviewDetails.forEach((v, i) => {
              this.testProblem[i].user_ans = v;
            });
        })
        .catch((err) => {
          console.log(err);
          if (!userId) return this.$Message.info("登录获取答题记录");
          this.$Message.error("服务器连接失败");
        });
    },

    // 获取子组件传来的值
    handleChild(problem) {
      console.log(problem);
    },

    // 提交课前预习
    preCommit() {
      this.handleCommit(
        this.getExerciesId(this.preProblem),
        this.getExerciesSelect(this.preProblem),
        0
      );
    },
    // 提交课后小测
    testCommit() {
      this.handleCommit(
        this.getExerciesId(this.testProblem),
        this.getExerciesSelect(this.testProblem),
        1
      );
    },

    // 处理提交
    handleCommit(exercisesId, choose, flag) {
      console.log(...arguments);
      const userId = window.sessionStorage.getItem("userId");
      if (!userId) return this.$Message.info("请先登录！");
      const data = new FormData();
      data.append("userId", parseInt(userId));
      data.append("exercisesId[]", exercisesId); //练习题对应的id
      data.append("choose[]", choose); //选项
      data.append("videoId", this.videoId);
      data.append("flag", flag); // 标志 0 - 预习 ， 1 - 小测

      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });

      this.$http
        .post(this.domain + "/exercises/check", data)
        .then((res) => {
          console.log(res);
          const { data, code } = res.data;
          if (code === 1) {
            this.$Message.success("提交成功");

            if (flag === 1) {
              this.testStatus = !this.testStatus;
              this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].ifTest = true;
            } else {
              this.preStatus = !this.preStatus;
              this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].ifPreview = true;
            }
            return;
          }
          this.$Message.error("提交失败");
        })
        .catch((err) => {
          console.log(err);
          if (!userId) this.$Message.error("请先登录！");
          else this.$Message.error("服务器连接失败");
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },

    // 获取练习题对应的id
    getExerciesId(exercises) {
      const arr = [];

      for (const e of exercises) {
        arr.push(e.id);
      }

      return arr;
    },

    //获取练习题对应的选项
    getExerciesSelect(exercises) {
      const arr = [];

      for (const e of exercises) {
        arr.push(e.user_ans);
      }

      return arr;
    },
  },
};
</script>

<style lang="scss">
@import "./ClassLearn.scss";
</style>
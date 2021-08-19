<template>
  <div>
    <div class="awards-li">
      <span>
        <router-link to="/TeacherGroup">教师团队</router-link>
      </span>
      <span class="active">
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </span>
      <span>
        <router-link to="/Awards">教师竞赛获奖</router-link>
      </span>
      <span>
        <router-link to="/StudentAwards">学生竞赛获奖</router-link>
      </span>
    </div>
    <div class="teacher-group" v-show="htmlId == 1">
      <div class="teacher-cards">
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/xie.2730c8e.png')"
          :name="'谢光强'"
          :content="'博士、教授\n广东工业大学计算机学院副院长\n中国人工智能学会科普工作委员会委员'"
          :main="'人工智能、无人驾驶、数据挖掘'"
          @click.native="toPage(0)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/yang.png')"
          :name="'李杨'"
          :content="'博士，副教授\n广东工业大学计算机学院计算机科学系副主任\n广东省计算机学会大数据专业委员会会员'"
          :main="'人工智能,移动互联网,数据挖掘'"
          @click.native="toPage(5)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/ying.f8cd54b.jpg')"
          :name="'曾颖'"
          :content="'广东工业大学计算机学院讲师\n广东工业大学十佳青年授课教师'"
          :main="'数据结构与算法'"
          @click.native="toPage(8)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/lu.b03aa5f.jpg')"
          :name="'路璐'"
          :content="'广东工业大学计算机学院讲师\n十佳青年授课教师'"
          :main="'信息安全'"
          @click.native="toPage(11)"
        />
      </div>
    </div>
    <div class="teacher-detail" v-show="htmlId == 2">
      <div>
        <label @click="htmlId = 1">十佳教师</label>
        <span v-if="teacherId == 0">谢光强</span>
        <span v-if="teacherId == 5">李杨</span>
        <span v-if="teacherId == 8">曾颖</span>
        <span v-if="teacherId == 11">路璐</span>
      </div>
      <div v-if="teacherId == 0">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/xie.2730c8e.png" />
          <p class="teacher-name">谢光强</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
9、广东工业大学教学优秀“二等奖”（4次）
10、2010 云浮市“科学技术奖二等奖”（排名第二）
11、2013 广东工业大学“科研工作先进者”
12、2011 广东工业大学“优秀指导老师”
13、广东工业大学“优秀班主任”（2005-2008，2017）
14、2007 计算机学院“师德先进个人”
15、2009 广东工业大学“大学毕业生就业工作先进个人”
16、2015 广东工业大学“优秀工会积极分子”
17、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”
18、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。
          </pre>
          <div class="honor-photo">
            <!-- <img
              v-for="(item, index) in detailTeacher.honorPhoto"
              :key="index"
              :src="item"
            /> -->
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie1.b7293c2.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie2.a795652.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie3.5dcf113.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie4.086d56b.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/1.839a584.png"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/2.6ffb21d.png"
                    />
                  </div>
                  <p>广东工业大学师德标兵获奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/3.2a15392.png"
                    />
                  </div>
                  <p>青年教师教学基本功大赛获奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/4.c6f67d4.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/5.c77bf3a.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/6.0f247dd.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/7.3708d03.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/8.d761533.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/9.2600620.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/10.785e2e4.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/11.8c6b0f8.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 5">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/yang.png" />
          <p class="teacher-name">李杨</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.广东工业大学“十佳授课教师”
2.广东工业大学“年度优秀教师”
3.云浮市“科学技术奖二等奖”
4.广东工业大学“科研工作先进者”
5.广东工业大学教学优秀“一等奖”，“二等奖”
6.广东工业大学“优秀指导老师”
7.广东工业大学年度考核“优秀”
8.广东工业大学“优秀班主任”
9.“计算机学院师德先进个人”</pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/li/li1.71af94a.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/li/li2.e438043.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 8">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/ying.f8cd54b.jpg" />
          <p class="teacher-name">曾颖</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.获第6届广东工业大学“十佳青年授课教师“称号”
2.获教学优秀一等奖一次，二等奖两次
        </pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying1.35ea482.jpg"
                    />
                  </div>
                  <p>青年教师竞赛演讲</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying2.f7c58d9.jpg"
                    />
                  </div>
                  <p>青年教师竞赛演讲</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying3.6bb9e49.png"
                    />
                  </div>
                  <p>十佳授课教师获奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 11">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/lu.b03aa5f.jpg" />
          <p class="teacher-name">路璐</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.2014年获得广东工业大学十佳授课教师
2.获得2014-2015学年度，广东工业大学教学优秀一等奖
3.获得2015-2016学年度，广东工业大学教学优秀一等奖
</pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/lu/lu1.f95a55d.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/lu/lu2.4337b4c.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherCard from "./../../../components/TeacherCard/TeacherCard";
export default {
  data() {
    return {
      htmlId: 1,
      teacherId: 0,
    };
  },
  components: {
    TeacherCard,
  },
  methods: {
    toPage(index) {
      this.htmlId = 2;
      this.teacherId = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.awards-li {
  width: 100%;
  margin-bottom: 12px;
  span {
    a {
      color: #515a6e;
    }
    display: inline-block;
    font-size: 16px;
    margin: 0 12px;
    padding: 8px 0;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #3b888b;
      font-weight: 600;
    }
  }
  .active {
    border-bottom: 3px solid #3b888b;
    font-weight: 600;
  }
}
.teacher-group {
  width: 100%;
  > p {
    font-size: 16px;
    font-weight: 600;
  }
  .teacher-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
.teacher-detail {
  > div:first-child {
    font-weight: 600;
    label {
      color: #57aeb1;
      margin-right: 12px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #57aeb1;
      }
    }
  }
  > div:nth-child(2) {
    width: 100%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 12px auto;
    padding: 48px 64px;
    .detail-photo {
      width: 72px;
      margin: 0 36px 36px 0;
      float: left;
      img {
        width: 72px;
        height: 100px;
        background: #868684;
        border-radius: 8px;
        overflow: hidden;
        border: none;
      }
      p {
        font-size: 10px;
        text-align: center;
        color: #868684;
      }
      .teacher-name {
        color: #585858;
        font-weight: 600;
        letter-spacing: 0.1em;
        font-size: 16px;
      }
    }
    .teacher-main {
      width: 100%;
      p {
        font-size: 14px;
        font-weight: 600;
        margin: 8px 0;
        &:first-child {
          margin-top: 0;
        }
      }
      pre {
        margin-left: 24px;
        font-size: 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .honor-photo {
        width: calc(100% + 16px);
        margin: 12px -8px;
        display: flex;
        flex-wrap: wrap;

        img {
          width: calc(25% - 16px);
          height: 140px;
          margin: 8px;
          background-color: #868684;
        }
      }
    }
  }
}
.activity {
  > p {
    font-weight: 600;
    font-size: 16px;
  }
  .activity-photos {
    width: calc(100% + 24px);
    margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 22%;
      height: 160px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
      text-align: center;
      margin: 12px;
      > div {
        background-color: #868684;
        width: 100%;
        height: 80%;
        line-height: 80%;
        text-align: center;
        overflow: hidden;
        img {
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden;
          margin: 0 !important;
        }
      }
      p {
        font-size: 12px !important;
        margin: 0 !important;
        height: 20%;
        width: 100%;
        display: inline-block;
        padding: 4px 0;
        background-color: #f8f8f8;
      }
    }
  }
}
</style>
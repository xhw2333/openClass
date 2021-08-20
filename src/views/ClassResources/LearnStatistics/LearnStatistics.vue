<template>
  <div id="LearnStatistics">
    <ul class="title_wrap">
      <li>学习统计</li>
    </ul>
    <div class="chapters_wrap">
      <div class="chapter" v-for="(chapter, index1) in studyData" :key="index1">
        <div class="title" @click="showChapter(index1)">
          <span>{{ chapter.title }}</span>
          <i
            :style="{
              transition: 'all .3s',
              transform: chapter.show ? 'rotate(-90deg)' : 'rotate(90deg)',
            }"
            >></i
          >
        </div>
        <ul v-show="chapter.show">
          <li
            :class="['section', { selected: section.show }]"
            v-for="(section, index2) in chapter.detail"
            :key="section.videoId"
          >
            <div class="title" @click="showSection(index1, index2)">
              <span>{{
                index1 + 1 + "." + (index2 + 1) + " " + section.title
              }}</span>
              <i
                :style="{
                  transition: 'all .3s',
                  transform: section.show ? 'rotate(-90deg)' : 'rotate(90deg)',
                }"
                >></i
              >
            </div>
            <ul class="detail" v-show="section.show">
              <li class="preview">
                <span>预习情况</span>
                <span v-if="section.ifPreview" class="finished">已完成</span>
                <span v-else class="unfinished">未完成</span>
              </li>
              <li class="video">
                <span>视频预习</span>
                <span>已学习{{ section.watch }}分钟</span>
              </li>
              <li class="test">
                <span>课后小测</span>
                <span v-if="section.ifTest" class="finished">已完成</span>
                <span v-else class="unfinished">未完成</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--    <div class="chapter">
        <div class="title">
          <span>一、算法</span>
          <i>></i>
        </div>
        <ul>
          <li class="section selected">
            <div class="title">
              <span>1.1 算法</span>
              <i>></i>
            </div>
            <ul class="detail">
              <li class="preview">
                <span>预习情况</span>
                <span class="finished">已完成</span>
              </li>
              <li class="video">
                <span>视频预习</span>
                <span>已学习45分钟</span>
              </li>
              <li class="test">
                <span>课后小测</span>
                <span class="unfinished">未完成</span>
              </li>
            </ul>
          </li>
          <li class="section">
            <div class="title">
              1.2 算法
              <i>></i>
            </div>
          </li>
          <li class="section">
            <div class="title">
              1.3 算法
              <i>></i>
            </div>
          </li>
        </ul>
      </div>-->
    </div>
  </div>
</template>

<script>
import { studyData } from "./studyData";
export default {
  data() {
    console.log(studyData);
    return {
      studyData: studyData,
    };
  },

  methods: {
    // 展示详细章节的小节
    showChapter(index) {
      this.studyData[index].show = !this.studyData[index].show;
    },

    // 展示小节的预习、视频、小测情况
    showSection(index1, index2) {
      this.studyData[index1].detail[index2].show =
        !this.studyData[index1].detail[index2].show;
    },
  },
};
</script>

<style lang="scss" scoped>
#LearnStatistics {
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

  .chapters_wrap {
    padding: 0 10px;

    .chapter {
      > .title {
        margin-bottom: 10px;
        background: #f2f2f2;
        color: #262626;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        padding: 4px 10px;
        cursor: pointer;
      }

      .section {
        color: #595959;
        margin-bottom: 3px;
        transition: all 0.2s;

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          padding: 4px 10px;
          cursor: pointer;
          transition: all 0.1s;
        }

        .detail {
          li {
            font-size: 14px;
            padding: 5px 25px;
            transition: all 0.2s;

            > span {
              &.finished {
                border: 1px solid #52c41a;
                color: #52c41a;
                background: #fff;
                padding: 3px 5px;
              }

              &.unfinished {
                border: 1px solid #faad14;
                color: #faad14;
                background: #fff;
                padding: 3px 5px;
              }

              &:last-child {
                font-size: 12px;
                margin-left: 10px;
                border-radius: 2px;
              }
            }

            &.preview {
            }

            &.video {
              span:last-child {
                color: #52c41a;
              }
            }

            &.test {
            }
          }
        }

        &:hover,
        &.selected {
          .title {
            color: #fff;
            background: #055052;
          }

          .detail {
            li {
              background: rgba(0, 157, 159, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
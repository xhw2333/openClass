<template>
  <div class="activity">
    <p>活动剪影</p>
    <div class="activity-photos">
      <div>
        <div>
          <img src="./../../../assets/activity/1.39fd37a.jpg" />
        </div>
        <p>谢光强老师与学生们合影</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/2.c52c125.jpg" />
        </div>
        <p>谢光强老师给学生分析难点</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/3.8d094d5.jpg" />
        </div>
        <p>路璐老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/4.7fdd8dd.jpg" />
        </div>
        <p>路璐老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/5.b7698c0.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/6.05a5daf.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/7.7878425.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/8.16b9210.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/9.455b27e.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/10.6843ed6.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/11.5f24d7b.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/12.ca3896e.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/13.867a5a3.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/14.0f798d8.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/15.ecbcf68.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/16.2a7da04.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/17.3771e1d.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/18.e2c53ed.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/19.8035d30.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
      <div>
        <div>
          <img src="./../../../assets/activity/20.f0fd4b9.jpg" />
        </div>
        <p>谢光强老师授课</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
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
          height: auto;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
      p {
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
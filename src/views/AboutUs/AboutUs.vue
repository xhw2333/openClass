<template>
  <div class="about-us">
    <AboutUsLi />
    <div class="about-us-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AboutUsLi from "./AboutUsLi/AboutUsLi";
export default {
  components: {
    AboutUsLi,
  },
};
</script>

<style lang="scss">
.about-us {
  display: flex;
  flex-direction: row;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 24px 0;
  padding-top: 134px !important;
  font-family: "Source Han Sans CN";
  min-height: calc(100vh - 100px);

  .about-us-main {
    width: calc(100% - 200px);
    margin: -36px 0 0 20px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
<template>
  <div class="about-us-ul">
    <ul>
      <li @click="addActive(0)">
        <router-link to="/UniversityAlliance">高校联盟</router-link>
      </li>
      <li @click="addActive(1)">
        <router-link to="/TeacherGroup">广东工业大学</router-link>
      </li>
      <li @click="addActive(2)">
        <router-link to="/ReformAndResearch">教学改革与研究</router-link>
      </li>
      <li @click="addActive(3)">
        <router-link to="/ActivitySilhouette">活动剪影</router-link>
      </li>
      <!-- <li @click="addActive(3)">
        <router-link to="/TeacherGroup">教师团队</router-link>
      </li>
      <li @click="addActive(4)">
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </li> -->
      <!-- <li @click="addActive(5)">
        <router-link to="/NotificationForm">申报书</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    addActive(index) {
      let li = document
        .querySelector(".about-us-ul")
        .getElementsByTagName("li");
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
      }
      li[index].classList.add("active");
    },
  },
  mounted() {
    this.addActive(0);
  },
};
</script>

<style lang="scss">
.about-us-ul {
  width: 180px;
  ul {
    background-color: rgb(250, 247, 250);
    cursor: pointer;
    text-align: center;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
  }
  li {
    &:hover {
      background-color: #009D9F;
      a {
        color: white;
      }
    }
    a {
      display: inline-block;
      padding: 12px 24px;
      color: #868684;
      font-weight: 600;
      width: 100%;
      height: 100%;
    }
  }
  .active {
    background-color: #009D9F;
    a {
      color: white;
    }
  }
}
</style>
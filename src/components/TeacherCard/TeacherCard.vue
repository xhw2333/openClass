<template>
  <div class="teacher-card">
    <img :src="src" />
    <div>
      <p>{{ name }}</p>
      <pre>{{ content }}</pre>
      <div>
        <label>主要研究领域：</label>
        <p>{{ main }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherCard",
  props: ["src", "name", "main", "content"],
};
</script>

<style lang="scss">
.teacher-card {
  width: 30%;
  min-width: 300px;
  margin: 12px 24px 12px 0;
  max-height: 200px;
  padding: 24px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  cursor: pointer;
  &:-webkit-scrollbar {
    display: none;
  }
  img {
    width: 72px;
    height: 100px;
    background: #868684;
    border-radius: 8px;
    overflow: hidden;
    border: none;
  }

  > div {
    width: 168px;
    margin-left: 12px;
    font-size: 10px;
    color: #868684;
    > p {
      font-weight: 600;
      color: #585858;
      font-size: 14px;
    }
    > pre {
      display: inline-block;
      height: 72px;
    }
    > div {
      font-weight: 600;
    }
  }
}
</style>
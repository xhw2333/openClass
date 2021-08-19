<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  padding:0;
  margin: 0;
}

ul,li {
  list-style: none;
}

button,input {
  outline: none;
}

iframe {
  border: none;
}
</style>

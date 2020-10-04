<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0;
}
</style>

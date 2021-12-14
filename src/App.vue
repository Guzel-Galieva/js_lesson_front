<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

export default {
  name: "App",
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || 'main-layout';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #012447;
  margin-top: auto;
  padding: 45px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-page {
  display: flex;
  flex-direction: row;
  margin: auto;
}

 .base-card {
  padding: 20px;
  width: 450px;
  height: 320px;
  margin: auto;
  box-shadow: rgb(68, 61, 61, 0.6) 15px 15px 30px;
  border-radius: 15px;
}  

</style>

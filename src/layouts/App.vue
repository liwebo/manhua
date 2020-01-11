<template>
  <div id="app">
      <!-- <loading v-show="this.$root.bLoading"/> -->
    <!-- <home/> -->
    <!-- <Header/> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
  // import Home from '../pages/home.vue'
  import Footer from '@/layouts/footer.vue'
  // import Header from '@/layouts/header.vue'
  // import loading from '@/components/loading.vue'
  export default{
    components:{
      Footer
    }
  }
  
</script>
<style scoped>

</style>
  

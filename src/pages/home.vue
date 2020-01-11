<template>
  <div class="home">
    <Banner/>
    <uc-cell/>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import UcCell from '@/components/uc-cell.vue'
  export default {
    data(){
      return {
      }
    },
    components:{
      Banner,
      'uc-cell':UcCell
    },
    mounted(){
    },
    updated(){},
    methods:{}
  }
</script>

<style>

</style>

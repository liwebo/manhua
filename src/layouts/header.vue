<template>
<!-- <router-link to="/column/all" tag="li"> -->
  <div class="header">
    <ul>
        <router-link to="/all" tag="li">
        <a href="#">全部</a>
        </router-link>
        <router-link to="/all_2" tag="li">
        <a href="#">恋爱</a>
        </router-link>
        <router-link to="/all_3" tag="li">
        <a href="#">冒险</a>
        </router-link>
        <router-link to="/all_4" tag="li">
        <a href="#">搞笑</a>
        </router-link>

    </ul>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{
    },
    mounted(){},
    updated(){},
    methods:{}
  }
</script>



<style scoped>
  .header{width:100%; position:fixed; top:0;left:0; z-index:2; background:lightcoral;}
  .header ul{width:5.38rem;height:0.8rem; margin:0 auto;}
  .header ul li{ float:left;width:1.3rem;height:0.8rem;}
  .header ul li a{ display:block; line-height:0.8rem; text-align:center; font-size:0.3rem; color:black;}
</style>

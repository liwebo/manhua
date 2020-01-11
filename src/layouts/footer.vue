<template>
  <footer class="foot-btn">
    <ul>
      <router-link to="/home" tag="li">
        <img src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ac3376230691.png">
        <p>首页</p>
      </router-link>
      <router-link to="column" tag="li">
        <img src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ac33760b6fdc.png">
        <p>分类</p>
      </router-link>
       <router-link to="/community" tag="li">
        <img src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ac33760c8db4.png">
        <p>社区</p>
      </router-link>
      <router-link to="/user" tag="li">
        <img src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ac33762aeeea.png">
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
  export default {
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}

  .foot-btn ul{display:flex;justify-content:space-between;margin:0 0.4rem;}
  .foot-btn img{width:.4rem;height:.4rem;display: block;margin-top:0.1rem;}
  .foot-btn p{color:#ccc;}
</style>

<template>
  <div class="nav" :style="{
    'background':bgColor,
    'border-width':borderWidth+'px',
  }">
  
  <!-- 模板的作用与和this/component/vm 是同作用域，不和模块同作用域 -->
  
    <!-- onclick="window.history.go(-1)" -->
  
    <ul>
      <li
       :class="`l-btn ${ arrow === 'gray' ? 'gray' : 'default'}`"
       @click="goback"
       
      ></li>
    </ul>
  </div>
</template>

<script>

  
  
  export default {
    data() {
      return {
      }
    },
    props: {
      bgColor: {
        type: String,
        default: '#fff'
      },
      borderWidth: {
        type: Number,
        default: 1
      },
      arrow: {
        type: String,
        default: 'default'
      }
    },
    components: {},
    mounted() {},
    updated() {},
    methods: {
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 0.7rem;
    height:0.5rem;
    position: fixed;
    top: 0.1rem;
    left: 0.2rem;
    border-bottom: 1px solid black;
    z-index: 99;
  }

  .nav ul {
    width: 100%;
    height: 100%;
    background:black;
    padding-top: 0.15rem;
    border-radius:50%;
    margin: 0 auto;
    opacity:0.5;
  }

 .nav ul li {
    width: 0.29rem;
    height: 0.31rem;
    background-size: 100%;
    margin:5% auto;
    /* background: url(./assets/history1.png) no-repeat 0 0; */
  }
  
  .nav ul li.gray{
    background-image: url(./assets/history1.png)
  }
  
  .nav ul li.default{
    background-image: url(./assets/history.png)
  }
</style>

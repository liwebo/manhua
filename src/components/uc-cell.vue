<template>
  <div class="uc-cell">
  <div class="classification">
      <ul>
          <li v-for="(item,index) of this.nav" :key="index">
          <router-link :to="item.url">
          <img :src="$baseUrl + item.picture"/>
          </router-link>
          </li>
      </ul>
  </div>

  <div class="section">
      <div class="section_top">
          <span>佳作推荐</span>
          <a href="#">更多>></a>
      </div>
  </div>
  <div class="article">
      <ul>  
            <router-link to="/detailsmy">
          <li v-for="(item,index) of this.footer" :key="index">
              <img :src='$baseUrl + item.picture4'/>
              <span>{{item.title}}</span>
              <p>{{item.text}}</p>
          </li>
            </router-link>
      </ul>
  </div>

   <div class="section">
      <div class="section_top">
          <span>最近更新</span>
          <a href="#">更多>></a>
      </div>
  </div>

  <div class="hequan">
      <ul v-for="(item,index1) of this.por" :key="index1">
          <li >
              <img :src="$baseUrl + item.picture"/>
              <span>{{item.title}}</span>
          </li>
          <li>
              <img :src="$baseUrl + item.picture1"/>
              <span>{{item.title1}}</span>
          </li>
          <li>
              <img :src="$baseUrl + item.picture2"/>
              <span>{{item.title2}}</span>
          </li>
      </ul>
  </div>

   <!-- <div class="section">
      <div class="section_top">
          <span>最近更新</span>
          <a href="#">更多>></a>
      </div>
  </div>

  <div class="hequan">
      <ul>
          <li>
              <img src="../assets/img/h4.png"/>
              <span>食戟之灵</span>
          </li>
          <li>
              <img src="../assets/img/h5.png"/>
              <span>小木乃伊到我家</span>
          </li>
          <li>
              <img src="../assets/img/h6.png"/>
              <span>和泉纱雾</span>
          </li>
      </ul>
  </div>

   <div class="section">
      <div class="section_top">
          <span>最近更新</span>
          <a href="#">更多>></a>
      </div>
  </div>

  <div class="hequan">
      <ul>
          <li>
              <img src="../assets/img/h7.png"/>
              <span>食戟之灵</span>
          </li>
          <li>
              <img src="../assets/img/h8.png"/>
              <span>小木乃伊到我家</span>
          </li>
          <li>
              <img src="../assets/img/h9.png"/>
              <span>和泉纱雾</span>
          </li>
      </ul>
  </div> -->

  </div>
  
</template>

<script>
import axios from 'axios'
  export default {
    data(){return {
        nav:[],
        footer:[],
        por:[]
    }},
    components:{},
    mounted(){
        this.$axios({
        url:'/api/home',
        params:{_page:1,_limit:4}
      }).then(
        //   res=>console.log(res.data.data)
          
        res=>{
            this.nav=res.data.data[0].nav;
            this.footer=res.data.data[0].foote;
            this.por=res.data.data[0].por;
            
            }
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
.classification{margin-top:0.4rem;margin-bottom:0.4rem;}
.classification ul {display: flex;justify-content: space-around;}
.classification ul li{float: left;margin-left:0.15rem;}
.classification ul li img{display:block;width:1.5rem;height:0.90rem;}

.section{height:0.4rem;width:100%;border-top:solid 0.01rem #ccc;}
.section .section_top span{float: left;font: 700 0.25rem/0.4rem "";padding-left:0.3rem;}
.section .section_top a{float: right;padding-right:0.3rem;font: 0.2rem/0.4rem "";}

.article ul{float: left;}
.article ul li{float:left;width:3.2rem;height:2rem;margin-bottom:0.8rem;}
.article ul li img{width:100%;height:100%;display: block;}
.article ul li span{font:700 0.2rem/0.3rem "";width:3.2rem;text-align: center;display: block;}
.article ul li p{font: 0.2rem/0.3rem "";color:#ccc;width:3.2rem;text-align: center;display: block;}

.hequan{}
.hequan ul{float: left;}
.hequan ul li{float:left;width:2.1rem;height:3rem;margin-bottom:1.5rem;}
.hequan ul li img{width:100%;height:100%;display: block;}
.hequan ul li span{font:700 0.2rem/0.5rem "";width:2.1rem;text-align: center;display: block;}
</style>
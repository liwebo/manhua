<template>
    <div class="all">
  <Header/>
      <div class="box"></div>
         <router-link to="/detailsmy" tag="li">
         <!-- <div class="img"> -->
      <ul class="te" v-for="(item,index) of list" :key="index">
        <img :src='$baseUrl + item.picture'/>
        <ul>
          <li>
          <h4>{{item.title}}</h4>
          <span>{{item.author}}</span>
          </li>
          <li>
          <b>{{item.text}}</b>
          </li>
        </ul>
      </ul>
       <!-- </div> -->
      </router-link>

       <div class="box"></div>
    </div>
</template>

<script>
import Header from '@/layouts/header.vue'
import axios from 'axios'
export default {
    data(){return{
      list:[]
    }},
    components:{
      Header,
    },
    mounted(){
       axios.get('/api/all_3').then(res => {
      
      this.list=res.data.data
      console.log(this.list)
    })
    },
    updated(){},
    methods:{}

}
</script>

<style scoped>
.all{background: #f9f8f8;}
.all .box{height:1rem;width:100%;}
.all .te{display:flex;margin-bottom:0.2rem;width:100%;}
.all .te img{width:1.7rem;height:2.3rem;display:block;margin-left:0.3rem;}
.all .te ul{width:70%;}
.all .te ul li{margin-left:0.2rem;}
.all .te ul li h4{font:700 0.25rem/0.5rem "";margin-top:0.1rem;}
.all .te ul li span{display:block;font:0.24rem/0.3rem "";margin-bottom:0.8rem;}
.all .te ul li b{font:0.25rem/0.3rem "";color:#ccc;display: block;}
</style>
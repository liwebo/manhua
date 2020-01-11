<template>
    <div class="popularity">
        <UcNav bgColor="none" :borderWidth="0" arrow="gray"></UcNav>
        <img src="../assets/img/wj.png"/>
         <ul  v-for="(item,index) of list" :key="index">
            <img :src='$baseUrl + item.picture'/>
            <li>
                <h5>{{item.title}}</h5>
                <span>{{item.author}}</span>
            </li>
            <b>{{item.number}}</b>
        </ul>

      <div class="box"></div>
    </div>
</template>

<script>
import axios from 'axios'
import UcNav from '../components/uc-nav/uc-nav.vue'
export default {
    data(){return{
        list:[]
    }},
    components:{
        UcNav,
    },
   mounted(){
        this.$axios({
        url:'/api/end',
        params:{_page:1,_limit:8}
      }).then(
        //   res=>console.log(res.data.data)
        res=>this.list=res.data.data
      )
   },
    updated(){},
    methods:{}

}
</script>

<style scoped>
.popularity{width:100%;height:100%;background:#f9e35f;}
.popularity .box{height:1rem;width:100%;}
.popularity img{width:100%;height:2.8rem;display:block;}
.popularity ul{margin-left:0.2rem;background:#fff;width:90%;height:2.2rem;padding-top:0.2rem;padding-left:0.2rem;overflow: hidden;}
.popularity ul:hover{border:#f9e35f solid 0.01rem;}
.popularity ul img{width:1.5rem;height:2rem;display: block;float: left;margin-bottom:0.2rem;}
.popularity ul li{float: left;margin-left:0.2rem;}
.popularity ul li h5{font-size:0.25rem;line-height:0.4rem;margin-top:0.6rem;}
.popularity ul li span{font-size:0.25rem;line-height:0.4rem;color:#ccc;}
.popularity ul b{float:right;font: 400 0.6rem/2rem "";padding-right:0.4rem;color:#ccc;}
</style>
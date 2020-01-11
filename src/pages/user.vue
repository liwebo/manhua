<template>
<div class="myuser">
  <div class="xinxi">
    <div class="left">
      <img src="../assets/img/sw.png"/>
    </div>
    <div class="right">
      <span>{{data.nikename}}</span>
      <p>Vip用户</p>
      <a href="javascript:;" @click="logout">注销</a>
    </div>
  </div>

  <div class="orders">
    <div class="orders_top">
    <P>商城订单</P>
    </div>

    <div class="orders_bottom">
      <ul>
        <li>
          <img src="../assets/img/meisi.png"/>
          <span>待付款</span>
        </li>
        <li>
          <img src="../assets/img/meisi.png"/>
          <span>待发货</span>
        </li>
        <li>
          <img src="../assets/img/meisi.png"/>
          <span>待收货</span>
        </li>
        <li>
          <img src="../assets/img/meisi.png"/>
          <span>待评价</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="member">
    <ul>
      <li>
        <img src="../assets/img/quanbu.png"/>
        <span>会员卡</span>
      </li>
      <li>
        <img src="../assets/img/quanbu.png"/>
        <span>系统通知</span>
      </li>
      <li class="te">
        <img src="../assets/img/quanbu.png"/>
        <span>优惠劵</span>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
import axios from 'axios'
  export default {
    data(){return {
      data:{}
    }},
    components:{},
    mounted(){},
    updated(){},
    beforeRouteEnter(to, from, next) {
      //条件异步
      // 抓取token
      let token = window.localStorage.getItem('token');
      if (token) {
        axios({
          url: '/api/user',
          headers: {
            'token': token
          }
        }).then(
          res => {
            console.log(res);
            
            res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')}
        )
      } else {
        next('/login')
      }
    },
    methods: {
      logout() {
        //...........
        window.localStorage.removeItem('token')
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
.myuser{width:100%;height:12rem;background:#f9f7f7;}
.myuser .xinxi{background:#faaf66;width:100%;height:3rem;}
.myuser .xinxi .left{width:0.8rem;height:0.8rem;margin:0.5rem 0.3rem 0.5rem 0.5rem;float: left;}
.myuser .xinxi .left img{width:100%;height:100%;display: block;border-radius:50%;}

.myuser .xinxi .right{float: left;margin-top:0.6rem;}
.myuser .xinxi .right span{}
.myuser .xinxi .right p{font:600 0.2rem/0.3rem "微软雅黑";}

.myuser .orders{margin-top:0.2rem;background:#fff;width:100%;}
.myuser .orders .orders_top{height:0.8rem;width:100%;border-bottom:0.01rem solid #eeebeb;}
.myuser .orders .orders_top p{font:500 0.2rem/0.8rem "";text-indent:0.3rem;}

.myuser .orders .orders_bottom{}
.myuser .orders .orders_bottom ul{display:flex;justify-content: space-between;}
.myuser .orders .orders_bottom ul li{width:1.5rem;text-align: center;}
.myuser .orders .orders_bottom ul li img{width:0.6rem;height:0.6rem;display: block;margin:auto;}
.myuser .orders .orders_bottom ul li span{line-height:0.6rem;}

.myuser .member{margin-top:0.2rem;background:#fff;}
.myuser .member ul{}
.myuser .member ul li{display:flex;justify-content:flex-start;width:100%;margin:0 0.2rem;border-bottom:#eeebeb solid 0.01rem;}
.myuser .member ul li img{width:0.6rem;height:0.6rem;display: block;padding-top:0.1rem;}
.myuser .member ul li span{font:0.2rem/0.8rem "";}
.myuser .member ul .te{border:none;}
</style>


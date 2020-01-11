<template>
    <div class="community">
     <banner/>

     <div class="title">
         <h3>精选社区</h3>
         <span>你的小伙伴都在这里</span>
     </div>

     <div class="list">
         <ul>
            <li>
                <a href="#">
                <img src="../assets/img/shouhui.png"/>
                <span>手绘</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/yinyue.png"/>
                <span>音乐</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/youxi.png"/>
                <span>游戏</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/yangsheng.png"/>
                <span>养生</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/yundong.png"/>
                <span>运动</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/dianjing.png"/>
                <span>电竞</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/meisi.png"/>
                <span>美食</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/qinggan.png"/>
                <span>情感</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/lvyou.png"/>
                <span>旅游</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/rdian.png"/>
                <span>热点</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/shenghuo.png"/>
                <span>生活</span>
                </a>
            </li>
            <li>
                <a href="#">
                <img src="../assets/img/quanbu.png"/>
                <span>全部</span>
                </a>
            </li>
         </ul>
     </div>

     <div class="title">
         <h3>热门活动</h3>
         <span>相约户外走一走</span>
     </div>

     <div class="activity">
         <img src="../assets/img/yy.jpg"/>
         <h5>音乐剧《阴阳师-平安慧娟》深圳站</h5>
         <ul>
             <li>
                 <img src="http://img.weiye.me/zcimgdir/album/file_592e6aede9613.png"/>
                 <span>活动时间:2018-3-31 12 13:30-18:30</span>
             </li>
             <li>
                 <img src="http://img.weiye.me/zcimgdir/album/file_592e6aedcec38.png"/>
                 <span>活动地点:深圳保利剧院</span>
             </li>
             <li>
                 <img src="http://img.weiye.me/zcimgdir/album/file_592e6aedc2db8.png"/>
                 <span>主办单位:暂无</span>
             </li>
         </ul>
     </div>
    </div>
</template>

<script>
 import Banner from '@/components/banner.vue'
export default {
    data(){return{}},
    components:{
        Banner,
    },
    mounted(){},
    updated(){},
    methods:{
    }

}
</script>

<style scoped>
.community .title{text-align: center;margin-top:0.4rem;}
.community .title h3{line-height:0.4rem;}
.community .title span{border-top:solid 0.01rem #ccc;color:#ccc;}

.community .list{margin-top:0.4rem;margin-left:0.5rem;margin-bottom:0.4rem;overflow: hidden;}
.community .list ul{}
.community .list ul li{ float: left;}
.community .list ul li a{display: block;text-align:center;margin-right:0.45rem;}
.community .list ul li a img{display:block;width:1rem;height:1rem;}
.community .list ul li a span{font:0.09rem/0.1rem "";}

.community .activity{margin-bottom:1rem;margin-top:0.4rem;margin-left:0.2rem;margin-right:0.2rem;}
.community .activity img{height:2.5rem;width:100%;display:block;}
.community .activity h5{margin-top:0.1rem;}
.community .activity ul{}
.community .activity ul li{display:flex;}
.community .activity ul li img{width:0.4rem;height:0.4rem;}
.community .activity ul li span{line-height:0.4rem;color:#ccc;}
</style>
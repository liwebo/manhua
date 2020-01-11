<template>
    <div class="detailsmy">
        <UcNav bgColor="none" :borderWidth="0" arrow="gray"></UcNav>
        <div class="xinxi">
            <ul>
                <div class="img"><img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15223140835abcab633b900.jpg"/></div>
                <li>
                    <span>野良神</span>
                    <b>安达渡嘉</b>
                </li>
                <button>少女</button>
                <button>日漫</button>
                <button>奇幻</button>
                <p>某个大陆，某个时代。大陆南北分割的战争结束了，世界走向了和平。在战争中作为军人的薇尔莉特丶伊芙加登，环抱着对她来说无比重要之人留下</p>
            </ul>
        </div>
         <h5>全部章节</h5>
        <div class="chapter">
            <ul>
                <li>
                    <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15226347535ac190013274d.png"/>
                    <span>第5话：囚徒与自动书记人偶</span>
                </li>
                
                <li>
                    <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15226347535ac190013274d.png"/>
                    <span>第4话：学者与自动书记人偶</span>
                </li>
                <li>
                    <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15226347535ac190013274d.png"/>
                    <span>第3话：青年与自动书记人偶</span>
                </li>
                <li>
                    <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15226347535ac190013274d.png"/>
                    <span>第2话：少女与自动书记人偶</span>
                </li>
                <li>
                    <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15226347535ac190013274d.png"/>
                    <span>第1话：小说家与自动书记人偶</span>
                </li>

            </ul>
        </div>
     <div class="box"></div>
    </div>
</template>

<script>
  import UcNav from '../components/uc-nav/uc-nav.vue'
export default {
    data(){return{}},
    components:{
        UcNav,
    },
    mounted(){},
    updated(){},
    methods:{}

}
</script>

<style scoped>
.detailsmy{width:100%;height:12rem;background:#f3f0f0;}
.detailsmy .box{height:0.8rem;width:100%;}
.detailsmy .xinxi{padding-top:0.3rem;padding-left:0.2rem;background:#fff;}
.detailsmy .xinxi ul{}
.detailsmy .xinxi ul li{}
.detailsmy .xinxi ul .img{width:2rem;height:2.5rem;float: left;margin-right:0.3rem;}
.detailsmy .xinxi ul .img img{width:100%;height:100%;display: block;}
.detailsmy .xinxi ul li span{display:block;font:700 0.3rem/0.5rem "";}
.detailsmy .xinxi ul li b{font: 0.25rem/0.5rem "";}
.detailsmy .xinxi ul button{margin-top:1.2rem;margin-left:0.1rem;background:none;border:none;border:0.01rem solid #ccc;color:#ccc;}
.detailsmy .xinxi ul p{color:#494949;font:0.25rem/0.5rem "";padding-top:0.2rem;padding-bottom:0.2rem;}

.detailsmy h5{line-height:0.6rem;text-indent:0.2rem;font-size:0.25rem;}

.detailsmy .chapter{background:#fff;width:100%;}
.detailsmy .chapter ul{padding-left:0.2rem;padding-top:0.2rem;}
.detailsmy .chapter ul li{background:#fff;height:1.3rem;border-bottom:0.01rem solid #e6e1e1;width:96%;margin-bottom:0.2rem;}
.detailsmy .chapter ul li img{display:block;width:1.1rem;height:1.1rem;float: left;}
.detailsmy .chapter ul li span{float: left;display: block;line-height:1.1rem;font-size:0.25rem;margin-left:0.2rem;}


</style>
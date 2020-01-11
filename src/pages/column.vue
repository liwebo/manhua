<template>
    <div class="column">
        <Header/>
        <!-- <router-view></router-view> -->
        <!-- <router-link to="/all"></router-link> -->
        <All/>
        <!-- <All_2/>  -->
    </div>
</template>

<script>
import All from '../components/all'
 import Header from '../layouts/header'


export default {
    data(){return{}},
    components:{
        Header,All
        
    },
    mounted(){
         this.$axios({
        url:'/api/column',
        params:{_page:1,_limit:9}
    }).then(
        res=>this.list=res.data.data
         )
    },
    updated(){},
    methods:{}

}
</script>

<style scoped>

</style>
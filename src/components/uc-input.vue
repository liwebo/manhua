<template>
  <div class="uc-input">
    <input :type="type" :value="value" @change="$emit('input',$event.target.value)"/>
    <span>{{label}}</span>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
       value:{
        type:String,
        default:''
      },
      label:{
        type:String,
        default:'标题'
      },
      type:{
        type:String,
        default:'标题'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{

    }
  }
</script>

<style scoped>
  
  .uc-input {
    height: 0.95rem;
    position: relative;
    /* border-bottom: 1px solid #e5e7e8; */
    
    width: 5.78rem;
    /* height: 1.92rem; */
    border: 1px solid #e5e7e8;
    background: #fff;
    margin: 0 auto;
    /* margin-top: 0.68rem; */
  }
  
  .uc-input input {
    padding-left: 1.24rem;
    width: 4.54rem;
    height: 100%;
    font-size: 0.4rem;
  }
  
  .uc-input span {
    width: 1.23rem;
    height: 0.49rem;
    position: absolute;
    top: 0.26rem;
    left: 0;
    border-right: 1px solid #676868;
    color: #676868;
    font-size: 0.25rem;
    line-height: 0.49rem;
    text-align: center;
  }
</style>

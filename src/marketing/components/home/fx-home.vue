<template>
  <div class="home">
    我是分销主页{{name}}
  </div>
</template>

<script>
export default {
  name: 'home',
  created(){
    console.log('组件创建了')
  },
  mounted(){
    console.log('组件挂载到DOM上了')
  },
  data (){
    return {
      name:'小强'
    }
  },
  methods:{
    art(){
      console.log('打印出来了')
    }
  },
  beforeDestroy(){
    //清除 例如 setInterval的数据
  }
}
</script>

<style lang="less" scoped>
@import '../../../base/base';

.home{
  font-size:38px;
  ul{
    list-style: none;
    li{
      display: inline-block;
    }
  }

}


</style>

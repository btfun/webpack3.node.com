<template>
  <div class="goodsInfo">
    666
  </div>
</template>

<script>
export default {
  name: 'goodsInfo',
  created(){
    console.log('组件创建了')
  },
  mounted(){
    console.log('组件挂载到DOM上了')
  },
  data (){
    return {
      name:'小明'
    }
  },
  methods:{
    art(){
      console.log('打印出来了')
    }
  }
}
</script>

<style lang="less" scoped>

.goodsInfo{
  font-size:38px;
  ul{
    list-style: none;
    li{
      display: inline-block;
    }
  }

}


</style>

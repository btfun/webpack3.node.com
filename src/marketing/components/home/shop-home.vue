<template>
  <div class="home">
    我是店铺主页-{{name}}++
<!-- 选择店铺 查询整页数据-->
<!-- 走马灯 店铺宣传图介绍-->
<!-- 店铺实景介绍-->
<!-- 店铺描述 -->
<!-- 店铺电话 -->
<!-- 店铺地址 -->
<!-- 店铺员工介绍 -->
<!-- 超值推荐 -->
<!-- 顾客评价 -->

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
      name:'小明'
    }
  },
  methods:{
    init(){
      console.log('打印出来了')
    },
    handleSelect(){
      //选择店铺
    },


  },
  beforeDestroy(){
    //清除 例如 setInterval的数据
  }
}
</script>

<style lang="less" scoped>

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

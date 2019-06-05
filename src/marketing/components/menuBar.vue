<template>
  <div class="bar">
    666
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    console.log('创建了')
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

.bar{
  font-size:38px;
  ul{
    list-style: none;
    li{
      display: inline-block;
    }
  }

}


</style>

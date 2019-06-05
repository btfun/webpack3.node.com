<template>
  <div>
    666
  </div>
</template>

<script>
export default {
  name: 'app',
  directives:{
    //自定义指令 v-load-more
    'load-more':{
        bind(el,binding){

        },
        inserted(){

        }
    }
  },
  created(){
    console.log('组件创建了')
  },
  mounted(){
    console.log('组件挂载到DOM上了')
  },
  mixins: [],//混合
  data (){
    return {
      name:'小明'
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

.app{
  font-size:38px;
  ul{
    list-style: none;
    li{
      display: inline-block;
    }
  }

}


</style>

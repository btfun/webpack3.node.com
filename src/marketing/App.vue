<template>
  <div class="init">
    <loading v-model="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import { Loading } from 'vux'
/*
* 初始化数据模块
**/
export default {
  name: 'init',
  components: {
    Loading
  },
  data (){
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../base/base';

.init {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

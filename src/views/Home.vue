<template>
  <div class="page">
主页
<el-button type="danger" @click="logout">退出登录</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
 
      }
    },
    methods:{
       logout(){
         sessionStorage.clear();
         this.$router.push('/login');
       }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>

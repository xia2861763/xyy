<template>
  <div>
    <div style="text-align: center">
      <img src="../assets/logo.png">
    </div>
    <div class="welcome-css">欢迎来到个人中心</div>
    <div>
      <button class="btn-css" type="button" @click="toAdd()">添加</button>
    </div>
  </div>
</template>

<script>
  import Add from './Add'

  export default {
    name: 'User',
    methods:{
      toAdd:function () {
        this.$router.push('/Add');
      }
    }
  }
</script>

<style scoped>
  .welcome-css{
    position: fixed;
    margin: 0 auto;
    top:40%;
    left: 0px;
    right: 0px;
    width: 130px
  }
  .btn-css{
    position: fixed;
    margin: 0 auto;
    left: 0px;
    right: 0px;
    top: 50%;
    width: 50px;
  }
</style>

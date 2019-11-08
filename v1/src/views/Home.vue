<template>
  <div>
    <router-view/>
    <ul class="footer">
      <li class="icons"><router-link :to="{name:'List'}">新闻列表</router-link></li>
      <li class="icons"><router-link :to="{name:'User'}">个人中心</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .footer{
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .icons{
    font-size: 16px;
    flex:1;
    text-align: center;
    border-top: solid 1px #42b983;
  }
  .bg{
    background:#42b983;
  }
  a {
    text-decoration: none;
  }
  a.active{
    display: block;
    color: red;
    background: #42b983;
  }
</style>

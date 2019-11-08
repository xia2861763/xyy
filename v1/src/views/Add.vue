<template>
  <div>
    <div style="margin:30px 0px 0px 20px">
      <p>标题</p>
      <input style="width: 80%" type="text" v-model="title">
      <p style="margin-top: 10px">内容</p>
      <textarea style="width: 80%;height: 100px" type="text" v-model="content"></textarea>
    </div>
    <div style="margin-top: 30px;text-align: center">
      <button style="width: 60px;font-size: 16px" type="button" @click="add()">添加</button>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'Add',
    store,
    data(){
      return{
        title:'',
        content:''
      }
    },
    methods:{
      add:function () {
        if(this.title==''){
          alert("标题不能为空");
          return;
        }
        if(this.content==''){
          alert("内容不能为空");
          return;
        }
        store.commit('addItem',{
          title:this.title,
          content:this.content
        })
        this.title='';
        this.content='';
        this.$router.push('/Home/List')
      }
    }
  }
</script>

<style scoped>

</style>

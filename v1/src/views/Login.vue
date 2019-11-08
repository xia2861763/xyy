<template>
  <div>
    <form v-if="!isReg">
      <div style="margin-left: 20px;margin-top: 30px">
        <div>用户名</div>
        <div>
          <input class="input-width" type="text" v-model="username">
        </div>
        <div style="margin-top: 10px">密码</div>
        <div>
          <input class="input-width" type="text" v-model="password">
        </div>
      </div>
      <div class="bottom-button">
        <button class="left-btn" type="button" @click="login()">登录</button>
        <button class="right-btn" type="button" @click="reg()">注册</button>
      </div>
      <div>
        <div style="margin-left: 20px;margin-top: 30px">
          <div style="margin-top: 10px">公积金缴存额</div>
          <div>
            <input class="input-width" type="text" v-model="restAmout">
          </div>
          <div style="margin-top: 10px">缴存时间（月）</div>
          <div>
            <input class="input-width" type="text" v-model="saveTime">
          </div>
          <div style="margin-top: 10px">缴存时间系数</div>
          <div>
            <input class="input-width" type="text" v-model="caltimexs">
          </div>
          <div style="margin-top: 10px">贷款额度</div>
          <div>
            <input class="input-width" type="text" v-model="calloanAmout">
          </div>
        </div>
        <button style="margin: 20px 0px 0px 20px" type="button" @click="test()">测试页面</button>
      </div>
    </form>
    <form v-else>
      <div style="margin-top: 30px;margin-left: 20px">
        <div>用户名</div>
        <div>
          <input class="input-width" type="text" v-model="username">
        </div>
        <div style="margin-top: 10px">密码</div>
        <div>
          <input class="input-width" type="text" v-model="password">
        </div>
        <div style="margin-top: 10px">再次输入密码</div>
        <div>
          <input class="input-width" type="text" v-model="repeatPwd">
        </div>
        <div class="bottom-button">
          <button class="left-btn" type="button" @click="addUser()">确定</button>
          <button class="right-btn" type="button" @click="cancel()">取消</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        isReg: false,
        username: '',
        password: '',
        repeatPwd: '',
        restAmout: '',
        saveTime: '',
        timexs: '',
        loanAmout: ''
      }
    },
    methods: {
      login: function () {
        if (this.username === localStorage.getItem('username') && this.password === localStorage.getItem('password')) {
          this.username = ''
          this.password = ''
          this.$router.push('/Home/List')
        } else {
          alert('用户名或密码不正确')
        }
      },
      reg: function () {
        this.isReg = true
      },
      cancel: function () {
        this.isReg = false
      },
      addUser: function () {
        if (this.password == this.repeatPwd) {
          localStorage.setItem('username', this.username)
          localStorage.setItem('password', this.password)
          this.username = ''
          this.password = ''
          this.repeatPwd = ''
          this.isReg = false
        } else {
          alert('密码输入不一致')
        }
      },
      test () {
        this.$router.push('/BsTest')
      }
    },
    computed: {
      caltimexs () {
        if (this.saveTime != '' && this.saveTime != 0) {
          if (this.saveTime < 6) {
            this.timexs = 0
          } else if (this.saveTime >= 6 && this.saveTime <= 12) {
            this.timexs = 0.5
          } else if (this.saveTime > 12 && this.saveTime <= 24) {
            this.timexs = 0.8
          } else if (this.saveTime > 24 && this.saveTime <= 36) {
            this.timexs = 1
          } else if (this.saveTime > 36 && this.saveTime <= 60) {
            this.timexs = 1.2
          } else {
            this.timexs = 1.5
          }
          return this.timexs;
        }else{
          return 0;
        }
      },
      calloanAmout: function () {
        if (this.restAmout != '' && this.restAmout != 0 && this.saveTime != '' && this.saveTime != 0) {
          // 贷款额度=（借款人公积金缴存余额+配偶公积金缴存余额）×20倍×缴存时间系数
          this.loanAmout = parseFloat(this.restAmout) * 20 * parseFloat(this.timexs)
        }else {
          this.loanAmout=0;
        }
        return this.loanAmout;
      }
    }
  }
</script>

<style scoped>
  .bottom-button {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-content: center;
    margin: 100px 50px 0px 50px;
  }

  .left-btn {
    width: 40%;
    height: 30px;
    background: #42b983;
    border-radius: 5px;
  }

  .right-btn {
    width: 40%;
    height: 30px;
    background: bisque;
    border-radius: 5px;
  }

  .title-css {
    width: 100%;
  }

  .input-width {
    width: 90%;
  }
</style>

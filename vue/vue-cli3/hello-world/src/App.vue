<template>
  <div id="app" class="login-box">
    <Login v-show="action === 'login'"></Login>
    <Regis v-show="action === 'regis'"></Regis>
    <div v-show="action === 'login'">
      <el-button type="primary" v-on:click="login">登录</el-button>
      <el-button type="primary" v-on:click="action='regis'">免费注册点这里</el-button>
    </div>
    <div v-show="action === 'regis'">
      <el-button type="primary" v-on:click="regis">注册</el-button>
      <el-button type="primary" v-on:click="action='login'">已有账号，点击登录</el-button>
    </div>
  </div>
</template>

<script>
import Login from './components/login.vue'
import Regis from './components/regis.vue'

export default {
  name: 'app',
  components: {
    Login,
    Regis
  },
  data: () => {
    return {
      action: 'login'
    }
  },
  methods: {
    regis: (event) => {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    login: (event) => {
      console.log("ss")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login-box {
    margin: 0 auto;
    width: 290px;
    background: #ebf1f6;
    height: 360px;
    padding: 50px 35px 0px 35px;
}
</style>

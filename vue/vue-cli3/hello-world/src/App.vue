<template>
  <div id="app" class="login-box">
    <Login v-show="action === 'login'" v-on:actionToRegis="action = 'regis'"></Login>
    <Regis v-show="action === 'regis'" v-on:actionToLogin="action = 'login'"></Regis>
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
    width: 350px;
    background: #ebf1f6;
    height: 360px;
    padding: 20px 35px 0px 35px;
}
</style>

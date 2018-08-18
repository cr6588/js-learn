<template>
<div>
    <div>注册</div>
    <div>
        <el-input placeholder="电话" prefix-icon="el-icon-phone" clearable v-model="user.phone"> </el-input>
        <el-input type="password" placeholder="密码" clearable v-model="user.password"> </el-input>
        <el-input type="password" placeholder="重复密码" clearable v-model="user.repeatPassword"> </el-input>
    </div>
    <div>
        <el-button type="primary" v-on:click="regis">注册</el-button>
        <el-button type="primary" v-on:click="$emit('actionToLogin')">已有账号，点击登录</el-button>
    </div>
</div>
</template>
<script>
export default {
  name: 'regis',
  data: function () {
      return {
          user: {
              phone: "",
              password: "",
              repeatPassword: ""
          }
      }
  },
  methods: {
      regis: function () {
          this.$axios.post('/user', user)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

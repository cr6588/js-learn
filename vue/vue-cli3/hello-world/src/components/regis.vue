<template>
<div>
    <div>注册</div>
    <div>
        <el-input placeholder="电话" prefix-icon="el-icon-phone" clearable> </el-input>
        <el-input type="password" placeholder="密码" clearable> </el-input>
        <el-input type="password" placeholder="重复密码" clearable> </el-input>
    </div>
    <div>
        <el-button type="primary">注册</el-button>
        <el-button type="primary" v-on:click="actionToLogin">已有账号，点击登录</el-button>
    </div>
</div>
</template>
<script>
export default {
  name: 'regis',
  methods: {
      actionToLogin: function (e) {
          this.$parent.action = 'login'
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

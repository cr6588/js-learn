<template>
<div>
    <div>登录</div>
    <div>
        <el-input placeholder="电话" prefix-icon="el-icon-phone" clearable> </el-input>
        <el-input type="password" placeholder="密码" clearable> </el-input>
    </div>
    <div>
        <el-button type="primary">登录</el-button>
        <el-button type="primary" v-on:click="actionToRegis">免费注册点这里</el-button>
    </div>
</div>
</template>
<script>
export default {
  name: 'login',
  methods: {
      actionToRegis: function (e) {
          this.$parent.action = 'regis'
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

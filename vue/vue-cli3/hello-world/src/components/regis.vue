<template>
  <div>
      <div>注册</div>
      <div>
        <el-input
          placeholder="电话"
          prefix-icon="el-icon-phone"
          clearable>
        </el-input>
        <el-input
          type="password"
          placeholder="密码"
          clearable>
        </el-input>
        <el-input
          type="password"
          placeholder="重复密码"
          clearable>
        </el-input>
      </div>
  </div>
</template>

<script>
export default {
  name: 'regis'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

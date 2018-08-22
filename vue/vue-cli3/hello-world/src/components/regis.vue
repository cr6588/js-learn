<template>
<div>
    <el-form :model="user" :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
        <el-form-item>
            <el-button type="primary" icon="el-icon-back" v-on:click="$emit('actionToLogin')"></el-button>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
            <el-input clearable v-model="user.username" auto-complete="off"> </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" clearable v-model="user.password" auto-complete="off"> </el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeatPassword">
            <el-input type="password" clearable v-model="user.repeatPassword" auto-complete="off"> </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" v-on:click="regis('user')">注册</el-button>
            <el-button @click="resetForm('user')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    name: "regis",
    data: function () {
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.user.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            user: {
                username: "",
                password: "",
                repeatPassword: ""
            },
            rules: {
                username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },{
                        min: 6,
                        max: 16,
                        message: '长度在6到16位',
                        trigger: 'blur'
                    },
                    {
                        len: 11,
                        message: '长度11位',
                        trigger: 'blur'
                    }
                ],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                },{
                    min: 6,
                    max: 16,
                    message: '长度在6到16位',
                    trigger: 'blur'
                }],
                repeatPassword: [{
                        required: true,
                        message: '请输入重复密码',
                        trigger: 'blur'
                    },{
                        min: 6,
                        max: 16,
                        message: '长度在6到16位',
                        trigger: 'blur'
                    },
                    {
                        validator: validatePass2,
                        trigger: 'blur'
                    }
                ]
            },
            // succMsg: function(msg) {
            //     this.$message({
            //         message: msg,
            //         type: 'success'
            //         })
            // },
            // errMsg: function(msg) {
            //     this.$message.error(msg);
            // },
        };
    },
    methods: {
        regis: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    return false;
                }
                var vue = this;
                this.$axios.post('/user/regis', this.user)
                    .then(function (res) {
                        var data = res.data
                        if(data.code == 0) {
                            vue.$message({
                                message: "注册成功",
                                type: 'success'
                            })
                        } else {
                            vue.$message.error(data.msg);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

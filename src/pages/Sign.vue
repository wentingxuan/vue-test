<template>
  <div class="sign-page">
    <div class="title">注册</div>
    <div class="sign-con">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <a @click="goLogin()" class="sign-link">已有账户？去登录</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else if(value > 120){
              callback(new Error(''));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPassword !== '') {
            this.$refs.ruleForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          password: '',
          checkPassword: '',
          age: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPassword: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { required: true, validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var $this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let userInfo = {
                name: $this.ruleForm.username,
                password: $this.ruleForm.password,
                age: $this.ruleForm.age
            };
            this.$cookies.set('userInfo',userInfo);
            this.$router.push('/');
//            this.$axios
//              .post('./js/active.js', {
//                name: $this.ruleForm.username,
//                password: $this.ruleForm.password,
//                age: $this.ruleForm.age
//              })
//              .then(response => {
//                if (response.code === 200) {
//                  // 提交成功将要执行的代码
//                }
//              })
//              .catch(function(error) {
//                // console.log(error)
//              })
          }else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goLogin(){
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  .sign-con{
    margin: 10px;
    width: 50%;
    /*padding: 52px;*/
    padding-left: 20px;
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0px 3px 15px #888888;*/
  }
  .title{
    width: 100%;
    height:48px;
    line-height:48px;
    text-align: left;
    background: darkslategrey;
    color: #ffff;
    padding-left: 20px;
    font-size:24px;
  }
</style>

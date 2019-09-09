<template>
  <div class="login">
    <div class="login-con">
      <!--label-width 设置el-form中input的margin-left值-->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" aria-placeholder="请使用邮箱登录">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password">
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <!--<el-button @click="resetForm('ruleForm')">取消</el-button>-->
        </div>
        <p class="login-tips" style="font-size: 12px">Tips : 用户名developer开发，admin超级管理员，editor编辑。</p>
      </el-form>
      <!--<router-link :to="Sign.vue">立即注册</router-link>-->
      <!--<a @click="joinSign()" class="sign-link">立即注册</a>-->
    </div>
  </div>
</template>

<script>
  const isWscnEmail =(str)=>  {
    const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/i;
    return reg.test(str.trim());
  };
  const validateEmail = (rule, value, callback) => {
    if (!isWscnEmail(value)) {
      callback(new Error('请输入正确的合法邮箱'));
    } else {
      callback();
    }
  };
  import store from './../store'
  export default {
    name: 'Login',
    data() {
      return {
        ruleForm: {
          username: 'admin@126.com',
          password: '123456'
        },

        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {message: '使用邮箱格式', trigger: 'blur',validator: validateEmail }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在6 到 12 个字符', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('LoginByEmail', this.ruleForm).then(() => {
              this.$router.push('/dashboard')
            }).catch(err => {
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      joinSign(){
        this.$router.push('/Sign')
      }
    }
  }
</script>
<style>
  .login-con{
    margin: 100px auto;
    width: 26%;
    padding: 52px;
    padding-bottom:20px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 15px #888888;
    background: #ffffff;
    opacity: .8;
  }
  .login{
    padding-top:80px;
    height:100%;
    background: url("../assets/login_bg.jpg");
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
  }
  .sign-link{
    float: right;
    text-decoration: underline;
    cursor: pointer;
  }
  .sign-link:hover{
    color:blue;
  }
</style>



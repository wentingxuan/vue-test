<template>
  <div class="form-wrap">
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="用户标识" prop="userId">
        <el-input v-model="ruleForm.userId"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男" value="1"></el-radio>
          <el-radio label="女" value="2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        <el-button @click="backList()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {
      ElFormItem,
    },
    data() {
      return {
        ruleForm: {
          userName: '',
          userId:'',
          sex:''
        }
      };
    },
    inject:['goBack'],
    mounted(){

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      backList(){
        this.goBack();
      }
    }
  }
</script>

<template>
    <div class="form-wrap">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="输入框" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="下拉框" prop="address">
          <el-select v-model="ruleForm.address" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="级联选择框">
          <el-cascader
            :options="options"
            placeholder="试试搜索：指南"
            :props="{ multiple: true, checkStrictly: true }"
            clearable filterable></el-cascader>
        </el-form-item>
        <div class="tips">
          <div>disabled:是否禁用</div>
          <div>clearable:是否支持清空选项</div>
          <div>show-all-levels:输入框中是否显示选中值的完整路径</div>
          <div>filterable:是否可搜索选项</div>
          <div>collapse-tags:多选模式下是否折叠Tag</div>
        </div>
        <el-form-item label="多选框" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="开关" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <div class="line-splice"></div>
        <el-form-item label="滑块" prop="slideData">
          <el-slider v-model="ruleForm.slideData" :format-tooltip="formatTooltip"></el-slider>
        </el-form-item>
        <el-form-item label="评分">
          <el-rate
            v-model="ruleForm.rateValue"
            :colors="ruleForm.colors"
            allow-half>
          </el-rate>
        </el-form-item>
        <div class="tips">
          <div>disabled:是否为只读</div>
          <div>allow-half:是否允许半选</div>
          <div>show-score:是否显示当前分数</div>
        </div>
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
          <el-button @click="backList()">返回</el-button>
        </el-form-item>
      </el-form>
      <test-toast></test-toast>
      <test-panel></test-panel>
    </div>
</template>

<script>
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
  import TestToast from "../plugin/toast.vue";
  import TestPanel from "../plugin/panel.vue";


  export default {
    name:'表单管理',
    components: {
      TestPanel,
      TestToast,
      ElFormItem
    },
    data() {
      return {
        ruleForm: {
          userName: '',
          address: '',
          date: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          slideData: 48,
          rateValue:null,
          colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        },
        rules: {
          userName: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        options:[]
      };
    },
    inject:['goBack'],
    mounted(){
      this.getFormData();
      this.$refs.toast.toastPlugin('一个测试丫丫',2388)
    },
    methods: {
      editParams(){
        let $this = this;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.goBack();
//            this.$options.methods.backList();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      backList(){
        this.goBack();
      },
      formatTooltip(val) {
        return val / 100;
      },
      getFormData(){
        let $this = this;
        this.$axios.get('api/getFormData')
          .then(response => {
            let $data = response.data.data.list;
            $this.options = $data;
          })
      }
    }
  }
</script>

<style>
  .form-wrap{
    width:60%;
    padding-top:40px;
  }
  .line-splice{
    width: 100%;
    margin-bottom:10px;
    border:1px dashed #0d3349;
    margin-left:8px;
  }
  .tips{
    margin-left: 60px;
    background: cadetblue;
    color: #ffffff;
    font-size: 14px;
    padding-left: 10px;
    line-height: 23px;
  }
</style>


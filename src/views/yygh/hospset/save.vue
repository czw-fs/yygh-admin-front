<template>
  <div class="app-container">
    <el-form label-width="120px" :rules="rules" :model="hospset" ref="vvv">
      <el-form-item label="医院名称" prop="hosname">
        <el-input v-model="hospset.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospset.hoscode"/>
      </el-form-item>
      <el-form-item label="api地址">
        <el-input v-model="hospset.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="hospset.contactsName"/>
      </el-form-item>
      <el-form-item label="电话" prop="contactsPhone">
        <el-input v-model="hospset.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate('vvv')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import hospset from "@/api/hospset.js";

export default {
    data() {
        return {
            saveBtnDisabled:false,
            hospset: {},
            rules: {
                hosname: [
                    { required: true, message: '请输入医院名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                contactsPhone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
                ]
            }

        };
    },

    methods: {
      saveOrUpdate(formName){

        this.$refs[formName].validate((valid) => {
          if (valid){
            this.saveBtnDisabled = true;

              if(!this.hospset.id){
                hospset.addHostipal(this.hospset).then((resp) => {
                this.$message({
                type: 'success',
                  message: '保存成功!'
                })
                //路由跳转
                this.$router.push('/yygh/hospset/list')
              })
              }else{
                hospset.update(this.hospset).then(resp=>{
                  this.$message({
                    type: 'success',
                    message: '修改成功!'
                    });
                    //路由跳转
                    this.$router.push('/yygh/hospset/list')
                })
              }
          } else {
            this.$message.error("表单填写有误");
            return false;
          }
        });
      }
    },
    created() {
      if(this.$route.params && this.$route.params.id){
        let id = this.$route.params.id;
        hospset.detail(id).then(resp=>{
          this.hospset = resp.data.item;
        })
      }
    },
}
</script>


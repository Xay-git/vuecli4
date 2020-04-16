<template>
  <div class="login_container">
    <div class="login_box">
    
      <div class="box">
        <div class="avatar_box">
          <img src="../assets/logo.png" />
        </div>
      </div>
      <div class="box_form">
      <el-form :model="loginForm" ref="loginForm" :rules="rules" >
            <el-form-item  prop="userName">
            <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" type="password"  v-model="loginForm.password"   placeholder="请输入密码"></el-input>
            </el-form-item>

             <el-form-item class="form_button" >
               <el-button type="primary" @click="login">登录</el-button>
               <el-button type="info" @click="reset">重置</el-button>
            </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
var _this;
export default {
  data () {
    return {
      loginForm:{
        userName:'admin',
        password:'111111'
      },
      rules:{
        //验证用户名是否合法
         userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
      }
 }  
 },
 mounted(){
   _this = this;
 },
 methods:{
   reset(){
     this.$refs.loginForm.resetFields();
   },
   login(){
     this.$refs.loginForm.validate((valid)=>{
       if(!valid) return;
       request.post('/loginSubmit',_this.loginForm).then(res=>{
         app.success('登录成功');
         sessionStorage.setItem('token',res.data.data.token);
         _this.$router.push('/home');
       })
     })
   }
 }
 }
</script>

<style scoped lang="less">
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
}
.login_box {
  width: 450px;
  height: 350px;
  background: #fff;
  border-radius: 3px;

  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background-color: #ffffff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.box_form{
    transform: translateY(-20%);
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .form_button{
      display: flex;
      justify-content: flex-end;
    }
}
</style>

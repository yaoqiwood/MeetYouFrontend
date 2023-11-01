<template>
  <div class="login-background">
    <el-card class="login-card">
      <el-form ref="loginForm" label-position="right" :model="loginForm" class="login-form" label-width="70px">
        <el-form-item label="用户名：">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item v-if="showCaptcha" label="验证码：">
          <el-input v-model="loginForm.captcha"></el-input>
        </el-form-item>
        <el-button type="primary" style="width: 80%; left: -50% ;transform: translateX(13%)" @click="handleSubmit">登录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: ' LoginForm',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        captcha: '',
      },
      loginAttempts: 0,
      showCaptcha: false,
    };
  },
  methods: {
    handleSubmit() {
      // 登录逻辑
      // 如果登录失败，增加 loginAttempts
      // 如果 loginAttempts >= 3，显示验证码
    },
  },
  watch: {
    loginAttempts(val) {
      if (val >= 3) {
        this.showCaptcha = true;
      }
    },
  },
};
</script>

<style scoped>
.login-background {
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-image: url("~@/assets/background.jpg");
}

.login-card {
  width: 400px;
  height: auto;
  margin-right: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.el-button {
  width: 80%;
  margin: 0 auto;
}


</style>

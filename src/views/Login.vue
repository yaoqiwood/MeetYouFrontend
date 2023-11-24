<template>
  <div class="login-background">
    <el-card class="login-card">
      <el-form ref="loginForm"
               label-position="right"
               :model="loginForm"
               class="login-form"
               label-width="70px"
               :rules="loginRules">
        <el-form-item label="用户名："
                      prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password"
                    placeholder="请输入密码"
                    v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item v-if="showCaptcha"
                      label="验证码：">
          <el-row gutter="20">
            <el-col :span="17"> <!-- 增加 input 框的宽度 -->
              <el-input v-model="loginForm.captcha"
                        placeholder="请输入验证码"
                        style="width: 100%;"></el-input> <!-- 设置宽度为 100% -->
            </el-col>
            <el-col :span="7"> <!-- 减少图片的宽度 -->
              <img :src="captChaUrl"
                   style="height: 35px; cursor: pointer; border-radius: 10px"
                   @click="refreshCaptcha"
                   alt=""/>
            </el-col>
          </el-row>
        </el-form-item>


        <el-button type="primary"
                   style="width: 80%; left: -50% ;transform: translateX(13%)"
                   @click="handleSubmit">登录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import userApi from '@/api/userApi'
import systemApi from "@/api/systemApi";
import systemUtils from "@/utils/systemUtils";
import htmlUtils from "@/utils/htmlUtils";

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
      // showCaptcha: true,
      captChaUrl: `${process.env.VUE_APP_BASE_API_URL}/getCaptcha`
    };
  },
  mounted() {
    // console.log(systemUtils.isTempTokenExist())
    if (!systemUtils.isTempTokenExist()) {
      systemApi.getUUIDToken().then(resp => {
        systemUtils.setTempToken(resp['tempToken'])
        // console.log(systemUtils.getTempToken())
      })
    }
  },
  methods: {
    handleSubmit() {
      // 登录逻辑
      let loginInf = {}
      loginInf['webUsername'] = this.loginForm.username
      loginInf['webPassword'] = this.loginForm.password
      loginInf['captCha'] = this.loginForm.captcha
      userApi.login(loginInf).then(resp => {
        this.$alert(htmlUtils.buildHtmlStr(resp.message), '提示', {
          dangerouslyUseHTMLString: true
        });
      }).catch(error => {
        console.log(error)
        this.$alert(htmlUtils.buildHtmlErrorStr(error.response['data']), '提示', {
          dangerouslyUseHTMLString: true
        });
      })
      // 如果登录失败，增加 loginAttempts
      // 如果 loginAttempts >= 3，显示验证码

    },
    refreshCaptcha() {
      this.captChaUrl = `${process.env.VUE_APP_BASE_API_URL}/getCaptcha?${new Date().getTime()}`
    }
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

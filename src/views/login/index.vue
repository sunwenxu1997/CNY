<template>
  <div class="login">
    <div class="login-content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <van-form @submit="toLogin">
        <van-cell-group>
          <van-field
            v-model.trim="form.username"
            label="账号"
            placeholder="请输入账号"
            :rules="rules.username"
            :error="false"
          />
          <van-field
            v-model.trim="form.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :rules="rules.password"
            :error="false"
          />
          <van-field
            v-model.trim="form.verifyCode"
            type="text"
            label="验证码"
            :error="false"
            placeholder="请输入验证码"
            :rules="rules.verifyCode"
          >
            <template #button>
              <div class="verifly-code" @click="updateVerificationCode">
                <img :src="`${BASE_URL}/user/sys_users/verify_code?_t=${t}`" alt="" />
              </div>
            </template>
          </van-field>
        </van-cell-group>
        <van-button :loading="loading" type="info" block class="login-btn" native-type="submit">登 录</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_API,
      loading: false,
      t: Date.now(),
      form: {
        username: '',
        password: '',
        verifyCode: ''
      },
      redirect: undefined,
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'onBlur' }],
        // 密码
        password: [{ required: true, message: '请输入密码', trigger: 'onChange' }],
        // 验证码
        verifyCode: [{ required: true, message: '请输入验证码', trigger: 'onChange' }]
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    toLogin() {
      if (this.loading) return
      this.loading = true
      console.log(this.form)
      this.$store
        .dispatch('user/login', this.form)
        .then(() => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' })
        })
        .catch(() => {
          this.loading = false
          this.updateVerificationCode()
        })
    },
    updateVerificationCode() {
      this.t = Date.now()
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 30vw;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.login {
  height: 100vh;
  display: grid;
  place-content: center;
  &-content {
    margin-top: -15vh;
    padding: 1.5rem;
    box-sizing: border-box;
  }
  &-btn {
    margin-top: 4rem;
  }
  .verifly-code {
    width: 7rem;
    // height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

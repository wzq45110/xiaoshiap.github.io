<template>
  <div class="mainlogoin">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">登陆</div>
      <div class="dkfhhfug" @click="gozhuce">注册</div>
    </div>
    <!-- 内容 -->
    <div class="neirong">
      <van-cell-group :border="false">
        <van-field
          v-model="loginname"
          placeholder="请输入用户名"
          label="用户名"
          left-icon="contact"
          autosize
          size="large"
        />

        <van-field
          v-model="password"
          placeholder="请输入密码"
          label="密码"
          left-icon="orders-o"
          autosize
          size="large"
          type="password"
        />
      </van-cell-group>
    </div>
    <!-- 登陆按钮 -->
    <div class="buttontt" @click="handleClick">确认登陆</div>
    <!-- 忘记密码 -->
    <div class="forgetpas" @click="gomima">忘记密码</div>
    <!-- 底部栏 -->
    <div class="dibu">
      <van-divider :style="{ color: '#808080', borderColor: '#808080', padding: '0 16px' }">快捷登陆</van-divider>
    </div>
    <!--图标  -->
    <div class="tubiao">
      <div class="kuangyi">
        <span class="dhe">
          <img src="../assets/images/wx.png" alt />
        </span>

        <span>微信登陆</span>
      </div>
      <div class="kuangyi">
        <span class="dhe">
          <img src="../assets/images/QQ.png" alt />
        </span>
        <span>QQ登陆</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginname: '13828776965',
      password: '123456'
    }
  },
  created() {},
  methods: {
    // 去注册
    gozhuce() {
      this.$router.push({
        path: '/zhuce'
      })
    },
    gomima() {
      this.$router.push({
        path: '/forget'
      })
    },
    // 点击登陆按钮
    async handleClick() {
      // 判断用户名 密码是否为空
      if (this.loginname === '') {
        this.$toast('请输入用户名')
        return
      }
      if (this.password === '') {
        this.$toast('请输入密码')
        return
      }
      // 发请求登陆
      let post = {
        loginname: this.loginname,
        password: this.password
      }
      // JSON.stringify(post)
      const { data: res } = await this.$http.post('Login/login', {
        post: JSON.stringify(post)
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('登陆失败!')

      this.$toast('登陆成功')
      // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
      //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
      //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
      window.sessionStorage.setItem('token', res.token)
      // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
      this.$router.push('/home')

      // var params = new URLSearchParams()
      // params.append("loginname", JSON.stringify(this.loginname))
      // params.append("password", JSON.stringify(this.password))
      // this.axios
      //   .post(
      //     "http://test.tuolve.com/xinliliang/web//tl_api.php?s=/Login/login",
      //     params
      //   )
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>

<style lang='less' scoped>
.mainlogoin {
  position: relative;
  width: 100%;

  // 标题
  .dingtiiti {
    position: fixed;
    z-index: 120;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    top: 0;
    .fanhuian {
      position: absolute;
      top: 50%;
      color: #fff;
      left: 10px;
    }
    .dkfhhfug {
      position: absolute;
      top: 35px;
      right: 10px;
      font-size: 18px;
      color: #fff;
    }
    .yiuiui {
      position: absolute;
      font-size: 20px;
      color: #fff;
      left: 50%;
      top: 45%;
      transform: translate(-50%);
    }
  }
  // 内容
  .neirong {
    position: absolute;
    width: 80%;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
  // 按钮
  .buttontt {
    top: 300px;
    width: 80%;
    height: 40px;
    border-radius: 20px;
    background-color: #ff7900;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
  // 忘记密码
  .forgetpas {
    top: 350px;
    color: #ccc;
  }
  .forgetpas,
  .tubiao,
  .buttontt,
  .dibu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .dibu {
    width: 50%;
    height: 30px;
    top: 500px;
    // background-color: pink;
  }
  .tubiao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 570px;
    width: 50%;
    height: 40px;
    // background-color: pink;
    .kuangyi {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 50px;
      height: 65px;
      color: #aaaaaa;
      .dhe {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>

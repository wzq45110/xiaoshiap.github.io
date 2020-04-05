<template>
  <div class="mianforget">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="godeng">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">修改密码</div>
    </div>
    <!-- 内容 -->
    <div class="neirong">
      <van-cell-group :border="false">
        <van-field
          v-model="loginname"
          placeholder="请输入手机号"
          left-icon="contact"
          autosize
          size="large"
        />

        <van-field
          v-model="newpassword"
          placeholder="请输入密码"
          left-icon="orders-o"
          autosize
          size="large"
          type="password"
        />
        <van-field
          v-model="regnewpassword"
          placeholder="确认密码"
          left-icon="orders-o"
          autosize
          size="large"
          type="password"
          @blur="shiqujiao"
        />
        <van-field v-model="type" placeholder="请输入6位验证码" left-icon="column" size="large">
          <van-button
            slot="button"
            size="small"
            @click="getduanxin"
            :disabled=" loginname === '' || newpassword ==='' ||   regnewpassword=== ''   ? true : false"
          >获取短信</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 确认 -->
    <!-- <div class="buttontt" @click="godeng">确认</div> -->
    <button
      class="buttontt"
      @click="zhuceuse"
      :style="{'background-color': loginname === '' ||  code ===''  || newpassword ==='' ||   regnewpassword=== ''  ? '#ccc':'#ff7900'}"
      :disabled=" loginname === '' ||  code ===''  || newpassword ==='' ||   regnewpassword=== ''   ? true : false"
    >确认修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 发送短信type值
      type: '',
      // 用户手机号
      loginname: '',
      // 新密码
      newpassword: '',
      // 确认新密码
      regnewpassword: '',
      // code验证码
      code: '',
      // codeid唯一值
      codeid: ''
    }
  },
  created() {},

  methods: {
    godeng() {
      this.$router.push({
        path: '/login'
      })
    },
    shiqujiao() {
      if (!(this.newpassword === this.regnewpassword)) {
        return this.$toast('两次密码不同')
      }
    },
    // 触发获取短信 调用接口
    async getduanxin() {
      // let post = {
      //   phone: this.phone
      // }
      const { data: res } = await this.$http.post('Code/get_code', {
        phone: this.loginname,
        type: this.type
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast.fail('获取失败')
      // 发送成功之后
      console.log(res.arr.url)
      let urlarr = res.arr.url.split('=')
      // 验证码提取赋值
      this.code = urlarr[6]
        .split('&')[0]
        .split(':')[1]
        .substring(0, 6)
      this.codeid = res.code_id
    },
    // 点击确认修改 发起请求(请求显示验证码无效)
    async zhuceuse() {
      let post = {
        loginname: this.loginname,
        new_password: this.newpassword,
        re_new_password: this.regnewpassword,
        code: this.code
        // code_id: this.codeid
      }
      // 获取token
      // let tokenStr = window.sessionStorage.getItem("token")
      const { data: res } = await this.$http.post('Login/reget_password', {
        post: JSON.stringify(post),
        code_id: this.codeid
      })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.mianforget {
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 380px;
    width: 80%;
    height: 40px;
    border-radius: 20px;
    background-color: #ff7900;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
  }
}
</style>

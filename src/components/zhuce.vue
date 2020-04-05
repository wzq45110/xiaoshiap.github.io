<template>
  <div class="mainzhuce">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="godenlu">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">注册</div>
      <div class="dkfhhfug" @click="godenlu">登陆</div>
    </div>
    <!-- 内容 -->
    <div class="neirong">
      <van-cell-group :border="false">
        <van-field
          v-model="infoiphone.phone"
          placeholder="请输入手机号"
          left-icon="graphic"
          size="large"
          maxlength="11"
          show-word-limit
          @input="sdosdj"
        />
        <van-field
          v-model="possword"
          placeholder="请输入密码"
          left-icon="orders-o"
          autosize
          size="large"
          type="password"
          @input="sdosdj"
        />
        <van-field
          v-model="newpossword"
          placeholder="确认密码"
          left-icon="orders-o"
          autosize
          size="large"
          type="password"
          @blur="shiqujiao"
          @input="sdosdj"
        />
        <van-field
          @focus="shiqujiao"
          v-model="infoiphone.type"
          placeholder="请输入6位验证码"
          left-icon="column"
          size="large"
          @input="sdosdj"
        >
          <van-button
            slot="button"
            size="small"
            @click="getduanxin"
            :disabled="infoiphone.phone === ''|| possword ==='' ||  newpossword === ''  ? true : false"
          >获取短信</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 协议 -->
    <div class="xieyi">
      <span>
        <van-checkbox
          v-model="checked"
          checked-color="#FF7900"
          :disabled="infoiphone.phone === '' ||  infoiphone.type ===''  || possword ==='' ||  newpossword === ''  ? true : false"
        >点击注册代表您同意</van-checkbox>
      </span>
      <span style="color:#FF7900" @click="gohomenei">《霸王到用户服务条款》</span>
    </div>

    <!-- 注册按钮 -->
    <!-- <div class="buttontt" :style="{'background-color': checked ? '#FF7900':'#ccc'}">注册账号</div> -->
    <button
      class="buttontt"
      :style="{'background-color': checked ? '#FF7900':'#ccc'}"
      :disabled=" infoiphone.phone === '' ||  infoiphone.type ===''  || possword ==='' ||  newpossword === ''  ? true : false"
      @click="zhuceuse"
    >注册账号</button>
    <!-- 文字 -->
    <div class="wenzi">收不到短信</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      // 用户输入手机号
      infoiphone: {
        // 即账号
        phone: '',
        // 验证码 number
        type: ''
      },
      // 密码
      possword: '',
      // 新密码
      newpossword: '',
      // 获取验证码的code值
      code: ''
    }
  },
  created() {
    // this.getduanxin()
  },
  methods: {
    godenlu() {
      this.$router.go(-1)
    },
    shiqujiao() {
      if (!(this.possword === this.newpossword)) {
        return this.$toast('两次密码不同')
      }
    },
    // 去条款页面
    gohomenei() {
      this.$router.push({
        path: '/sertiao'
      })
    },
    sdosdj() {
      if (this.infoiphone.phone === '' || this.infoiphone.type === '' || this.possword === '' || this.newpossword === '') {
        return (this.checked = false)
      }
    },
    // 触发获取短信 调用接口
    async getduanxin() {
      // let post = {
      //   phone: this.phone
      // }
      const { data: res } = await this.$http.post('Code/get_code', this.infoiphone)
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
    },
    // 点击注册账号 发起请求 (此段还未完成 邀请码不知道多少)
    async zhuceuse() {
      let post = {
        loginname: this.infoiphone.phone,
        password: this.possword,
        re_password: this.newpossword,
        code: this.code
      }
      const { data: res } = await this.$http.post('Reg/reg', {
        post: JSON.stringify(post)
      })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.mainzhuce {
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
  .wenzi,
  .buttontt,
  .neirong {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .neirong {
    width: 85%;
    top: 150px;
  }
  .xieyi {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    height: 20px;
    top: 350px;
    left: 40px;
    font-size: -2px;
    color: #eee;
    // background-color: pink;
  }
  .buttontt {
    top: 400px;
    width: 90%;
    height: 50px;
    border-radius: 25px;
    background-color: #ff7900;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
  }
  .wenzi {
    top: 460px;
    color: #ccc;
  }
}
</style>

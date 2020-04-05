<template>
  <div class="maininfo">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">我的资料</div>
    </div>

    <!-- 头部区域 -->
    <div class="topinfo">
      <div style="font-size:16px;margin-left:10px">头像</div>
      <div class="xiabu">
        <div class="tuee">
          <img :src="userobj.headimgurl" alt />
        </div>
        <div style="margin-left:10px">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 二栏 -->
    <!-- <van-cell title="单元格" is-link /> -->
    <div class="erlan">
      <van-cell size="large" title="昵称" :value="userobj.grade_title" is-link />
    </div>
    <!-- 内容区域 -->
    <div class="mainbutc">
      <div class="comtop">
        <van-cell size="large" title="性别" :value="userobj.sex" is-link />
        <van-cell size="large" title="生日" value="2018-3-3" is-link />
        <van-cell size="large" title="地区" value="武汉" is-link />
      </div>
      <div class="comtop">
        <van-cell size="large" title="个性签名" :value="userobj.content" is-link />
        <van-cell size="large" title="绑定手机" :value="userobj.phone" is-link />
        <van-cell size="large" title="收货地址" value="修改/添加" is-link to="/fensou" />
      </div>
      <!-- 按钮区域 -->
      <!-- <div class="butchu">退出登录</div> -->
      <button class="butchu" @click="tuichu">退出登录</button>

      <!-- <van-cell title="性别" value="男" is-link />
        <van-cell title="生日" is-link value="2018-2-2" />
      <van-cell title="地区" is-link value="南昌市" />-->
      <!-- 下栏 -->
      <!-- <div class="comtop">
        <van-cell title="个性签名" value="品茶香，知茶趣;" is-link />
        <van-cell title="绑定手机" is-link value="156*****123" />
        <van-cell title="收货地址" is-link value="修改/添加" />
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放数据
      userobj: {}
    }
  },
  created() {
    // 获取个人资料信息
    this.getzhixin()
  },
  methods: {
    gobackkk() {
      this.$router.go(-1)
    },
    // 获取个人资料信息
    async getzhixin() {
      // // 取到路由带过来的参数
      // let infors = this.$route.params.userinfo
      // // 将获取到的数据放到data数据内
      // this.userobj = infors
      // console.log(this.userobj)

      // 取出token
      let trs = window.sessionStorage.getItem('token')
      // 获取个人信息要携带token 值
      const { data: res } = await this.$http.get('User/detail', {
        params: { token: trs }
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取用户数据失败')
      this.userobj = res.detail
    },
    // 推出登陆
    tuichu() {
      // 要清除本地token值
      window.sessionStorage.removeItem('token')
      this.$router.push({
        path: '/'
      })
    }
  }
  // watch: {
  //   // 监听路由变化 只要变化了就调用获取路由参数的方法将数据存储在本组件即可
  //   $route: "getzhixin"
  // }
}
</script>

<style lang='less' scoped>
.maininfo {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  //标题
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
      left: 20px;
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
  .topinfo {
    position: absolute;
    right: 0;
    top: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 365px;
    height: 75px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    .tuee {
      width: 50px;
      height: 50px;
      // background-color: #ddd;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .xiabu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 10px;
    }
  }
  .erlan {
    position: absolute;
    top: 160px;
    width: 100%;
    height: 80px;
    line-height: 80px;
  }
  .mainbutc {
    position: absolute;
    top: 200px;
    width: 100%;
    height: 480px;
    background-color: #eeeeee;
    .comtop {
      margin-top: 15px;
      width: 100%;
    }
    .butchu {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 50px;
      width: 90%;
      height: 50px;
      font-size: 20px;
      background-color: #ff7900;
      border-radius: 15px;
      color: #fff;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>

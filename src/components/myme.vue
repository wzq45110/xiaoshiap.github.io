<template>
  <div class="mymain">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="yiuiui">我的</div>
    </div>
    <!-- 顶部区域 -->
    <div class="mymaintop">
      <div class="leftpic">
        <div class="picnei">
          <img :src="getuserinforobj.headimgurl" alt />
        </div>
        <div style="color: white; text-align: center;" class="ziti">{{ getuserinforobj.username }}</div>
      </div>
      <div class="rightpeo" @click="goinfo(getuserinforobj)">
        <div>个人资料</div>
        <div>
          <van-icon color="wihte" name="arrow" />
        </div>
      </div>
    </div>
    <!-- 卡片栏 -->
    <div class="carlan">
      <div class="zhuwen" v-for="(item, index) in daolist" :key="index">
        <router-link :to="item.url_to">
          <div style="color: orange; font-size: 30px; font-weight: bold;">{{ item.number_i }}</div>
          <div style="color: #999999;">{{ item.test }}</div>
        </router-link>
      </div>
    </div>
    <!-- 单元格栏 -->
    <div class="buttonxia">
      <div class="asdkadk" @click="gobaqizhi">
        <div class="leftme">
          <div class="sfjoi">
            <van-icon size="20" color="#FF7900" name="add" />
          </div>
          <span style="margin-left: 5px;">霸气值</span>
        </div>
        <div class="rightme">
          <span
            style="
              font-size: 20px;
              font-weight: 900;
              color: #ff7900;
              margin-right: 5px;
            "
          >{{ getuserinforobj.points }}</span>
          <div class="tuba">
            <van-icon size="20" name="arrow" />
          </div>
        </div>
      </div>

      <!-- <div>
        <van-cell title="霸气值" is-link value="360" icon="hot-o" url="/pages/mybf/hotstore"></van-cell>
        <van-cell title="官方APP/公众号/小程序" is-link icon="graphic"></van-cell>
      </div>
      <div class="tbhe">
        <van-cell title="官方微信(关注不迷路)" is-link icon="chat"></van-cell>
      </div>
      <div>
        <van-cell title="推荐有奖" is-link icon="gold-coin" url="/pages/mybf/warn"></van-cell>
        <van-cell title="更多" is-link icon="more"></van-cell>
      </div>-->
      <div class="linxian"></div>
      <div class="asdkadk">
        <div class="leftme">
          <div class="sfjoi">
            <van-icon size="20" color="#48AFDC" name="graphic" />
          </div>
          <span style="margin-left: 5px;">官方APP/公众号/小程序</span>
        </div>
        <div class="rightme">
          <span
            style="
              font-size: 15px;
              font-weight: 503px;
              color: #ff7900;
              margin-right: 5px;
              margin-top: 2px;
            "
          ></span>
          <div class="tuba">
            <van-icon size="20" name="arrow" />
          </div>
        </div>
      </div>
      <div class="asdkadk" style="margin-top: 10px;">
        <div class="leftme">
          <div class="sfjoi">
            <van-icon size="20" color="#01C80A" name="chat" />
          </div>
          <span style="margin-left: 5px;">官方微信(关注不迷路)</span>
        </div>
        <div class="rightme">
          <span
            style="
              font-size: 15px;
              font-weight: 350px;
              color: #ff7900;
              margin-right: 5px;
              margin-top: 2px;
            "
          ></span>
          <div class="tuba">
            <van-icon size="20" name="arrow" />
          </div>
        </div>
      </div>

      <div class="asdkadk" style="margin-top: 10px;" @click="gotuijian">
        <div class="leftme">
          <div class="sfjoi">
            <van-icon size="20" color="#FF7900" name="gold-coin" />
          </div>
          <span style="margin-left: 5px;">推荐有奖</span>
        </div>
        <div class="rightme">
          <span
            style="
              font-size: 15px;
              font-weight: 700;
              color: #ff7900;
              margin-right: 5px;
              margin-top: 2px;
            "
          ></span>
          <div class="tuba">
            <van-icon size="20" name="arrow" />
          </div>
        </div>
      </div>
      <div class="linxian"></div>
      <div class="asdkadk" @click="goabout">
        <div class="leftme">
          <div class="sfjoi">
            <van-icon size="20" color="#48AFDC" name="more" />
          </div>
          <span style="margin-left: 5px;">关于霸王到</span>
        </div>
        <div class="rightme">
          <span
            style="
              font-size: 15px;
              font-weight: 700;
              color: #ff7900;
              margin-right: 5px;
              margin-top: 2px;
            "
          ></span>
          <div class="tuba">
            <van-icon size="20" name="arrow" />
          </div>
        </div>
      </div>
    </div>
    <!-- 固定霸字首页 -->
    <div class="bazizi" @click="gohomre">霸</div>
    <!-- 底部栏tabar -->
    <div>
      <van-tabbar v-model="active" active-color="#FF7900" route>
        <van-tabbar-item></van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/attation">关注</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      // 接受获取过来的对象
      getuserinforobj: {},
      daolist: [{ number_i: '', test: ' 我的保中 ', url_to: '/mebaoz' }, { number_i: '', test: '我参与的', url_to: '' }, { number_i: '', test: '中奖纪录', url_to: '' }]
    }
  },
  created() {
    // 调用用户详情
    this.getuserinfor()
    // 调用保中 参与 中奖 接口 返回
    this.lokkeruser()
  },
  methods: {
    gohomre() {
      this.$router.push({
        path: '/home'
      })
    },
    // 跳转并且传值 (个人信息)
    goinfo(val) {
      this.$router.push({
        path: '/meinfo'
        // name: "meinfo",
        // params: {
        //   userinfo: val
        // }
      })
    },
    gobaqizhi() {
      this.$router.push({
        path: '/mebaqi'
      })
    },
    gotuijian() {
      this.$router.push({
        path: '/metuij'
      })
    },
    goabout() {
      this.$router.push({
        path: '/about'
      })
    },
    // 保中 参与 中奖 接口 返回
    async lokkeruser() {
      // 取出token
      let trs = window.sessionStorage.getItem('token')
      const { data: res } = await this.$http.post('LotteryUser/detail', {
        params: { token: trs }
      })
      console.log('-----', res)
      if (res.status !== 10001) return this.$toast('获取用户数据失败')
      this.daolist[0].number_i = res.detail.baozhong
      this.daolist[1].number_i = res.detail.partake_num
      this.daolist[2].number_i = res.detail.win_num
    },

    // 获取用户详情信息
    async getuserinfor() {
      // 取出token
      let trs = window.sessionStorage.getItem('token')
      // 获取个人信息要携带token 值
      const { data: res } = await this.$http.get('User/detail', {
        params: { token: trs }
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取用户数据失败')
      this.getuserinforobj = res.detail
      // // 将获取到的用户数据存储在本地 供个人资料页面用
      // window.sessionStorage.setItem("userinfo", res.detail)
    }
  }
}
</script>

<style lang="less" scoped>
.mymain {
  // background-color: pink;
  width: 100%;
  height: 100%;
  position: relative;
  //标题
  .dingtiiti {
    position: fixed;
    z-index: 120;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    top: 0;
    .yiuiui {
      position: absolute;
      font-size: 20px;
      color: #fff;
      left: 50%;
      top: 45%;
      transform: translate(-50%);
    }
  }
  // 国定霸字
  .bazizi {
    position: fixed;
    bottom: 8px;
    z-index: 100;
    left: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 40px;
    text-align: center;
    background-color: #ff7900;
    border-radius: 50%;
    color: #fff;
  }
  .mymaintop {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    height: 120px;
    width: 100%;
    margin-top: 80px;
    background-color: #ff7900;
    background: linear-gradient(to top, #ffa12f, #ffdd96);
    .leftpic {
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      .picnei {
        background-color: #eeeeee;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
        }
      }
      .ziti,
      .picnei {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 15px;
      }
    }
    .rightpeo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 17px;
      width: 110px;
      height: 40px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 20px 0 0 20px;
      color: #fff;
      font-size: 15px;
    }
  }
  .carlan {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 110px;
    background-color: #fff;
    border-radius: 10px;
    // box-shadow: 5rpx 5rpx 5rpx;
    .zhuwen {
      text-align: center;
    }
  }
  .buttonxia {
    padding-top: 75px;
    background-color: #eeeeee;
    width: 100%;
    height: 320px;
    .asdkadk {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50px;
      font-size: 15px;
      box-sizing: border-box;
      padding: 0 15px;
      background-color: #ffff;
      .rightme {
        width: 30%;
        span {
          position: absolute;
          right: 20px;
          top: 2px;
        }
        .tuba {
          position: absolute;
          right: 0px;
          top: 5px;
        }
      }
      .leftme {
        width: 70%;
        span {
          position: absolute;
          left: 20px;
          top: 4px;
        }
        .sfjoi {
          position: absolute;
          left: 0rpx;
          top: 5px;
        }
      }
      .rightme,
      .leftme {
        position: relative;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .linxian {
      width: 100%;
      height: 1px;
      background-color: #ccc;
      // box-sizing: border-box;
      // // margin-left: 15px;
      // padding-left: 15px;
    }
  }
}
</style>

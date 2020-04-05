<template>
  <div class="mainsdhanghu">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="goback">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">关注</div>
      <div class="dsjfidh">
        <van-icon color="white" size="20px" name="location" />
      </div>
      <div class="dkfhhfug">
        <van-icon color="white" size="20px" name="search" />
      </div>
    </div>
    <!-- 顶部区域 -->
    <div class="wenzih">
      <div class="leftjia">
        <div class="tufendan">
          <img src="../../assets/images/oppo.png" alt />
        </div>麦肯基西乡店
      </div>
      <div class="logoqu" @click="guanzuhu">{{pandun ? '关注':'取消关注'}}</div>
    </div>
    <!-- 地址商家烂 -->
    <div class="bazanin">
      <!-- 身 -->
      <div class="dianrei">
        <div class="zuodinzhi">
          <!-- <div>
            肯德基(西乡店)
            <van-tag round plain color="#FF7901" text-color="#FF7901" type="warning">+ 关注</van-tag>
          </div>-->
          <div style="font-size:12px; color:#717171">深圳市罗湖区文锦路13号楼 3号 一侧吧</div>
          <div style="font-size:10px; color:#ccc;">
            <van-icon name="location" color="#FF7800" />
            <van-icon name="arrow-left" />0.5km 离我最近
          </div>
        </div>
        <div class="lineba"></div>
        <div class="youbilo">
          <van-icon name="phone-circle-o" size="20px" />
        </div>
      </div>
      <!-- 尾 -->
      <div>
        <van-cell is-link title="查看全部246家分店" link-type="navigateTo" to="/fendian" />
      </div>
    </div>
    <!-- 内容区域栏目一 -->
    <div class="waitianev">
      <div class="carli">
        <div class="picc">
          <img src="../../assets/images/zhong.png" alt />
        </div>
        <div class="cenhan">
          <div class="shaung">
            巨无霸双人堡套餐
            <van-icon name="cross" />30
          </div>
          <div>9月2日10: 00自动开奖</div>
        </div>
        <router-link to="/fenbaxa">
          <div class="rightyou">去看看</div>
        </router-link>
      </div>
    </div>
    <!--  -->
    <div class="dibushuo">一小时前</div>
    <!-- 内容栏目二 其他商家 -->
    <div class="baoguo" v-for="(item,index) in 2" :key="index">
      <div class="tianhong">
        <!-- <div class="shnagtian">
          <div class="lefttulo">
            <image src="../../assets/images/hong.png" />
          </div>
          <div style="margin-right:20rpx; font-size:20rpx; color:#ccc;">一小时前</div>
        </div>-->
        <div class="tucare">
          <div class="tucarekk">
            <img src="../../assets/images/opp.png" alt />
          </div>
          <div class="shuomin">
            <div>六一儿童节</div>
            <div>麦肯基送你儿童节礼物一份</div>
          </div>
        </div>
      </div>
      <div class="dibushuo">昨天 10:00</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pandun: false
    }
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1)
    },
    // 关注事件
    guanzuhu() {
      this.pandun = !this.pandun
    }
  }
}
</script>

<style lang='less' scoped>
.mainsdhanghu {
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
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
    .dsjfidh {
      right: 40px;
    }
    .dkfhhfug {
      right: 10px;
    }

    .dsjfidh,
    .dkfhhfug {
      position: absolute;
      top: 50%;
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
  .wenzih {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eeeeee;
    background-color: #fff;
    margin-top: 80px;
    .logoqu {
      background-color: #ff7900;
      color: #fff;
      font-size: 14px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      width: 90px;
      border-radius: 15px;
      margin-right: 17px;
    }
    .leftjia {
      font-size: 30px;
      font-weight: 700;
      width: 150px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      margin-left: 15px;
      .tufendan {
        width: 40px;
        height: 40px;
        border: 5px solid #fed6b1;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bazanin {
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-top: 10px;
    .dianrei {
      position: relative;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #eee;
      .zuodinzhi,
      .lineba,
      .youbilo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .zuodinzhi {
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 15px;
        height: 75px;
        width: 60%;
      }
      .lineba {
        width: 1px;
        height: 50px;
        background-color: #999999;
        right: 110px;
      }
      .youbilo {
        right: 35px;
      }
    }
  }
  // 内容栏目一
  .waitianev {
    width: 100%;
    height: 125px;
    background-color: #fff;
    margin-top: 15px;
    border-bottom: 1px solid #e7e7e7;
    .carli {
      width: 90%;
      height: 125px;
      position: relative;
      margin-left: 15px;
      // margin-top: 30rpx;
      // background-color: #fff;
      .picc {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 125px;
        height: 70px;
        // background-color: pink;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cenhan {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        left: 140px;
        top: 50%;
        height: 65px;
        transform: translateY(-50%);
        font-size: 12px;
        .shaung {
          font-size: 14px;
          font-weight: 700;
        }
      }
      .rightyou {
        position: absolute;
        font-size: 12px;
        right: 0;
        bottom: 30px;
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #ff7900;
        border-radius: 7px;
        color: #ffffff;
      }
    }
  }
  .dibushuo {
    width: 100%;
    height: 25px;
    background-color: #fff;
    line-height: 25px;
    text-align: center;
    color: #eee;
    font-size: 10px;
  }
  // 内容 其他商家
  .baoguo {
    margin-top: 15px;
    .tianhong {
      width: 100%;
      height: 190px;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      padding-top: 15px;
      .tucare {
        position: relative;
        width: 100%;
        height: 190px;
        .tucarekk {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          width: 95%;
          height: 175px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .shuomin {
          position: absolute;
          left: 17px;
          top: 127px;
          width: 95%;
          height: 25px;
          z-index: 100;
          color: #fff;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

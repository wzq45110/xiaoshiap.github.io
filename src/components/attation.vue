<template>
  <div class="guanzhumain">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="yiuiui">关注</div>
      <div class="dsjfidh">
        <van-icon color="white" size="20px" name="location" />
      </div>
      <div class="dkfhhfug">
        <van-icon color="white" size="20px" name="search" />
      </div>
    </div>
    <div class="shangguan">
      <div class="tulogo" @click="gofendianye">
        <!-- <div class="tubiao">
        <van-icon size="10px" color="#FF7900" name="add" />
        </div>-->
        <image src="../assets/images/oppo.png" />
      </div>
      <div class="tulogo" @click="gofendianye">
        <image src="../assets/images/oppo.png" />
      </div>
      <div class="tulogo" @click="gofendianye">
        <image src="../assets/images/oppo.png" />
      </div>
    </div>
    <!-- 卡片区域 -->
    <div class="crsadmain">
      <div class="neicar">
        <!-- 内容区域 1-->
        <div class="wepjiang">
          <!-- 图片区域 -->
          <div class="pic">
            <img src="../assets/images/logoo1_02.png" alt />
          </div>
          <!-- 文字区域 -->
          <div class="textp">
            <div style="font-size:20px;">
              巨无霸双人汉堡
              <van-icon name="cross" />30
            </div>
            <div style="color:#ccc; font-size:10px;">
              <van-icon color="orange" name="location-o" />
              <van-icon name="arrow-left" />500
            </div>
          </div>
          <!-- 文字区域2 -->
          <div class="wenzixia">
            <div class="waibu">
              <div class="shangbu">
                <div>麦肯基西乡店</div>
                <router-link to="/mezhu">
                  <div class="zanan" style="font-size:10px;">赞助</div>
                </router-link>
              </div>
              <div style="color:#ccc; font-size:10px;">9月2日10: 00 自动开奖</div>
            </div>
            <div class="anniuniu" @click="gobxiang">参与</div>
          </div>
        </div>
        <!-- 内容区域2 -->
        <div class="tianhong">
          <div class="shnagtian">
            <div class="lefttulo">
              <img src="../assets/images/hong.png" alt />
            </div>
            <div style="margin-right:20px; font-size:10px; color:#ccc;">一小时前</div>
          </div>
          <div class="tucare">
            <div class="tucarekk">
              <img src="../assets/images/opp.png" alt />
            </div>
            <div class="shuomin">
              <div>天虹购物中心周年庆典 全场8折</div>
              <div>活动时间9月1日-9月7日</div>
            </div>
          </div>
        </div>
        <!-- 内容三 同区域1 -->
        <div class="wepjiang">
          <!-- 图片区域 -->
          <div class="pic">
            <img src="../assets/images/logoo1_02.png" alt />
          </div>
          <!-- 文字区域 -->
          <div class="textp">
            <div style="font-size:20px;">
              巨无霸双人汉堡
              <van-icon name="cross" />30
            </div>
            <div style="color:#ccc; font-size:10px">
              <van-icon color="orange" name="location-o" />
              <van-icon name="arrow-left" />500
            </div>
          </div>
          <!-- 文字区域2 -->
          <div class="wenzixia">
            <div class="waibu">
              <div class="shangbu">
                <div>麦肯基西乡店</div>
                <router-link to="/mezhu">
                  <div class="zanan" style="font-size:10px;">赞助</div>
                </router-link>
              </div>
              <div style="color:#ccc; font-size:10px">9月2日10: 00 自动开奖</div>
            </div>
            <div class="anniuniu" @click="gobxiang">参与</div>
          </div>
        </div>
        <!-- 内容四 同区域2 -->
        <div class="tianhong">
          <div class="shnagtian">
            <div class="lefttulo">
              <img src="../assets/images/oppo.png" alt />
            </div>
            <div style="margin-right:20px; font-size:10px; color:#ccc;">昨天</div>
          </div>
          <div class="tucare">
            <div class="tucarekk">
              <img src="../assets/images/opp.png" alt />
            </div>
            <div class="shuomin">
              <div>oppo手机上新季</div>
              <div>点击进入领取百元代金券</div>
            </div>
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
      active: 1
    }
  },
  created() {},
  methods: {
    gohomre() {
      this.$router.push({
        path: '/home'
      })
    },
    gofendianye() {
      this.$router.push({
        path: '/fenshu'
      })
    },
    gobxiang() {
      this.$router.push({
        path: '/fenbaxa'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.guanzhumain {
  width: 100%;
  height: 100%;
  // 标题
  .dingtiiti {
    position: fixed;
    z-index: 120;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    top: 0;
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
  .shangguan {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    // background-color: pink;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    margin-top: 80px;
    .tulogo {
      border-radius: 50%;
      border: 5px solid #fed6b3;
      width: 60px;
      height: 60px;
      margin-left: 15px;
      image {
        width: 100%;
        height: 50%;
      }
    }
  }
  .crsadmain {
    width: 100%;
    height: 300px;
    background-color: #eee;
    padding-top: 10px;
    .neicar {
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding-top: 5px;
      .wepjiang {
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
      }
      .pic {
        margin-bottom: 10px;
        // height: 50px;
        height: 200px;
        width: 375px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .wenzixia,
      .textp {
        padding: 0 16px;
      }
      .wenzixia,
      .textp,
      .shangbu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
      }
      .anniuniu {
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #ff7900;
        border-radius: 10px;
        color: #fff;
      }
      .zanan {
        width: 30px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #ff7900;
        color: #ff7900;
        border-radius: 5px;
      }
      .tianhong {
        width: 100%;
        height: 300px;
        border-bottom: 1px solid #ccc;
        .shnagtian {
          width: 100%;
          height: 100px;
          // background-color: pink;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .lefttulo {
            position: relative;
            margin-left: 10px;
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
            // .tubiao {
            //   position: absolute;
            //   background-color: pink;
            //   width: 5px;
            //   height: 5px;
            //   top: -4px;
            //   right: 0;
            //   z-index: 100;
            // }
          }
        }
        .tucare {
          position: relative;
          width: 100%;
          height: 300px;
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
            top: 135px;
            width: 95%;
            height: 25px;
            z-index: 100;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

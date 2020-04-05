<template>
  <div class="mainwarn">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">推荐有奖</div>
    </div>
    <!-- 顶部区域 -->
    <div class="topwarn">
      <div class="first">推荐好友下载注册赢最高100霸气值</div>
      <div class="second">好友下载APP登陆得50霸气值</div>
      <div class="third">我的邀请码: XXL6HGR</div>
      <div class="four">
        <img src="../../assets/images/erma.png" alt />
      </div>
      <div class="five">分享给以下平台好友</div>
      <div class="six">
        <div class="zi">
          <img src="../../assets/images/wx.png" />
        </div>
        <div class="zi">
          <img src="../../assets/images/fq.png" />
        </div>
        <div class="zi">
          <img src="../../assets/images/zhi.png" />
        </div>
        <div class="zi">
          <img src="../../assets/images/QQ.png" />
        </div>
        <div class="zi">
          <img src="../../assets/images/weibo.png" />
        </div>
      </div>
    </div>
    <!-- 中下部区域 -->
    <div class="zhoxiabu">
      <!-- 邀请栏 -->
      <div class="yaoqin">
        <div class="meyao">我的邀请</div>
        <!-- 二 -->
        <div class="melan">
          <div class="melanzi">
            <div>
              <span>300</span>霸气值
            </div>
            <div>我的保中</div>
          </div>
          <div class="melanzi">
            <div>
              <span>10</span>人
            </div>
            <div>我参与的</div>
          </div>
          <div class="melanzi">
            <div>
              <span>3</span>人
            </div>
            <div>中奖纪录</div>
          </div>
        </div>
        <!-- 循环 -->
        <div class="xaingxi" v-for="(item, index) in wenzilist" :key="index">
          <div class="tuxaing">
            <!-- <img :src="item.imgurl_1" /> -->
            <!-- <img :src="item.imgurl_1" /> -->

            <img src="../../assets/images/wx.png" />
          </div>
          <div class="neizhi">
            <div>
              张老师
              <span style="color:#999999; font-size: 14px">{{item.test_2}}</span>
            </div>
            <div style="color:#E5E5E5; font-size: 12px">{{item.test_3}}</div>
          </div>
          <div class="babzui">{{item.test_4}}</div>
        </div>.
      </div>
      <!-- 间隔 -->
      <div class="jiange"></div>
      <!-- 参与方式栏 -->
      <div class="canyulan">
        <div class="ayfs">参与方式</div>
        <div class="fangshxai">
          <div class="zhonger">
            <div class="tubiao">
              <img src="../../assets/images/yaohh.png" />
            </div>
            <div class="quanzi">
              <img src="../../assets/images/step1.png" />
            </div>
            <div class="textzhi">发送邀请给TA</div>
          </div>
          <div class="zhonger">
            <div class="tubiao">
              <img src="../../assets/images/xaizai.png" />
            </div>
            <div class="quanzi">
              <img src="../../assets/images/step2.png" />
            </div>
            <div class="textzhi">TA下载APP并注册登录</div>
          </div>
          <div class="zhonger">
            <div class="tubiao">
              <img src="../../assets/images/liwu.png" />
            </div>
            <div class="quanzi">
              <img src="../../assets/images/step3.png" />
            </div>
            <div class="textzhi">你获得奖励</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wenzilist: [
        {
          imgurl_1: '../../assets/images/wx.png',
          test_2: '接受邀请--邀请成功',
          test_3: '2019-06-7 12:15:01',
          test_4: '获得20霸气值'
        },
        {
          imgurl_1: '../../assets/images/wx.png',
          test_2: '接受邀请--邀请成功',
          test_3: '2019-06-7 12:15:01',
          test_4: '获得20霸气值'
        },
        {
          imgurl_1: '../../assets/images/wx.png',
          test_2: '接受邀请--邀请成功',
          test_3: '2019-06-7 12:15:01',
          test_4: '获得20霸气值'
        },
        {
          imgurl_1: '../../assets/images/wx.png',
          test_2: '接受邀请--邀请成功',
          test_3: '2019-06-7 12:15:01',
          test_4: '获得20霸气值'
        }
      ]
    }
  },
  created() {},
  methods: {
    gobackkk() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.mainwarn {
  width: 100%;
  height: 100%;
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
  .topwarn {
    position: relative;
    width: 100%;
    height: 300px;
    margin-top: 80px;
    .first,
    .second,
    .third,
    .four,
    .five,
    .six {
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .first {
      width: 80%;
      height: 30px;
      top: 20px;
      font-size: 12px;
    }
    .second {
      width: 80%;
      height: 25px;
      top: 40px;
      font-size: 12px;
    }
    .third {
      font-size: 16px;
      font-weight: 600;
      width: 80%;
      height: 30px;
      top: 75px;
    }
    .four {
      top: 110px;
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .five {
      font-size: 10px;
      bottom: 47px;
    }
    .six {
      bottom: 0;
      width: 50%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .zi {
        width: 10%;
        height: 60%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .zhoxiabu {
    width: 100%;
    height: 500px;
    background-color: #eee;
    padding-top: 10px;
    .yaoqin {
      width: 100%;
      height: 300px;
      background-color: #fff;
      .meyao {
        width: 100%;
        height: 45px;
        margin-left: 10px;
        line-height: 45px;
      }
      .melan {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 75px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        .melanzi {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          width: 30%;
          height: 60%;
          //   background-color: pink;
          font-size: 13px;
          span {
            font-size: 17px;
            color: orange;
            font-weight: 600;
          }
        }
      }
    }
    .xaingxi {
      position: relative;
      width: 100%;
      height: 50px;
      background-color: #fff;
      .tuxaing {
        left: 10px;
        width: 35px;
        height: 35px;
        // background-color: green;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .neizhi {
        left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        height: 70%;
        // font-size: 24rpx;
      }
      .babzui {
        right: 10px;
        color: #ff7900;
        font-weight: 700;
        font-size: 14px;
      }
      .tuxaing,
      .neizhi,
      .babzui {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .jiange {
      width: 100%;
      height: 35px;
      background-color: #eee;
    }
    .canyulan {
      width: 100%;
      height: 300px;
      background-color: #fff;
      .ayfs {
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
        border-bottom: 1px solid #ccc;
      }

      .fangshxai {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 200px;
        // background-color: green;
        .zhonger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 30%;
          height: 200px;
          padding-top: 15px;
          //   background-color: pink;
          .tubiao {
            width: 50%;
            height: 75px;
          }
          .quanzi {
            width: 30%;
            height: 40px;
          }
          .textzi {
            width: 80%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

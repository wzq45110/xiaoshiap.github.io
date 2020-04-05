<template>
  <div class="baxmain">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="goback">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">霸王餐详情</div>
      <div class="dkfhhfug">
        <van-icon color="white" size="20px" name="share" />
      </div>
    </div>
    <!-- 轮播图区域 -->
    <div class="lunbo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/images/swip.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/swip.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/swip.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/swip.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 下面所有的包裹起来 -->
    <div class="baoguoxiamian">
      <!-- 文字说明区域 -->
      <div class="bawenzi">
        <!-- 上区域 -->
        <div class="textp">
          <div style="font-size:20px;">
            巨无霸双人汉堡
            <van-icon name="cross" />30
          </div>
          <div style="color:#ccc; font-size:15px">
            <van-icon color="orange" size="14px" name="star-o" />
          </div>
        </div>
        <!-- 右边区域 -->
        <div class="wenzixia">
          <div class="waibu">
            <!-- <div class="shangbu">
            <div>麦肯基西乡店</div>
            <div class="zanan" style="font-size:20rpx;">赞助</div>
            </div>-->
            <div style="color:#ccc; font-size:15px;">9月2日10: 00 自动开奖</div>
          </div>
          <div style="font-size:14px;">
            <span style="color:orange;">200</span>霸气值可兑
          </div>
        </div>
      </div>
      <!-- 整个内容区域 -->
      <div class="zengbain">
        <!-- 赞助商区域 -->
        <div class="bazanin">
          <!-- 头 -->
          <div class="dayren">
            <!-- <div class="diyiday">每日任务</div> -->
            <div class="wenzih">
              <div class="leftjia">赞助商信息</div>
              <div class="logoqu">
                <router-link to="/mezhu">我要赞助</router-link>
              </div>
            </div>
          </div>
          <!-- 身 -->
          <div class="dianrei">
            <div class="zuodinzhi">
              <div>
                肯德基(西乡店)
                <van-tag
                  round
                  plain
                  color="#FF7901"
                  text-color="#FF7901"
                  type="warning"
                  click="goshanghu"
                >+ 关注</van-tag>
              </div>
              <div style="font-size:12px; color:#717171;">深圳市罗湖区文锦路13号楼 3号 一侧吧</div>
              <div style="font-size:10px; color:#ccc;">
                <van-icon name="location-o" color="#FF7800" />
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

        <!--开奖结果与图介绍区域 -->
        <div class="resultjie">
          <van-tabs color="#FF7900" line-width="20">
            <van-tab title="开奖结果">
              <!-- 内容一区域 -->
              <div class="kaijiangyi">
                <div class="tishibaiao">
                  恭喜, 你已中奖
                  <!-- <van-icon  color="#fff" name="clear" /> -->
                  <van-icon class="tutyutu" name="smile" color="#fff" />
                </div>
                <!-- 新增奖品说面栏 -->
                <div class="zaicijiang">奖品: MAC 子弹头口红 (8色随机)</div>
                <div class="zengerlan">
                  <div class="tongyang">
                    <div>
                      <van-icon size="15" color="#fff" name="location" />
                    </div>
                    <div>地址已填写</div>
                  </div>
                  <div class="tongyangright">
                    <div>
                      <van-icon size="30" color="#FF7C09" name="cluster-o" />
                    </div>
                    <div>炫耀一下</div>
                  </div>
                </div>

                <!--小字 -->
                <div class="xiaozihah">为你准备了如下福利</div>
                <!-- 福利区域 -->
                <div class="fulishang">
                  <div class="xiaopinhe" style="margin-left:10px">
                    <!-- 内部详情 -->
                    <div class="liwulo">
                      <van-icon
                        class="iconfont"
                        class-prefix="icon"
                        size="30"
                        color="#FF7C09"
                        name="yuxiaxie"
                      />
                    </div>
                    <div class="liyiya">聚好礼享中秋</div>
                    <div class="lierya">大闸蟹月饼0元拿</div>
                    <div class="lisanya">点击领取</div>
                  </div>
                  <div class="xiaopinhe" style="margin-right:10px; border:1px solid #CFCFCF">
                    <!-- 内部详情 -->
                    <div class="liwulo">
                      <van-icon size="30" color=" #ccc" name="point-gift" />
                    </div>
                    <div class="liyiya">抽奖助手送给 奔跑的老王</div>
                    <div class="lierya">大闸蟹月饼0元拿</div>
                    <div class="lisanya" style="background-color: #ccc">点击查看</div>
                  </div>
                </div>
                <!--标题 -->
                <div class="ziziii">中 奖 者 名 单</div>

                <!-- 名单详情区域 -->
                <div class="listquyu">
                  <div class="shangzhe">
                    奖品: MAC 口红任意色号一支
                    <van-icon color="#FF7900" name="cross" />
                    <span style="color:#FF7900">3名</span>
                  </div>
                  <div class="xiazhe">
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                  </div>
                </div>
                <!-- 2栏 -->
                <div class="listquyu" style="top:710px">
                  <div class="shangzhe">
                    奖品: MAC 口红任意色号一支
                    <van-icon color="#FF7900" name="cross" />
                    <span style="color:#FF7900">3名</span>
                  </div>
                  <div class="xiazhe">
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                    <div class="hfjkg">
                      <div class="tutughjy"></div>
                      <div>小红</div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="图文介绍">内容 2</van-tab>
          </van-tabs>
        </div>

        <!--图文区域 -->
        <div class="tuwenbain">
          <!-- <div class="htou">团购详情及文字说明部分</div>
          <div class="zxjg">有效期文字内容</div>
          <div class="zxjg">当天营业时间</div>
          <div class="zxjg">使用规则~~~~~~</div>-->
          <!-- 点击按钮 -->
          <!-- <div class="niubj"> -->
          <!-- <div class="haojiang" style="margin-left:120rpx;">抽 奖</div>
          <div class="haojiang" style="margin-right:120rpx;">保 中</div>-->
          <!-- <button class="haojiang" style="margin-left:60px" @click="showPopupjiang">抽 奖</button>
            <button class="haojiang" style="margin-right:60px" @click="showPopup">保 中</button>
          </div>-->
          <!-- 小文字 -->
          <div class="xiaowenz">
            已有
            <span style="color:#FF7902;">18767</span>人参与, 查看全部
            <van-icon name="arrow" />
          </div>
          <!-- 头像区域 -->
          <div class="peopletu">
            <div class="xiaobio" style="margin-left:100px">
              <img src="../../assets/images/people.png" alt />
            </div>
            <div class="xiaobio">
              <img src="../../assets/images/people.png" alt />
            </div>
            <div class="xiaobio">
              <img src="../../assets/images/people.png" alt />
            </div>
            <div class="xiaobio" style="margin-right:100px;">
              <img src="../../assets/images/people.png" alt />
            </div>
          </div>
        </div>
        <!-- 评论区域 -->
        <div class="huawrite">
          <!-- 顶 -->
          <div class="caipin">
            <div class="xiaolun">精彩评论</div>
            <div class="pinlun">
              写评论
              <van-icon name="arrow" color="green" />
            </div>
          </div>
          <!-- 内容 -->
          <div class="writeneijing" v-for="(item, index) in 3" :key="index">
            <div class="shangbanjie">
              <div class="renxiang">
                <img src="../../assets/images/people.png" alt />
              </div>
              <div class="youxiangxi">
                <div style="color:#B0B0B0; font-size:15px">团队详情及文字说明部分</div>
                <div style="color:#FD7900; font-size:13px">
                  <van-icon color="#FD7900" name="good-job-o" />
                  <span>228</span>
                </div>
              </div>
            </div>
            <!-- 具体内容 -->
            <div class="shuoming">使用规则讲故事的空间打开洒过的口号是v的</div>
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
      show: false,
      showw: false
    }
  },
  created() {},
  methods: {
    goshanghu() {
      this.$router.push({
        path: '/'
      })
    },
    goback() {
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true
    },
    showPopupjiang() {
      this.showw = true
    },
    onClose() {
      this.show = this.showw = false
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.baxmain {
  width: 100%;
  height: 100%;
  position: relative;
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
      top: 50%;
      right: 10px;
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
  // 轮播图
  .lunbo {
    position: absolute;
    top: 80px;
    width: 100%;
    // height: 100px;
    // background-color: pink;
    img {
      width: 100%;
      height: 170px;
    }
  }
  //下面所有包裹起来
  .baoguoxiamian {
    position: absolute;
    top: 250px;
    width: 100%;
    .bawenzi {
      margin-top: 20px;
    }
    .wenzixia,
    .textp {
      padding: 0 17px;
    }
    .wenzixia,
    .textp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }
    .zengbain {
      width: 100%;
      height: 100%;
      background-color: #eeeeee;
      padding-top: 15px;
      // 新增区域
      .resultjie {
        width: 100%;
        background-color: #fff;
        margin-top: 15px;
        .kaijiangyi {
          position: relative;
          width: 100%;
          height: 825px;
          // background-color: pink;
          .zaicijiang,
          .ziziii,
          .xiaozihah,
          .tishibaiao {
            position: absolute;
            height: 40px;
            line-height: 40px;
            text-align: center;
            left: 50%;
            transform: translateX(-50%);
          }
          .tishibaiao {
            width: 58%;
            color: #fff;
            font-weight: 900;
            background-color: #ff7900;
            border-radius: 20px;
            top: 30px;
            font-size: 15px;
          }
          .zaicijiang {
            top: 68px;
            width: 100%;
            color: #adadad;
            font-size: 14px;
          }
          .zengerlan {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            top: 108px;
            width: 100%;
            height: 100px;
            // background-color: pink;
            .tongyangright,
            .tongyang {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 170px;
              height: 90px;
              border-radius: 10px;
              font-size: 15px;
            }
            .tongyang {
              background-color: #ff7900;
              color: #fff;
            }
            .tongyangright {
              color: #ff7900;
              border: 1px solid #ff7900;
            }
          }
          .xiaozihah {
            font-size: 14px;
            color: #adadad;
            top: 211px;
          }
          .fulishang {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            top: 252px;
            width: 100%;
            height: 175px;
            // background-color: green;
            .xiaopinhe {
              position: relative;
              width: 172px;
              height: 172px;
              border: 1px solid #ffbb80;
              border-radius: 10px;
              .lisanya,
              .lierya,
              .liyiya,
              .liwulo {
                position: absolute;
                left: 10px;
              }
              .liwulo {
                top: 10px;
                width: 25px;
                height: 25px;
                border-radius: 50%;
              }
              .liyiya {
                top: 49px;
                width: 80%;
                font-size: 10px;
                color: #ccc;
              }
              .lierya {
                top: 72.5px;
                width: 80%;
                font-size: 15px;
              }
              .lisanya {
                bottom: 15px;
                width: 80%;
                height: 25px;
                line-height: 25px;
                text-align: center;
                background-color: #ff7900;
                border-radius: 10px;
                color: #fff;
                font-size: 10px;
              }
            }
          }
          .ziziii {
            top: 432px;
            font-weight: 700;
            font-size: 15px;
          }
          .listquyu {
            position: absolute;
            top: 476px;
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            height: 150px;
            // background-color: green;
            border: 2px solid #ccc;
            border-radius: 10px;
            .shangzhe {
              border-radius: 10px 10px 0 0;
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              text-align: center;
              background-color: rgba(0, 0, 0, 0.1);
            }
            .xiazhe {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 100%;
              height: 100px;
              font-size: 14px;
              text-align: center;
              // background-color: yellow;
              .hfjkg {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 75px;
                height: 75px;
                background-color: #fff;
                .tutughjy {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  background-color: pink;
                }
              }
            }
          }
        }
      }
      .bazanin {
        width: 100%;
        height: 200px;
        background-color: #fff;
        .dayren {
          width: 100%;
          // height: 200rpx;
          background-color: #fff;
          .wenzih {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #eeeeee;
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
              font-size: 14px;
              margin-left: 15px;
            }
          }
        }
        .dianrei {
          position: relative;
          width: 100%;
          height: 100px;
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
            justify-content: space-around;
            left: 15px;
            height: 75px;
            width: 60%;
          }
          .lineba {
            width: 1px;
            height: 50px;
            background-color: #ccc;
            right: 110px;
          }
          .youbilo {
            right: 35px;
          }
        }
      }
      .tuwenbain {
        margin-top: 15px;
        background-color: #fff;
        width: 100%;
        //   height: 600rpx;
        // margin-bottom: 15px;
        // .htou {
        //   width: 100%;
        //   height: 50px;
        //   line-height: 50px;
        //   text-align: center;
        // }
        // .zxjg {
        //   margin: 0 15px 25px 15px;
        // }
        // .niubj {
        //   display: flex;
        //   justify-content: space-around;
        //   width: 100%;
        //   height: 115px;
        //   .haojiang {
        //     width: 100px;
        //     height: 100px;
        //     line-height: 100px;
        //     text-align: center;
        //     background-color: #ff9801;
        //     border-radius: 50%;
        //     color: #fff;
        //     box-shadow: #ff7900;
        //     font-size: 30px;
        //     font-weight: 900;
        //   }
        // }
        .xiaowenz {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          color: #9a9a9a;
        }
        .peopletu {
          display: flex;
          justify-content: space-around;
          width: 100%;
          height: 50px;
          .xiaobio {
            width: 25px;
            height: 25px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .huawrite {
        width: 100%;
        background-color: #fff;
        .caipin {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 50px;
          .xiaolun {
            margin-left: 10px;
          }
          .pinlun {
            margin-right: 10px;
            color: green;
            font-size: 14px;
          }
        }
      }
      .writeneijing {
        width: 100%;
        background-color: #fff;
        .shangbanjie {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 25px;
          .renxiang {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .youxiangxi {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 300px;
            height: 30px;
            margin-right: 10px;
          }
        }
        .shuoming {
          box-sizing: border-box;
          font-size: 12px;
          padding: 5px 10px 5px 60px;
        }
      }
    }
  }
  // 保中成功区域
  .gongsucess {
    position: relative;
    width: 300px;
    height: 350px;
    border: 5px solid #ff9131;
    border-radius: 20px;
    .shangsuche,
    .jingdeng,
    .guanzhgugg,
    .tongzhi,
    .weimam,
    .xiaxiao,
    .xinjiaba {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    // 失败
    .xinjiaba {
      width: 80%;
      height: 25px;
      text-align: center;
      font-size: 15px;
      top: 50px;
      color: #9a9a9a;
    }
    .xiaxiao {
      bottom: 20px;
      font-size: 12px;
      // color: #ccc;
    }
    .tongzhi {
      top: 125px;
      font-size: 13px;
      width: 90%;
      height: 15px;
      text-align: center;
    }
    .guanzhgugg {
      width: 90%;
      height: 15px;
      text-align: center;
      top: 100px;
      font-size: 13px;
    }
    .shangsuche {
      top: 15px;
      color: #ff7900;
      width: 80%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 25px;
      font-weight: 900;
    }
    .jingdeng {
      top: 65px;
      color: #ff7900;
      font-size: 20px;
      font-weight: 700;
    }
    .weimam {
      bottom: 37px;
      width: 150px;
      height: 150px;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

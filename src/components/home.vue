<template>
  <div class="mainhome">
    <!-- 顶部栏 -->
    <div class="hometop">
      <!-- 左边 -->
      <div class="leftte" @click="chuxiala">
        <span style="font-size:20px">深圳</span>
        <van-icon color="white" name="arrow-down" />
      </div>
      <!-- 右边 -->
      <div class="secondcol">
        <div class="inputserch">
          <input type="text" placeholder="输入关键词" />
          <van-icon size="20px" color="orange" name="search" />
        </div>
        <div style="margin-top:10px" @click="chuxiala">
          <van-icon size="20px" color="white" name="location" />
        </div>
      </div>
    </div>
    <!-- 轮播图区域 -->
    <div class="lunbo">
      <van-swipe :autoplay="3000" indicator-color="#1989fa">
        <!-- <van-swipe-item v-for="(item,index) in guanggaolist" :key="index">
          <img src="item.img_orogin" alt />
        </van-swipe-item>-->
        <van-swipe-item>
          <img src="../assets/images/swip.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/swip.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/swip.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 内容区域 -->
    <div class="baoguode">
      <!-- {{guanggaolist[4].cate_id}} -->
      <div class="wepjiang" v-for="(item, index) in arrnew" :key="index">
        <!-- 图片区域 -->
        <div class="pic" @click="gocontent">
          <!-- <img  alt=""> -->
          <img :src="item.img_thumb" alt />
        </div>
        <!-- 文字区域 -->
        <div class="textp">
          <div style="font-size:20px;">
            {{item.title}}
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
              <div style="margin-right:10px">麦肯基西乡店</div>
              <router-link to="/mezhu">
                <div class="zanan">赞助</div>
              </router-link>
            </div>
            <div style="color:#ccc; font-size:10px;">9月2日10: 00 自动开奖</div>
          </div>
          <div class="anniuniu" @click="gobxiang">参与</div>
        </div>
      </div>
    </div>

    <!-- 底部栏 -->
    <div v-show="flage">
      <van-tabbar v-model="active" active-color="#FF7900" route>
        <van-tabbar-item></van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/attation">关注</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 固定霸字首页 -->
    <div class="bazizi" v-show="flage">霸</div>
    <!-- 全屏下拉                                    -->
    <div class="quanpin" v-show="flag">
      <!-- 区域地址 -->
      <div class="sahngbudkhs">
        <!-- 区地址 -->
        <van-row>
          <van-col span="8">全城</van-col>
          <van-col span="8">罗湖</van-col>
          <van-col span="8">福田区</van-col>
        </van-row>
        <van-row>
          <van-col span="8">南山区</van-col>
          <van-col span="8">龙岗区</van-col>
          <van-col span="8">宝安区</van-col>
        </van-row>
        <van-row>
          <van-col span="8">龙华新区</van-col>
          <van-col span="8">大鹏新区</van-col>
          <van-col span="8">坪山新区</van-col>
        </van-row>
        <!--最底部 -->
        <div class="butomin">
          <div class="kkkksg">
            <div>
              <van-icon size="20px" color="orange" name="location" />
            </div>
            <div>
              <span style="margin-left:5px">当前城市:</span>
              <span style="color:orange;margin-left:5px">深圳</span>
            </div>
          </div>
          <div style="margin-right:10px" class="kkkksg">
            <div style="color:#ccc;margin-right:5px; margin-top:-3px">切换</div>
            <div>
              <van-icon color="#eee" name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="xaibuhsa" @click="chuxialafan"></div>
    </div>

    <!-- 点击弹出 -->
    <!-- <van-popup
      v-model="show"
      position="top"
      :style="{ height: '50%' }"
      safe-area-inset-top="true"
      :get-container="getContainer"
    >-->
    <!-- 区地址 -->
    <!-- <van-row>
        <van-col span="8">全城</van-col>
        <van-col span="8">罗湖</van-col>
        <van-col span="8">福田区</van-col>
      </van-row>
      <van-row>
        <van-col span="8">南山区</van-col>
        <van-col span="8">龙岗区</van-col>
        <van-col span="8">宝安区</van-col>
      </van-row>
      <van-row>
        <van-col span="8">龙华新区</van-col>
        <van-col span="8">大鹏新区</van-col>
        <van-col span="8">坪山新区</van-col>
    </van-row>-->
    <!--最底部 -->
    <!-- <div class="butomin">
        <div class="kkkksg">
          <div>
            <van-icon size="20px" color="orange" name="location" />
          </div>
          <div>
            <span style="margin-left:5px">当前城市:</span>
            <span style="color:orange;margin-left:5px">深圳</span>
          </div>
        </div>
        <div style="margin-right:10px" class="kkkksg">
          <div style="color:#ccc;margin-right:5px; margin-top:-3px">切换</div>
          <div>
            <van-icon color="#eee" name="arrow" />
          </div>
        </div>
      </div>
    </van-popup>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制霸字的显示与隐藏
      flage: true,
      // 点击是否出现显示隐藏
      flag: false,
      // show: false,
      active: 0,
      mainaxrelist: [{ image_src: '../assets/images/logoo1_02.png' }, { image_src: '../assets/images/logoo_02.png' }, { image_src: '../assets/images/logoo_02.png' }],
      // 获取首页广告
      arrold: [],
      arrnew: []
    }
  },
  created() {
    // 页面一加载获取首页数据
    this.getpic()
  },
  methods: {
    // 跳转到内容页面
    gocontent() {
      this.$router.push({
        path: '/mainac'
      })
    },
    // 点击地址按妞 出现全屏下拉和遮罩层
    chuxiala() {
      this.flag = !this.flag
      this.flage = !this.flag
    },
    // 点击遮罩层 始终隐藏
    chuxialafan() {
      this.flag = false
      this.flage = !this.flag
    },
    showPopup() {
      this.show = true
    },
    getContainer() {
      // 返回一个特定的 DOM 节点，作为挂载的父节点
      return document.querySelector('.lunbo')
    },
    gobxiang() {
      this.$router.push({
        path: '/fenbaxa'
      })
    },
    // 请求首页广告位广告 (图片不显示)
    async getpic() {
      const { data: res } = await this.$http.get('Ad/lists')
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取列表失败')
      // this.guanggaolist = res.lists
      let newedui = {
        item: 4,
        item1: 5,
        item2: 6,
        item3: 7
      }
      let arrold = []
      let arrnew = []
      for (let i = 0; i < res.lists.length; i++) {
        if (i !== newedui.item && i !== newedui.item1 && i !== newedui.item2 && i !== newedui.item3) {
          arrnew.push(res.lists[i])
        } else {
          arrold.push(res.lists[i])
        }
      }
      console.log(arrnew)
      console.log(arrold)
      this.arrold = arrold
      this.arrnew = arrnew
    }
  }
}
</script>

<style lang='less' scoped>
.mainhome {
  position: relative;
  width: 100%;
  height: 100%;
  .hometop {
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: #ff7900;
    width: 100%;
    height: 80px;
    line-height: 80px;
    z-index: 100;
    // padding-top: 50px;
    .leftte {
      position: absolute;
      left: 20px;
      top: 10px;
      // transform: translateY(-50%);
      span {
        margin-right: 10px;
        color: #fff;
      }
    }
    .secondcol {
      position: absolute;
      right: 12px;
      top: 20px;
      // transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      width: 73%;
      // background-color:pink;
      .inputserch {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        width: 100%;
        height: 30px;
        border-radius: 20px;
        margin-right: 10px;
        padding: 0 10px;
        input {
          color: #666;
          font-size: 10px;
        }
      }
    }
  }
  // 全屏遮罩拉地址
  .quanpin {
    position: fixed;
    top: 80px;
    width: 100%;
    height: 100%;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.5);
    .sahngbudkhs {
      width: 100%;
      height: 50%;
      background-color: #fff;
      .van-row {
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        .van-col {
          width: 100px;
          height: 40px;
          margin: 15px 0;
          line-height: 40px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid #ccc;
        }
      }
    }
    .xaibuhsa {
      width: 100%;
      height: 50%;
    }
  }
  // 轮播图
  .lunbo {
    position: absolute;
    top: 64px;
    width: 100%;
    // height: 100px;
    // background-color: pink;
    img {
      width: 100%;
      height: 170px;
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
  // 内容区域
  .baoguode {
    position: absolute;
    top: 150px;
    left: 50%;
    width: 100%;
    // height: 1200px;
    padding-bottom: 80px;
    transform: translateX(-50%);
    margin-top: 100px;
    .wepjiang {
      font-size: 10px;
      width: 100%;
      // height: 400px;
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
      padding: 0 20px;
    }
    .wenzixia,
    .textp,
    .shangbu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
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
      width: 40px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #ff7900;
      color: #ff7900;
      border-radius: 10px;
      // font-size: 1px;
    }
  }
  // 弹出层
  // .van-popup {
  //   padding-top: 10px;
  //   z-index: -100;
  //   .van-row {
  //     display: flex;
  //     justify-content: space-between;
  //     padding-left: 20px;
  //     .van-col {
  //       width: 100px;
  //       height: 40px;
  //       margin: 15px 0;
  //       line-height: 40px;
  //       text-align: center;
  //       border-radius: 20px;
  //       border: 1px solid #ccc;
  //     }
  //   }
  // }
  .butomin {
    width: 88%;
    height: 50px;
    // line-height: 50px;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 18px;
    padding: 0 5px;
    margin-top: 40px;
    font-size: 15px;
    .kkkksg {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

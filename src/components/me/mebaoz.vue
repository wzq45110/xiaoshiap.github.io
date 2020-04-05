<template>
  <div class="mainzhong">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">我的保中</div>
    </div>
    <!-- 卡片区域 -->
    <div class="bbbsdhgfuisgfy">
      <div class="carli" v-for="(item, index) in xainglist" :key="index">
        <div class="picc">
          <img src="../../assets/images/zhong.png" />
        </div>
        <div class="cenhan">
          <div class="shaung">
            巨无霸双人堡套餐
            <van-icon name="cross" />30
          </div>
          <div>9月2日10: 00自动开奖</div>
        </div>
        <router-link :to="item.yanse">
          <div
            class="rightyou"
            :style="{'background-color': item.test === '去看看' ? '#ff7900' :  '#ccc'}"
          >{{item.test}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xainglist: [{ test: '去看看', yanse: '/fenbaxa' }, { test: '去看看', yanse: '/fenbaxa' }, { test: '已开奖', yanse: '' }, { test: '已开奖', yanse: '' }]
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
.mainzhong {
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
  .bbbsdhgfuisgfy {
    position: absolute;
    top: 80px;
    width: 100%;
    .carli {
      width: 90%;
      height: 125px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      margin-left: 15px;
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
        height: 70px;
        transform: translateY(-50%);
        font-size: 12px;
        .shaung {
          font-size: 14px;
          font-weight: 700;
        }
      }
      .rightyou {
        position: absolute;
        right: 0;
        bottom: 22.5px;
        width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        // background-color: #ff7900;
        border-radius: 7.5px;
        color: #fff;
      }
    }
  }
}
</style>

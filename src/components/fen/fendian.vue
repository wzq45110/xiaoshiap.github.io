<template>
  <div>
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
      <div class="logoqu" @click="sfdfdsfgf">{{zhahu ? "关注": '取消关注'}}</div>
    </div>
    <div class="gegetiao"></div>
    <!--店详情页面 -->
    <div class="dianrei" v-for="(item, index) in arrshuzusdf" :key="index">
      <div class="zuodinzhi">
        <div>
          <span style="margin-right:10px">肯德基(西乡店)</span>
          <van-tag
            round
            plain
            color="#FF7901"
            text-color="#FF7901"
            type="warning"
            @click="panduanzhen"
          >{{zhenjia ? "+关注": '取消关注'}}</van-tag>
        </div>
        <div style="font-size:12px; color:#717171">深圳市罗湖区文锦路13号楼 3号 一侧吧</div>
        <div style="font-size:10px; color:#ccc">
          <van-icon name="location" color="#FF7800" />
          <van-icon name="arrow-left" />0.5km 离我最近
        </div>
      </div>
      <div class="lineba"></div>
      <div class="youbilo">
        <van-icon name="phone-circle-o" size="20px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhahu: false,
      // 关注与否
      zhenjia: true,
      // 分店列表
      arrshuzusdf: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
      ]
    }
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1)
    },
    // 判断真假
    panduanzhen() {
      this.zhenjia = !this.zhenjia
    },
    sfdfdsfgf() {
      this.zhahu = !this.zhahu
    }
  }
}
</script>

<style lang='less' scoped>
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
  height: 100px;
  border-bottom: 1px solid #eeeeee;
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
    width: 170px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    margin-left: 15px;
    .tufendan {
      width: 50px;
      height: 50px;
      border: 5px solid #fed6b1;
      margin-right: 20px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.gegetiao {
  width: 100%;
  height: 15px;
  background-color: #eeeeee;
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
</style>

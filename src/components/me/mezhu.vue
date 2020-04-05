<template>
  <div class="anzhuumain">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">我要赞助</div>
    </div>
    <div class="baoguoqilai">
      <!-- 输入区域 -->
      <van-cell-group>
        <van-field left-icon="coupon" label="名称:" placeholder="请输入名称" />

        <van-field left-icon="manager" label="联系人:" placeholder="请输入联系人" />
        <van-field left-icon="bag" label="职务:" placeholder="请输入你的职务" />
        <van-field left-icon="phone-circle" label="电话:" placeholder="请输入11位的联系方式" />
        <van-field left-icon="location" label="地址:" placeholder="请输入你的详细地址" />
      </van-cell-group>
      <!-- 提交按钮区域 -->
      <div class="anquuu">
        <button class="butjiao">提交</button>
      </div>
      <!-- 联系区域 -->
      <div class="phoneren">
        <div style="margin:15px 0;">联系我们</div>
        <div class="xiaodianh">电话: 0755-xxxxxx</div>
        <div class="xiaodianh">手机: 138xxxxxxxx 张经理</div>
        <div style="color:#FE7D11; font-size:18px;margin-top:15px">全国服务热线: 400-xxx-xxxx</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
.anzhuumain {
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
  .baoguoqilai {
    width: 100%;
    margin-top: 80px;
    .anquuu {
      position: relative;
      width: 100%;
      height: 60px;
      background-color: #fff;
      padding-top: 20px;
      .butjiao {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        color: #fff;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        background-color: #ff7900;
      }
    }
    .phoneren {
      box-sizing: border-box;
      margin-top: 10px;
      background-color: #fff;
      width: 100%;
      // height: 500rpx;
      padding-top: 15px;
      padding-left: 10px;
      .xiaodianh {
        font-size: 12px;
        width: 100%;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>

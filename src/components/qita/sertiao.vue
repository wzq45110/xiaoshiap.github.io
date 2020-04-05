<template>
  <div class="maintiao">
    <!-- 顶部标题 -->
    <div class="dingtiiti">
      <div class="fanhuian" @click="gobackkk">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">霸王到用户服务条款</div>
    </div>
    <div class="neizhong">
      <h2>{{objshuju.summary}}</h2>
      <div style="margin-top:20px" v-html="objshuju.context">{{objshuju.context}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放数据
      objshuju: ''
    }
  },
  created() {
    // 隐私政策与用户协议
    this.getinfoshu()
  },
  methods: {
    // 返回上一级
    gobackkk() {
      this.$router.go(-1)
    },
    async getinfoshu() {
      const { data: res } = await this.$http.get('Cms/detail', {
        params: { id: 103 }
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取数据失败！')
      this.objshuju = res.detail
    }
  }
}
</script>

<style lang='less' scoped>
.maintiao {
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
    .fanhuian {
      position: absolute;
      top: 50%;
      color: #fff;
      left: 10px;
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
  .neizhong {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 100px;
    padding: 0 20px;
    h3,
    h2 {
      margin-top: 30px;
    }
  }
}
</style>

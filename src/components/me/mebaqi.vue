<template>
  <div class="hotzhimain">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">霸气值</div>
    </div>
    <!-- 头部区域 -->
    <div class="tophot">
      <div class="shzhi">
        <div>
          今日已获得:
          <span style="color:orange; font-size:15px; font-weight:400">{{objpoint.point_today}}</span>
        </div>
        <div style="margin-right:10px;">
          总霸气值:
          <span style="color:orange; font-size:15px; font-weight:400">{{objpoint.points}}</span>
        </div>
      </div>
      <div class="xiahi">
        <div>连续签到领取霸气值</div>
        <div class="biao">
          <div style="margin-right:2px">签到提醒</div>
          <div>
            <van-switch active-color="#ccc" inactive-color="#fff" size="15px" v-model="checked" />
          </div>
        </div>
      </div>
    </div>
    <!-- 后面部分 -->
    <div class="houmian">
      <!--进度栏 -->
      <div class="jibu">
        <!-- 步子 -->

        <!-- <van-steps
            steps="{{ steps }}"
            active="0"
            inactive-icon="add"
            active-color="orange"
            active-icon="add"
        />-->
        <van-steps inactive-icon="add" active-icon="add" active-color="#FF7900">
          <van-step>第一天</van-step>
          <van-step>第二天</van-step>
          <van-step>第三天</van-step>
          <van-step>第四天</van-step>
          <van-step>第五天</van-step>
          <van-step>第六天</van-step>
          <van-step>第七天</van-step>
        </van-steps>

        <!--  -->
        <div class="ziti">已领取</div>
        <div class="butqian">已签到, 明日再来</div>
      </div>
      <!-- 每日任务 -->
      <div class="dayren">
        <div class="diyiday">每日任务</div>
        <div class="wenzih" v-for="(item, index) in jianglist" :key="index">
          <div class="leftjia">
            <div style="font-size:13px">{{item.test_1}}</div>
            <div class="xaiozi">
              <span>{{item.test_3}}</span>
              {{item.test_4}}
              <span>{{item.test_5}}</span>
              {{item.test_6}}
            </div>
          </div>
          <div class="logoqu">{{item.test_2}}</div>
        </div>
      </div>
      <!-- 新手任务 -->
      <div class="dayren">
        <div class="diyiday">新手任务</div>
        <div class="wenzih" v-for="(item, index) in xinlist" :key="index">
          <div class="leftjia">
            <div>{{item.testt_1}}</div>
            <div class="xaiozi">
              <span>{{item.testt_2}}</span>
              {{item.testt_3}}
            </div>
          </div>
          <div class="logoqu">{{item.testt_4}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 每日任务内容文字
      jianglist: [
        {
          test_1: '参与每日或自助抽奖',
          test_2: '去参与',
          test_3: '0.3',
          test_4: '霸气值/次, 日上限',
          test_5: '3',
          test_6: '霸气值'
        },
        {
          test_1: '参与每日或自助抽奖',
          test_2: '去参与',
          test_3: '0.3',
          test_4: '霸气值/次, 日上限',
          test_5: '3',
          test_6: '霸气值'
        },
        {
          test_1: '参与每日或自助抽奖',
          test_2: '去参与',
          test_3: '0.3',
          test_4: '霸气值/次, 日上限',
          test_5: '3',
          test_6: '霸气值'
        },
        {
          test_1: '参与每日或自助抽奖',
          test_2: '去参与',
          test_3: '0.3',
          test_4: '霸气值/次, 日上限',
          test_5: '3',
          test_6: '霸气值'
        }
      ],
      // 新手任务内容文字
      xinlist: [
        {
          testt_1: '下载App',
          testt_2: '50',
          testt_3: '霸气值',
          testt_4: '去下载'
        },
        {
          testt_1: '下载App',
          testt_2: '50',
          testt_3: '霸气值',
          testt_4: '去下载'
        },
        {
          testt_1: '下载App',
          testt_2: '50',
          testt_3: '霸气值',
          testt_4: '去下载'
        }
      ],
      checked: false,
      // 霸气总值 和今日值 存储
      objpoint: {}
    }
  },
  created() {
    // 页面刷新就更新数据
    this.getbaqiuzhi()
  },
  methods: {
    gobackkk() {
      this.$router.go(-1)
    },
    // 调用户霸气值数据
    async getbaqiuzhi() {
      const { data: res } = await this.$http.get('UserPoint/detail')
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取数据失败')
      this.objpoint = res.detail
    }
  }
}
</script>

<style lang='less' scoped>
.hotzhimain {
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
  .tophot {
    width: 100%;
    height: 120px;
    // background-color: pink;
    margin-top: 80px;
    .shzhi {
      border-bottom: 1px solid #ccc;
    }
    .shzhi,
    .xiahi {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 60px;
      padding: 0 20px;
    }
    .biao {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // margin-right: 20px;
    }
  }
  .houmian {
    width: 100%;
    // height: 1000px;
    background-color: #eeeeee;
    padding-top: 30px;
    .jibu {
      position: relative;
      width: 100%;
      height: 160px;
      background-color: #fff;
      .ziti {
        margin-bottom: 10px;
        margin-left: 10px;
        color: orange;
      }
      .butqian {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 50px;
        line-height: 50px;
        background-color: #ff7900;
        border-radius: 25px;
        // margin-top: 100px;
        color: #fff;
        text-align: center;
        font-size: 20px;
      }
    }
    .dayren {
      width: 100%;
      // height: 400px;
      background-color: #fff;
      margin-top: 30px;
      .diyiday {
        box-sizing: border-box;
        padding-left: 20px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-weight: 900;
      }
      .wenzih {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        border-top: 1px solid #eeeeee;
        .logoqu {
          background-color: #ff7900;
          color: #fff;
          height: 30px;
          line-height: 30px;
          text-align: center;
          width: 140px;
          border-radius: 10px;
          margin-right: 20px;
        }
        .leftjia {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 500px;
          height: 50px;
          box-sizing: border-box;
          padding-left: 20px;
          .xaiozi {
            color: #b2b2b2;
            font-size: 10px;
            span {
              color: #ff7900;
            }
          }
        }
      }
    }
  }
}
</style>

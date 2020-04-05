<template>
  <div class="newmaindre">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">新增地址</div>
    </div>
    <!-- <van-icon name="manager" slot="left-icon"/> -->
    <div class="kaoshangmian">
      <!-- <van-cell-group>
        <van-cell title="尼古拉斯" icon="contact" />
        <van-cell title="13745634890" icon="orders-o" />
        <van-cell title="重庆市渝北区冉家呗" icon="location-o" />
        <van-cell title="请输入详细地址" icon="aim" />
      </van-cell-group>-->

      <van-cell-group>
        <van-field @focus="chucuhcu" v-model="username" placeholder="请输入用户名" left-icon="contact" />
        <van-field @focus="chucuhcu" v-model="phone" placeholder="请输入手机号" left-icon="orders-o" />
        <van-field @focus="showfou" v-model="city" placeholder="请输入地址" left-icon="location-o" />
        <van-field @focus="chucuhcu" v-model="details" placeholder="请输入详细地址" left-icon="aim" />
      </van-cell-group>
    </div>
    <!-- 割线区域 -->
    <div class="fengege"></div>
    <!-- 默认地址 -->
    <div class="mozhi">
      <!-- <van-radio checked-color="#FF7900">设置默认地址</van-radio> -->
      <van-checkbox
        v-model="checked"
        checked-color="#FF7900"
        :disabled=" username=== '' || phone ==='' ||   city === '' || details === '' ? true : false"
      >设置默认地址</van-checkbox>
    </div>
    <!-- 保存按钮区域 -->
    <div class="baoan" @click="baocun">保存</div>

    <!-- 弹出层区域 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <!-- 内容为省市区 -->
      <div v-show="show">
        <van-area
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          value="110101"
          @confirm="onAddrConfirm"
          @cancel="quxiao"
        ></van-area>
      </div>
    </van-popup>
  </div>
</template>

<script>
import areaList from '../../assets/js/area'
export default {
  // 引入地区组件 是个对象
  components: {
    vanArea: areaList
  },
  data() {
    return {
      checked: false,
      // 数据省市区
      areaList: null,
      // 是否显示
      show: false,
      // 用户
      username: '',
      // 手机号
      phone: '',
      // 地区
      city: '',
      // 详细地址
      details: '',
      // 省id
      province: '',
      // 市id
      shi: '',
      // 区id
      district: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      // 初始化地址选择器
      this.areaList = areaList // 初始化选择器数据
    },
    onAddrConfirm(e) {
      // 点击确认，获取所选的省市区数据
      // 确定选择,返回的必定是三元素数组
      console.log('this.onAddrConfirm=>e', e)
      this.province = e[0].name
      this.shi = e[1].name
      this.district = e[2].name
      this.city = e[0].name + e[1].name + e[2].name
      this.show = false
    },
    // 取消按钮
    quxiao() {
      this.show = false
    },
    gobackkk() {
      this.$router.go(-1)
    },
    // 当获得焦点时就将checked 改为 false
    chucuhcu() {
      this.checked = false
    },
    // 控制弹出层
    showfou() {
      this.show = true
      this.checked = false
    },
    // 点击保存按钮时 要发起请求 把数据上传  而且同时要跳转到收货地址页面
    async baocun() {
      // 发送请求
      let tozhi = window.sessionStorage.getItem('token')
      const { data: res } = await this.$http.post('UserAddress/add', {
        post: {
          province: this.province,
          city: this.shi,
          area: this.district,
          details_site: this.details,
          name: this.username,
          phone: this.phone,
          type: this.checked,
          token: tozhi
        }
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('保存失败！')
      this.$toast('保存成功')
      this.$router.push({
        path: '/fensou'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.newmaindre {
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
  .kaoshangmian {
    width: 100%;
    margin-top: 80px;
  }
  .fengege {
    width: 100%;
    height: 15px;
    // margin-top: px;
    background-color: #eeeeee;
  }
  .mozhi {
    margin-left: 15px;
    margin-top: 15px;
  }
  .baoan {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //   top: 400rpx;
    width: 90%;
    height: 40px;
    background-color: #ff7900;
    border-radius: 20px;
    margin-top: 40px;
    color: #ffff;
    line-height: 40px;
    text-align: center;
  }
}
</style>

<template>
  <div class="shoudimain">
    <!-- 顶部标题 -->
    <div class="dingtiiti" @click="gobackkk">
      <div class="fanhuian">
        <van-icon size="20px" name="arrow-left" />
      </div>
      <div class="yiuiui">收获地址</div>
    </div>
    <!-- 具体内容 -->
    <div class="morendre" v-for="(item, index) in getadree" :key="index">
      <!-- 隔条 -->
      <div class="tiaoge"></div>
      <div>
        <van-cell :title="item.name" :value="item.phone" size="large" :label="item.address" />
        <div class="biande">
          <!-- 左侧 -->
          <div class="leftzuo">
            <div class="kuangtu">
              <van-icon color="white" name="success" />
            </div>
            <div class="fontzi">默认地址</div>
          </div>
          <!-- 右侧 -->
          <div class="biandeadd">
            <div class="tuleft">
              <van-icon name="edit" />编辑
            </div>
            <div class="turight" @click="deletel(item.id)">
              <van-icon name="delete" />删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="dianniu" @click="newdrem">新增收货地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // color: "orange",
      // borde: "none",
      list1: [1, 2],
      // 存放数据列表
      getadree: [],
      // 存储地址的id
      address_id: ''
    }
  },
  created() {
    // 调用请求获取地址列表
    this.grtadress()
  },
  methods: {
    // colorbian() {
    //   this.color = !this.color
    //   this.borde = !this.borde
    // },
    newdrem() {
      this.$router.push({
        path: '/fenadd'
      })
    },
    gobackkk() {
      this.$router.go(-1)
    },
    // 发送请求获取地址列表
    async grtadress() {
      let trss = window.sessionStorage.getItem('token')
      const { data: res } = await this.$http.get('UserAddress/lists', {
        params: { token: trss }
      })
      console.log(res)
      if (res.status !== 10001) return this.$toast('获取失败')
      this.getadree = res.lists
      // this.address_id = res.lists.id
    },
    // 点击删除按钮后触发
    deletel(id) {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认删除'
        })
        .then(async () => {
          // on confirm 确认时候触发 请求删除接口
          const { data: res } = await this.$http.post('UserAddress/delete', {
            address_id: id
          })
          console.log(res)
          if (res.status !== 10001) return this.$toast('操作失败！')
          // 当删除成功后就立刻在此重新获取数据列表 重新渲染列表
          this.grtadress()
        })
        .catch()
    }
  }
}
</script>

<style lang='less' scoped>
.shoudimain {
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
  .morendre {
    width: 100%;
    height: 80px;
    // background-color: pink;
    margin-top: 80px;
    .tiaoge {
      width: 100%;
      height: 20px;
      background-color: #f1f1f1;
    }
    .biande {
      width: 100%;
      height: 50px;
      //   background-color: green;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .leftzuo,
      .biandeadd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-size: 12px;
      }
      .leftzuo {
        margin-left: 15px;
        width: 70px;
        .kuangtu {
          width: 15px;
          height: 15px;
          border: 1px solid #ccc;
        }
      }
      .biandeadd {
        width: 110px;
        margin-right: 15px;
      }
    }
  }
  .dianniu {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #ff7900;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
  }
}
</style>

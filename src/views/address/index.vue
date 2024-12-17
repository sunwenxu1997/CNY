<template>
  <div class="app-content-100vh">
    <img class="title" src="@/assets/prize/留下您的奖品接收地址.png" alt="" />
    <div class="address-content">
      <van-field v-model="form.name" label="收件人姓名" placeholder="请输入姓名" :border="false" />
      <van-field v-model="form.mobile" label="收件人手机号" placeholder="请输入手机号" type="tel" :border="false" />
      <van-field
        readonly
        clickable
        name="picker"
        :value="form.address"
        label="地址省市区"
        placeholder="点击选择省市区"
        style="margin-bottom: 0"
        @click="showPicker = true"
      />
      <van-field
        v-model="form.detailAddress"
        rows="2"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="详细地址(例如**街**号)"
        show-word-limit
      />
      <div class="checkbox">
        <van-checkbox icon-size="15px" v-model="checked" checked-color="#31d925">
          <span style="font-size: 12px; color: #5a5a5a">同意提供上述收件信息，用于主办方向我寄送活动奖品</span>
        </van-checkbox>
      </div>
    </div>
    <div class="submit" @click="submit">
      <img src="@/assets/prize/立即提交@3x.png" alt="" />
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-area :area-list="areaList" @confirm="confirmArea" />
    </van-popup>
  </div>
</template>

<script>
import { saveAddress } from '@/api/user'
import { mapGetters } from 'vuex'
import { areaList } from '@vant/area-data'
export default {
  data() {
    return {
      areaList,
      checked: false,
      form: {
        awardId: '', // 奖品id
        name: '',
        mobile: '',
        address: '',
        detailAddress: ''
      },
      showPicker: false
    }
  },
  computed: {
    ...mapGetters(['memberId'])
  },
  mounted() {
    this.form.awardId = this.$route.query.id
  },
  methods: {
    // 获取我的奖品列表
    getMyLotteryList() {
      //   getMyLotteryList().then((res) => {
      //     this.prizeList = res.data
      //   })
    },
    confirmArea(arr) {
      this.form.address = arr.map((item) => item.name).join('-')
      console.log(this.form.address)
      this.showPicker = false
    },
    submit() {
      const { name, mobile, address, detailAddress } = this.form
      if (!name) {
        this.$toast('请输入姓名')
        return
      }
      if (!mobile) {
        this.$toast('请输入手机号')
        return
      }
      if (!address) {
        this.$toast('请选择地址省市区')
        return
      }
      if (!detailAddress) {
        this.$toast('请输入详细地址')
        return
      }
      if (!this.checked) {
        this.$toast('请勾选同意协议')
        return
      }
      const data = {
        memberId: this.memberId,
        awardId: this.form.awardId,
        name,
        mobile,
        address,
        detailAddress
      }
      saveAddress(data).then((res) => {
        this.$toast('提交成功')
        this.$router.replace('/')
      })
    }
  }
}
</script>
<style lang="scss">
.address-content {
  .van-field {
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
  }
}
</style>
<style lang="scss" scoped>
.app-content-100vh {
  background-size: 100% !important;
  background-image: url('../../assets/prize/底图.png');
  background-position: center;
  .title {
    display: block;
    width: 70%;
    margin: 0 auto;
    margin-top: 25vh;
    margin-bottom: 0.5rem;
  }
}
.address-content {
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 0.5rem;
  .checkbox {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}
.submit {
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  &:active {
    transform: scale(0.95);
  }
  img {
    width: 100%;
    display: block;
  }
}
</style>

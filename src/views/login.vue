<template>
  <div class="navbar">
    <!-- 导航栏部分 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <!-- 表单部分 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" color="#1cb676"
          >登录</van-button
        >
      </div>
    </van-form>
    <p>还没有账号，去注册~</p>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
  }
  :deep(.van-icon) {
    color: #fff;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  p{
    text-align: center;
    color:#666666;
    font-size: 12px;
  }
}
</style>

<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home" @click="clickFn"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" to="/home/list" @click="acitve = 1"
        >找房</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" to="/home/news" @click="acitve = 2"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/home/profile" @click="acitve = 3"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    clickFn() {
      location.hash = '/home'
    }
  }
}
</script>

<style></style>

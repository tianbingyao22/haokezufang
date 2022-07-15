<template>
  <div class="lay">
    <div class="user">
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" class="bgi" />
      <div class="userinfo">
        <div class="touxiang">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
            class="touxiangimg"
          />
        </div>
        <div class="userinfocard">
          <!-- <div class="username">{{ data.body.nickname }}</div> -->
          <div class="username">游客</div>
          <div class="edit">
            <span>退出</span>
          </div>
          <div class="editinfo">
            编辑个人资料
            <span> </span>
            <van-icon name="play" />
          </div>
        </div>
      </div>
    </div>
    <div class="function">
      <van-grid clickable :column-num="3" :border="false">
        <van-grid-item icon="star-o" text="我的收藏" to="/" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/" />
        <van-grid-item icon="underway-o" text="看房记录" to="/" />
        <van-grid-item icon="credit-pay" text="成为房主" to="/" />
        <van-grid-item icon="contact" text="个人资料" to="/" />
        <van-grid-item icon="service-o" text="联系我们" to="/" />
      </van-grid>
    </div>
    <div class="guanggao">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getuser } from '@/apis/user'
export default {
  data() {
    return {
      data: {}
    }
  },
  async created() {
    const res1 = await getuser()
    // console.log(res1)
    this.data = res1.data
  }
}
</script>

<style lang="less" scoped>
.lay {
  height: 100%;
  .user {
    min-height: 300px;
    position: relative;
    .bgi {
      width: 100%;
      border-style: none;
    }
    .userinfo {
      position: absolute;
      background: #fff;
      width: 75%;
      height: 55%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      margin: 50px auto 0;
      padding: 0 20px;
      text-align: center;
      font-size: 13px;
      .touxiang {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 5px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
        .touxiangimg {
          width: 100%;
          border-radius: 50%;
          border-style: none;
        }
      }
      .userinfocard {
        padding-top: 15px;
        .username {
          margin-top: -30px;
          margin-bottom: 10px;
        }
        .edit {
          margin-bottom: 30px;
          span {
            border-radius: 30px;
            color: #fff;
            padding: 2px 15px;
            background: #21b97a;
            font-size: 12px;
          }
        }
        .editinfo {
          color: #999;
          font-size: 12px;
          margin-top: 20px;
          span {
            transform: rotate(-90deg);
            display: inline-block;
            margin-left: 3px;
            i {
              font-size: 12px;
              vertical-align: middle;
              font-family: 'iconfont' !important;
              font-size: 16px;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
            }
          }
        }
      }
    }
  }
  .function {
    margin-top: 15px;
    :deep(.van-grid-item__icon) {
      font-size: 20px;
    }
  }
  .guanggao {
    text-align: center;
    img {
      width: 92%;
    }
  }
}
</style>

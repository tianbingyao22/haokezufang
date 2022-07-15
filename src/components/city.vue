<template>
  <div class="city">
    <van-index-bar :index-list="indexList">
      <van-index-anchor :index="item" v-for="item in indexList" :key="item">
        {{ item }}
        <slot
          ><van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本"
        /></slot>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>

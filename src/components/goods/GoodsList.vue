<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :item="item"/>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  justify-content: space-evenly;
}
</style>
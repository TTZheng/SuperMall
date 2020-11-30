<template>
  <div class="recommmend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommmend {
  display: flex;
  text-align: center;
  padding: 7px 0 15px;
  font-size: 15px;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 7px;
}
</style>
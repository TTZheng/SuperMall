<template>
  <div class="tabControl">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item"
      :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tabControl {
  display: flex;
  z-index: 99;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-control-item span {
  padding: 7px 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
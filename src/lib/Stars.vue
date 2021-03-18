<template>
  <div class="vite-stars">
    <svg
      class="icon"
      aria-hidden="true"
      v-for="i in 5"
      :key="i"
      :class="i <= num ? 'active' : ''"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(i)"
    >
      <use xlink:href="#icon-star"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props, context) {
    const setStarNum = (i) => {
      context.emit("update:num", i);
    };

    return { setStarNum };
  },
};
</script>

<style lang='scss'>
.vite-stars {
  .icon {
    transition: color 0.5s;

    &.active {
      color: #fbab06;
    }
  }
}
</style>
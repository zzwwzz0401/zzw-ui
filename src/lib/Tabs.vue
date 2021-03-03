<template>
  <div class="vite-tabs">
    <div class="vite-tabs-nav" ref="container">
      <div
        class="vite-tabs-nav-item"
        v-for="(item, index) in titleList"
        :ref="
          (el) => {
            if (item === selected) selectedItem = el;
          }
        "
        :key="index"
        :class="{ selected: item === selected }"
        @click="select(item)"
      >
        {{ item }}
      </div>
      <div class="vite-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="vite-tabs-content">
      <component
        class="vite-tabs-content-item"
        :is="content"
        :key="content.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    //检查子标签类型
    const Tem = context.slots.default();
    Tem.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("Tabs 子标签必须为Tab");
      }
    });
    //title列表
    const titleList = Tem.map((item) => {
      return item.props.title;
    });
    //切换导航
    const select = (e: string) => {
      console.log("e", e);
      context.emit("update:selected", e);
    };
    //切换导航时相应内容
    const content = computed(() => {
      return Tem.find((item) => item.props.title === props.selected);
    });
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    //在挂载后才开始监听,避免取值为空报错
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const {
            left: container_Left,
          } = container.value.getBoundingClientRect();
          const {
            left: result_left,
          } = selectedItem.value.getBoundingClientRect();
          const left = result_left - container_Left;
          indicator.value.style.left = left + "px";
        },
        {
          flush: "post",
        }
      ); //监听style变化
    });
    return {
      Tem,
      titleList,
      select,
      content,
      indicator,
      container,
      selectedItem,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vite-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1"></Demo>
  </div>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo2"></Demo>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from "./Switch.Demo1.vue";
import SwitchDemo2 from "./Switch.Demo2.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    };
  },
};
</script>

<style>
</style>
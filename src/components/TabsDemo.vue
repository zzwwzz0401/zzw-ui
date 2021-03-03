<template>
  <h1>示例一</h1>
  <Tabs v-model:selected="selected_title">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selected_title = ref("导航一");
    return { selected_title };
  },
};
</script>

<style>
</style>
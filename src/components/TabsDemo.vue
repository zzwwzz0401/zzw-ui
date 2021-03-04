<template>
  <demo :component="BaseDemo"></demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BaseDemo from "./Tabs.BaseDemo.vue";
export default {
  components: { Demo },
  setup() {
    return { BaseDemo };
  },
};
</script>
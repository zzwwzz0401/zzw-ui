<template>
  <Demo :component="BaseDemo"></Demo>
  <Demo :component="SimpleDemo"></Demo>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BaseDemo from "./Dialog.BaseDemo.vue";
import SimpleDemo from "./Dialog.SimpleDemo.vue";
export default {
  components: { Demo },
  setup() {
    return { BaseDemo, SimpleDemo };
  },
};
</script>
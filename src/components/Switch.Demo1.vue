<demo>基本使用</demo>

<template>
  <Switch v-model:value="open_flag"></Switch>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const open_flag = ref(false);
    return { open_flag };
  },
};
</script>
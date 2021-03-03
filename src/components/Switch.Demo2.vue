<demo>
支持禁用
</demo>

<template>
  <Switch v-model:value="open_flag" disabled></Switch>
</template>

<script>
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
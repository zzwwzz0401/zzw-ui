<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="open_flag"></Switch>
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
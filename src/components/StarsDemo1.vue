<demo>基本使用</demo>

<template>
  <Stars v-model:num="num" :size="30" />
</template>

<script lang="ts">
import { ref } from "vue";
import Stars from "../lib/Stars.vue";

export default {
  components: { Stars },
  setup() {
    const num = ref(3);
    return { num };
  },
};
</script>
<demo>基本使用</demo>

<template>
  <div>
    <Button>hi</Button>
    <Button theme="link">hi</Button>
    <Button theme="text">hi</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
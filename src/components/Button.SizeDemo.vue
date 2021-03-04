<demo>支持 small、normal、big三种类型，默认为normal</demo>

<template>
  <div>
    <Button size="small">hi</Button>
    <Button>hi</Button>
    <Button size="big">hi</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
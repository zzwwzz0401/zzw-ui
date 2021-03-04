<demo>支持 main、normal、danger三种类型，默认为normal</demo>

<template>
  <div>
    <Button level="main">main</Button>
    <Button level="normal">normal</Button>
    <Button level="danger">danger</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
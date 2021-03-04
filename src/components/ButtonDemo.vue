<template>
  <Demo :component="BaseDemo"></Demo>
  <Demo :component="SizeDemo"></Demo>
  <Demo :component="LevelDemo"></Demo>
  <Demo :component="DisabledDemo"></Demo>
  <Demo :component="LoadingDemo"></Demo>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import BaseDemo from "./Button.BaseDemo.vue";
import SizeDemo from "./Button.SizeDemo.vue";
import LevelDemo from "./Button.LevelDemo.vue";
import DisabledDemo from "./Button.DisabledDemo.vue";
import LoadingDemo from "./Button.LoadingDemo.vue";
import Demo from "./Demo.vue";
export default {
  components: { Button, Demo },
  setup() {
    return { BaseDemo, SizeDemo, LevelDemo, DisabledDemo, LoadingDemo };
  },
};
</script>
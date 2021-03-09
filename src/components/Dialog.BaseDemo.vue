<demo>基本使用</demo>

<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible_flag" :Affirm="onAffirm" :Cancel="onCancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>hello</strong>
      <div>hi</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const visible_flag = ref(false);
    const toggle = () => {
      visible_flag.value = !visible_flag.value;
    };
    const onAffirm = () => {};
    const onCancel = () => {};
    return { visible_flag, toggle, onAffirm, onCancel };
  },
};
</script>

<style>
</style>
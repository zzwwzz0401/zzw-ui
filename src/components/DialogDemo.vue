<template>
  <Botton @click="toggle">toggle</Botton>
  <Dialog v-model:visible="visible_flag" :Affirm="onAffirm" :Cancel="onCancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>hello</strong>
      <div>hi</div>
    </template>
    
  </Dialog>

  <Botton @click="showDialog">showDialog</Botton>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Botton from "../lib/Botton.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Botton },
  setup() {
    const visible_flag = ref(false);
    const toggle = () => {
      visible_flag.value = !visible_flag.value;
    };
    const onAffirm = () => {};
    const onCancel = () => {};
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "内容",
      });
    };
    return { visible_flag, toggle, onAffirm, onCancel, showDialog };
  },
};
</script>

<style>
</style>
<demo>简易开启Dialog</demo>

<template>
  <Botton @click="showDialog">showDialog</Botton>
</template>

<script lang="ts">
import Botton from "../lib/Button.vue";
import { h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Botton },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "内容",
        Affirm: () => {},
        Cancel: () => {},
      });
    };
    return { showDialog };
  },
};
</script>
<template>
  <h1>示例一</h1>
  <Botton>hi</Botton>
  <Botton theme="link">hi</Botton>
  <Botton theme="text">hi</Botton>
  <h1>示例二</h1>
  <Botton size="small">hi</Botton>
  <Botton>hi</Botton>
  <Botton size="big">hi</Botton>
  <h1>示例三</h1>
  <Botton level="main">main</Botton>
  <Botton level="normal">normal</Botton>
  <Botton level="danger">danger</Botton>
  <br />
  <br />
  <Botton level="main">main</Botton>
  <Botton level="normal" theme="link">normal</Botton>
  <Botton level="danger" theme="text">danger</Botton>
  <h1>示例四</h1>
  <Botton disabled>hi</Botton>
  <h1>示例五</h1>
  <Botton loading>loading...</Botton>
  <Botton>finish</Botton>
</template>

<script lang="ts">
import Botton from "../lib/Botton.vue";
export default {
  components: { Botton },
};
</script>

<style lang="scss">
</style>
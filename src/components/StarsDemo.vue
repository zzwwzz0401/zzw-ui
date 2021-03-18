<template>
    <div>
        <Demo :component="StarsDemo1"></Demo>
    </div>
</template>

<script lang="ts">
    import StarsDemo1 from "./StarsDemo1.vue";
    import Demo from "./Demo.vue";
    export default {
        components: {
            Demo,
        },
        setup() {
            return {
                StarsDemo1
            };
        },
    };
</script>

<style>
</style>
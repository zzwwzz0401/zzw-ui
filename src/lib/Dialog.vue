<template>
  <template v-if="visible">
    <!-- teleport 防止Dialog被遮挡 -->
    <teleport to="body">
      <div class="vite-dialog-cover" @click="onCover"></div>
      <div class="vite-dialog-wrapper">
        <div class="vite-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="vite-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="onAffirm">Affirm</Button>
            <Button @click="onCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    //打开关闭
    visible: {
      type: Boolean,
      default: false,
    },
    //点击外界是否关闭Dialog
    onClickCover: {
      type: Boolean,
      default: true,
    },
    //确认执行函数
    Affirm: {
      type: Function,
    },
    //取消执行函数
    Cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const onCover = () => {
      if (props.onClickCover) {
        close();
      }
    };
    const close = () => {
      context.emit("update:visible", false);
    };
    const onAffirm = () => {
      if (props.Affirm && props.Affirm() !== false) {
        close();
      }
    };
    const onCancel = () => {
      if (props.Cancel && props.Cancel() !== false) {
        close();
      }
    };
    return { onCover, close, onAffirm, onCancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.vite-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 18em;
  max-width: 90%;

  &-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
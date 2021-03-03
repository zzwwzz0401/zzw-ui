<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Botton.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, onMounted, ref, watchEffect } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const codeVisible = ref(false);

    // const setupTypewriter = (t) => {
    //   let HTML = t.innerHTML;
    //   t.innerHTML = "";
    //   let cursorPosition = 0,
    //     tag: any = "",
    //     writingTag = false,
    //     tagOpen = false,
    //     typeSpeed = 100,
    //     tempTypeSpeed = 0;
    //   let type = function () {
    //     if (writingTag === true) {
    //       tag += HTML[cursorPosition];
    //     }
    //     if (HTML[cursorPosition] === "<") {
    //       tempTypeSpeed = 0;
    //       if (tagOpen) {
    //         tagOpen = false;
    //         writingTag = true;
    //       } else {
    //         tag = "";
    //         tagOpen = true;
    //         writingTag = true;
    //         tag += HTML[cursorPosition];
    //       }
    //     }
    //     if (!writingTag && tagOpen) {
    //       tag.innerHTML += HTML[cursorPosition];
    //     }
    //     if (!writingTag && !tagOpen) {
    //       if (HTML[cursorPosition] === " ") {
    //         tempTypeSpeed = 0;
    //       } else {
    //         tempTypeSpeed = Math.random() * typeSpeed + 50;
    //       }
    //       t.innerHTML += HTML[cursorPosition];
    //     }
    //     if (writingTag === true && HTML[cursorPosition] === ">") {
    //       tempTypeSpeed = Math.random() * typeSpeed + 50;
    //       writingTag = false;
    //       if (tagOpen) {
    //         let newSpan = document.createElement("span");
    //         t.appendChild(newSpan);
    //         newSpan.innerHTML = tag;
    //         tag = newSpan.firstChild;
    //       }
    //     }
    //     cursorPosition += 1;
    //     if (cursorPosition < HTML.length - 1) {
    //       setTimeout(type, tempTypeSpeed);
    //     }
    //   };

    //   return {
    //     type: type,
    //   };
    // };
    // onMounted(() => {
    //   watchEffect(
    //     () => {
    //       let typer: any = document.getElementById("typewriter");
    //       console.log("typer", typer);
    //       if(!typer) return
          
    //       typer = setupTypewriter(typer);
    //       typer.type();
    //     },
    //     {
    //       flush: "post",
    //     }
    //   );
    // });

    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
  .let-highlight {
    color: #c0ad60;
  }
  .string-highlight {
    color: rgba(253, 149, 90, 0.8);
  }

  #typewriter {
    font-size: 2em;
    margin: 0;
    font-family: "Courier New";

    &:after {
      content: "|";
      animation: blink 500ms linear infinite alternate;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>

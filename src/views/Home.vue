<template>
  <div class="topNav">
    <Topnav />
    <div class="banner">
      <h1>ZZW-UI</h1>
      <!-- <h2>框架</h2> -->
      <p class="actions">
        <a href="https://github.com/zzwwzz0401/zzw-ui">github</a>
        <router-link to="/doc/intro">开始</router-link>
      </p>
      <p class="typewrite">CREATED BY ZZW</p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang='scss' scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.typewrite {
  font: 200% monospace;
  border-right: 0.08em solid;
  width: 14ch;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(14, end),
    blink-caret 1s step-end infinite alternate; //这里的alternate是为了让光标闪烁的正常一点
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.topNav {
  animation: theme 10s linear infinite;
  clip-path: ellipse(80% 60% at 50% 40%);

  &:after,
  &:before {
    content: "";
    display: block;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 100vw; // IE/Edge
    height: 100vh; // fallback
    width: 100vmax;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    animation: background 30s linear infinite;
  }

  &:after {
    left: 15vw;
  }

  &:before {
    right: 15vw;
    animation-delay: -30s;
    animation-direction: reverse;
  }
}

@keyframes theme {
  0% {
    background: #74c390;
  }

  16% {
    background: #5dbdb6;
  }

  33% {
    background: #59d4e1;
  }

  50% {
    background: #51bce8;
  }

  66% {
    background: #fa5374;
  }

  83% {
    background: #e46653;
  }

  100% {
    background: #74c390;
  }
}

@keyframes background {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.banner {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 20px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
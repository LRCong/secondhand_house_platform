<template>
  <div class="container">
    <a-layout :style="{ height: '100%' }">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1" @click="transPage('house')">
            <BankOutlined />
            <span>二手房</span>
          </a-menu-item>
          <a-menu-item key="2" @click="transPage('star')">
            <StarOutlined />
            <span>收藏</span>
          </a-menu-item>
          <a-menu-item key="3" @click="transPage('order')">
            <TagsOutlined />
            <span>预约</span>
          </a-menu-item>
          <a-menu-item key="4" @click="transPage('email')">
            <MessageOutlined />
            <span>消息</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <span>生活，至高的智慧。</span>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
            overflow: 'auto',
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import {
  BankOutlined,
  StarOutlined,
  TagsOutlined,
  MessageOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import router from "../router/index";
export default defineComponent({
  components: {
    BankOutlined,
    StarOutlined,
    TagsOutlined,
    MessageOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const transPage = (to: string) => router.push(to);

    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      transPage,
    };
  },
});
</script>
<style>
.container {
  height: 100vh;
}
.container .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.container .trigger:hover {
  color: #1890ff;
}

.container .logo {
  height: 32px;
  /* background: rgba(255, 255, 255, 0.3); */
  background-image: url("/src/assets/map.png");
  background-size: 100%;
  background-position: center;
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>

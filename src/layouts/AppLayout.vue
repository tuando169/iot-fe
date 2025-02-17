<template>
  <div class="w-screen h-screen">
    <div class="fixed w-1/8 h-full">
      <a-menu
          style="height: 100%;"
          mode="inline"
          theme="dark"
          :items="items"
      ></a-menu>
    </div>
    <RouterView class="w-full h-full pl-1/8 bg-blue-500"/>
  </div>
</template>

<script setup lang="ts">
import {h, reactive} from "vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  ProfileOutlined,
} from '@ant-design/icons-vue';
import type {ItemType} from "ant-design-vue";
import router from "@/router";

const items = reactive<ItemType[]>([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Dashboard',
    onClick: () => {
      router.push({name: 'home'});
    },
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
  },
  {
    key: '4',
    icon: () => h(ProfileOutlined),
    label: 'Profile',
  },
]);
</script>

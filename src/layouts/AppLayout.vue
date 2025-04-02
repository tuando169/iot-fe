<template>
  <div class="w-screen h-screen">
    <div class="fixed w-1/8 h-full z-50">
      <a-menu style="height: 100%;" mode="inline" theme="dark" :selected-keys="selectedKeys" :items="items"></a-menu>
    </div>
    <div class="w-full h-full pl-[12.5%] overflow-x-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  ProfileOutlined,
} from '@ant-design/icons-vue'
import type { ItemType } from 'ant-design-vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const selectedKeys = ref(['1'])
const items = ref<ItemType[]>([
  {
    key: 'dashboard',
    icon: () => h(PieChartOutlined),
    label: 'Dashboard',
    onClick: () => {
      selectedKeys.value = ['dashboard']
      router.push({ name: 'dashboard' })
    },
    theme: 'dark',
  },
  {
    key: 'data-sensor',
    icon: () => h(DesktopOutlined),
    label: 'Data Sensor',
    onClick: () => {
      selectedKeys.value = ['data-sensor']
      router.push({ name: 'data-sensor' })
    },
  },
  {
    key: 'history',
    icon: () => h(InboxOutlined),
    label: 'History',
    onClick: () => {
      selectedKeys.value = ['history']
      router.push({ name: 'history' })
    },
  },
  {
    key: 'profile',
    icon: () => h(ProfileOutlined),
    label: 'Profile',
    onClick: () => {
      selectedKeys.value = ['profile']
      router.push({ name: 'profile' })
    },
  },
])

onMounted(() => {
  const currentRoute = useRoute().name
  selectedKeys.value = [currentRoute as string]
})
</script>

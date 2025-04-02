<script setup lang="ts">
import { apis } from '@/common/apis'
import type { DeviceHistoryData, DeviceHistoryUploadData } from '@/common/types'
import axios from 'axios'
import { onMounted, ref } from 'vue'


const currentPage = ref(1)
const pageSize = ref(10)

const dateFilter = ref('')


const columns = [
  {
    title: 'ID',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Thiết bị',
    dataIndex: 'device',
    key: 'device',
    sorter: {
      compare: (a: DeviceHistoryData, b: DeviceHistoryData) => a.device.localeCompare(b.device),
    },
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    sorter: {
      compare: (a: DeviceHistoryData, b: DeviceHistoryData) => a.state.localeCompare(b.state),
    },
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
]

const displayData = ref<Array<DeviceHistoryData & {
  index: number
}>>([])
const data = ref<DeviceHistoryData[]>([])
// const data = ref([
//   { device: 'light', status: 'On', time: '2025-02-21 10:00:00' },
//   { device: 'air-conditioner', status: 'Off', time: '2025-02-21 10:05:00' },
//   { device: 'fan', status: 'On', time: '2025-02-21 10:10:00' },
//   { device: 'light', status: 'Off', time: '2025-02-21 10:15:00' },
//   { device: 'air-conditioner', status: 'On', time: '2025-02-21 10:20:00' },
//   { device: 'fan', status: 'Off', time: '2025-02-21 10:25:00' },
//   { device: 'light', status: 'On', time: '2025-02-21 10:30:00' },
//   { device: 'air-conditioner', status: 'Off', time: '2025-02-21 10:35:00' },
//   { device: 'fan', status: 'On', time: '2025-02-21 10:40:00' },
//   { device: 'light', status: 'Off', time: '2025-02-21 10:45:00' },
//   { device: 'air-conditioner', status: 'On', time: '2025-02-20 10:50:00' },
//   { device: 'fan', status: 'Off', time: '2025-02-20 10:55:00' },
//   { device: 'light', status: 'On', time: '2025-02-20 11:00:00' },
//   { device: 'air-conditioner', status: 'Off', time: '2025-02-20 11:05:00' },
//   { device: 'fan', status: 'On', time: '2025-02-20 11:10:00' },
//   { device: 'light', status: 'Off', time: '2025-02-20 11:15:00' },
//   { device: 'air-conditioner', status: 'On', time: '2025-02-20 11:20:00' },
//   { device: 'fan', status: 'Off', time: '2025-02-20 11:25:00' },
//   { device: 'light', status: 'On', time: '2025-02-20 11:30:00' },
//   { device: 'air-conditioner', status: 'Off', time: '2025-02-20 11:35:00' },
//   { device: 'fan', status: 'On', time: '2025-02-20 11:40:00' },
//   { device: 'light', status: 'Off', time: '2025-02-20 11:45:00' },
//   { device: 'air-conditioner', status: 'On', time: '2025-02-20 11:50:00' },
//   { device: 'fan', status: 'Off', time: '2025-02-20 11:55:00' },
//   { device: 'light', status: 'On', time: '2025-02-20 12:00:00' },
//   { device: 'air-conditioner', status: 'Off', time: '2025-02-20 12:05:00' },
//   { device: 'fan', status: 'On', time: '2025-02-20 12:10:00' },
//   { device: 'light', status: 'Off', time: '2025-02-20 12:15:00' },
//   { device: 'air-conditioner', status: 'On', time: '2025-02-20 12:20:00' },
//   { device: 'fan', status: 'Off', time: '2025-02-20 12:25:00' },
// ])

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  try {
    const query: DeviceHistoryUploadData = {
      page: currentPage.value,
      pageSize: pageSize.value,
    }
    if (dateFilter.value) {
      query.date = dateFilter.value
    }

    const res = await axios.get(apis.deviceHistory.getAll,
      {
        params: query,
      }
    )
    data.value = res.data.devices
    displayData.value = data.value.map((item, index) => ({ ...item, index: index + 1 }))
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function paginateData(data: any) {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return data.slice(start, end)
}

function handleSearch() {
  displayData.value = displayData.value.filter((item) => item.time.includes(dateFilter.value)).map((item, index) => ({ ...item, id: index + 1 }))
}
</script>

<template>
  <div class="pt-10 px-10 h-full w-full">
    <p class="text-3xl font-bold text-center">Lịch sử hoạt động</p>
    <div class="flex gap-5 mb-5 px-140">
      <a-date-picker v-model:value="dateFilter" placeholder="Ngày" format="DD/MM/YYYY" value-format="YYYY-MM-DD"
        allow-clear style="width: 100%" />
      <a-button type="primary" :disable="!dateFilter" @click="fetchData">Tìm kiếm</a-button>
    </div>
    <a-table :columns="columns" :data-source="paginateData(displayData)" :pagination="false" style="">
      <template #bodyCell="{ text, column }">
        <template v-if="column.dataIndex == 'status'">
          <span v-if="text === 'On'" class="">Bật</span>
          <span v-else class="">Tắt</span>
        </template>
        <template v-if="column.dataIndex == 'device'">
          <span v-if="text === 'light'" class="">Đèn</span>
          <span v-else-if="text === 'fan'" class="">Quạt</span>
          <span v-else-if="text === 'air-conditioner'" class="">Điều hoà</span>
        </template>
      </template>
    </a-table>
    <div class="my-5 float-end">
      <a-pagination v-show="displayData.length > 0" v-model:current="currentPage" v-model:pageSize="pageSize"
        show-size-changer :total="displayData.length" />
    </div>
  </div>
</template>

<style scoped></style>
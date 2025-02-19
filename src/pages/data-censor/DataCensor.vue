<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)

const filter = ref({
  temperature: '',
  humidity: '',
  light: '',
})

const columns = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nhiệt độ',
    dataIndex: 'temperature',
    key: 'temperature',
    sorter: {
      compare: (a, b) => a.temperature - b.temperature,
    },
  },
  {
    title: 'Độ ẩm',
    dataIndex: 'humidity',
    key: 'humidity',
    sorter: {
      compare: (a, b) => a.humidity - b.humidity,
    },
  },
  {
    title: 'Ánh sáng',
    dataIndex: 'light',
    key: 'light',
    sorter: {
      compare: (a, b) => a.light - b.light,
    },
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
    sorter: {
      compare: (a, b) => a.time - b.time,
    },
  },
]
const data = ref([
  { temperature: 30, humidity: 50, light: 100, time: '2021-10-10 10:10:10' },
  { temperature: 31, humidity: 51, light: 101, time: '2021-10-10 10:10:11' },
  { temperature: 32, humidity: 52, light: 102, time: '2021-10-10 10:10:12' },
  { temperature: 33, humidity: 53, light: 103, time: '2021-10-10 10:10:13' },
  { temperature: 34, humidity: 54, light: 104, time: '2021-10-10 10:10:14' },
  { temperature: 35, humidity: 55, light: 105, time: '2021-10-10 10:10:15' },
  { temperature: 36, humidity: 56, light: 106, time: '2021-10-10 10:10:16' },
  { temperature: 37, humidity: 57, light: 107, time: '2021-10-10 10:10:17' },
  { temperature: 38, humidity: 58, light: 108, time: '2021-10-10 10:10:18' },
  { temperature: 39, humidity: 59, light: 109, time: '2021-10-10 10:10:19' },
  { temperature: 40, humidity: 60, light: 110, time: '2021-10-10 10:10:20' },
  { temperature: 41, humidity: 61, light: 111, time: '2021-10-10 10:10:21' },
  { temperature: 42, humidity: 62, light: 112, time: '2021-10-10 10:10:22' },
  { temperature: 43, humidity: 63, light: 113, time: '2021-10-10 10:10:23' },
  { temperature: 44, humidity: 64, light: 114, time: '2021-10-10 10:10:24' },
  { temperature: 45, humidity: 65, light: 115, time: '2021-10-10 10:10:25' },
  { temperature: 46, humidity: 66, light: 116, time: '2021-10-10 10:10:26' },
  { temperature: 47, humidity: 67, light: 117, time: '2021-10-10 10:10:27' },
  { temperature: 48, humidity: 68, light: 118, time: '2021-10-10 10:10:28' },
  { temperature: 49, humidity: 69, light: 119, time: '2021-10-10 10:10:29' },
  { temperature: 50, humidity: 70, light: 120, time: '2021-10-10 10:10:30' },
  { temperature: 51, humidity: 71, light: 121, time: '2021-10-10 10:10:31' },
  { temperature: 52, humidity: 72, light: 122, time: '2021-10-10 10:10:32' },
  { temperature: 53, humidity: 73, light: 123, time: '2021-10-10 10:10:33' },
  { temperature: 54, humidity: 74, light: 124, time: '2021-10-10 10:10:34' },
  { temperature: 55, humidity: 75, light: 125, time: '2021-10-10 10:10:35' },
  { temperature: 56, humidity: 76, light: 126, time: '2021-10-10 10:10:36' },
  { temperature: 57, humidity: 77, light: 127, time: '2021-10-10 10:10:37' },
  { temperature: 58, humidity: 78, light: 128, time: '2021-10-10 10:10:38' },
  { temperature: 59, humidity: 79, light: 129, time: '2021-10-10 10:10:39' },
  { temperature: 60, humidity: 80, light: 130, time: '2021-10-10 10:10:40' },
  { temperature: 61, humidity: 81, light: 131, time: '2021-10-10 10:10:41' },
  { temperature: 62, humidity: 82, light: 132, time: '2021-10-10 10:10:42' },
  { temperature: 63, humidity: 83, light: 133, time: '2021-10-10 10:10:43' },
  { temperature: 64, humidity: 84, light: 134, time: '2021-10-10 10:10:44' },
  { temperature: 65, humidity: 85, light: 135, time: '2021-10-10 10:10:45' },
  { temperature: 66, humidity: 86, light: 136, time: '2021-10-10 10:10:46' },
  { temperature: 67, humidity: 87, light: 137, time: '2021-10-10 10:10:47' },
  { temperature: 68, humidity: 88, light: 138, time: '2021-10-10 10:10:48' },
  { temperature: 69, humidity: 89, light: 139, time: '2021-10-10 10:10:49' },
  { temperature: 70, humidity: 90, light: 140, time: '2021-10-10 10:10:50' },
])
const displayData = ref(data.value.map((item, index) => ({ ...item, id: index + 1 })))

function paginateData(data: any) {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return data.slice(start, end)
}

function handleSearch() {
  displayData.value = data.value.filter((item) => {
    if (filter.value.temperature && item.temperature !== parseInt(filter.value.temperature)) {
      return false
    }
    if (filter.value.humidity && item.humidity !== parseInt(filter.value.humidity)) {
      return false
    }
    if (filter.value.light && item.light !== parseInt(filter.value.light)) {
      return false
    }
    return true
  })
  displayData.value = displayData.value.map((item, index) => ({ ...item, id: index + 1 }))
}

function handleReset() {
  filter.value = {
    temperature: '',
    humidity: '',
    light: '',
  }
  displayData.value = data.value.map((item, index) => ({ ...item, id: index + 1 }))
}
</script>

<template>
  <div class="pt-10 px-10 h-full w-full">
    <p class="text-3xl font-bold text-center">Dữ liệu cảm biến</p>
    <div class="flex gap-5 mb-5 px-120">
      <a-input v-model:value="filter.temperature" placeholder="Nhiệt độ">
        <template #suffix>
          °C
        </template>
      </a-input>
      <a-input v-model:value="filter.humidity" placeholder="Độ ẩm">
        <template #suffix>
          %
        </template>
      </a-input>
      <a-input v-model:value="filter.light" placeholder="Ánh sáng">
        <template #suffix>
          lux
        </template>
      </a-input>
      <a-button type="primary" @click="handleSearch">Tìm kiếm</a-button>
      <a-button type="default" @click="handleReset">Làm mới</a-button>
    </div>
    <a-table :columns="columns" :data-source="paginateData(displayData)" :pagination="false" style="">
    </a-table>
    <div class="my-5 float-end">
      <a-pagination
        v-model:current="currentPage"
        v-model:pageSize="pageSize"
        show-size-changer
        :total="displayData.length"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
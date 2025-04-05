<script setup lang="ts">
import { apis } from '@/common/apis'
import type { IDeviceHistory, IDeviceHistoryQuery } from '@/common/types'
import axios from 'axios'
import { onMounted, ref } from 'vue'




const queryParams = ref<IDeviceHistoryQuery>({
  page: 1,
  pageSize: 10,
  date: undefined,
  sortBy: undefined,
  sortOrder: undefined,
})


const deviceHistory = ref<IDeviceHistory[]>([])

onMounted(async () => {
  await fetchData()
})

async function fetchData(pagination?: any, filters?: any, sorter?: any) {
  if (sorter) {
    queryParams.value.sortBy = sorter.field
    queryParams.value.sortOrder = sorter.order === 'ascend' ? 'ASC' : 'DESC'
  } else {
    queryParams.value.sortBy = undefined
    queryParams.value.sortOrder = undefined
  }

  try {

    const res = await axios.get(apis.device.getAll,
      {
        params: queryParams.value,
      }
    )
    deviceHistory.value = res.data.devices
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

</script>

<template>
  <div class="pt-10 px-10 h-full w-full">
    <p class="text-3xl font-bold text-center">Lịch sử hoạt động</p>
    <div class="flex gap-5 mb-5 px-140">
      <a-date-picker v-model:value="queryParams.date" placeholder="Ngày" format="DD/MM/YYYY" value-format="YYYY-MM-DD"
        allow-clear style="width: 100%" />
      <a-button type="primary" :disable="!queryParams.date" @click="fetchData">Tìm kiếm</a-button>
    </div>
    <a-table :data-source="deviceHistory" :pagination="false" @change="fetchData">
      <a-table-column title="ID" width="100">
        <template #default="props">
          <span>{{ props.index + 1 }}</span>
        </template>
      </a-table-column>
      <a-table-column title="Tên thiết bị" data-index="device" width="200" :sorter="true">
        <template #default="{ record }">
          <span v-if="record.device === 'light'" class="">Đèn</span>
          <span v-else-if="record.device === 'fan'" class="">Quạt</span>
          <span v-else-if="record.device === 'air-conditioner'" class="">Điều hoà</span>
        </template>
      </a-table-column>
      <a-table-column title="Trạng thái" data-index="state" width="200" :sorter="true">
        <template #default="{ record }">
          <span :class="[record.state ? 'text-green-700' : 'text-red-700']">{{ record.state ? 'Bật' : 'Tắt'
          }}</span>
        </template>
      </a-table-column>
      <a-table-column title="Thời gian" data-index="time" :sorter="true" />
    </a-table>
    <div class="py-5 float-end">
      <a-pagination v-model:current="queryParams.page" v-model:pageSize="queryParams.pageSize" show-size-changer
        :total="deviceHistory.length" @change="fetchData" />
    </div>
  </div>
</template>

<style scoped></style>
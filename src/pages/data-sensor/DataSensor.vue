<script setup lang="ts">
import { apis } from '@/common/apis';
import type { ISensorData, ISensorDataQuery } from '@/common/types';
import { notification } from 'ant-design-vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';


const queryParams = ref<ISensorDataQuery>({
  page: 1,
  pageSize: 10,
  filterBy: 'temperature',
  filterValue: undefined,
  sortBy: undefined,
  sortOrder: undefined,
});

const sensorData = ref<ISensorData[]>([]);

onMounted(async () => {
  await fetchData();
});

async function fetchData(pagination?: any, filters?: any, sorter?: any) {
  if (sorter) {
    queryParams.value.sortBy = sorter.field;
    queryParams.value.sortOrder = sorter.order === 'ascend' ? 'ASC' : 'DESC';
  } else {
    queryParams.value.sortBy = undefined;
    queryParams.value.sortOrder = undefined;
  }

  try {
    const res = await axios.get(apis.sensor.getAll, {
      params: queryParams.value,
    });
    sensorData.value = res.data.sensors;

  } catch (error) {
    notification.error({
      message: 'Lỗi',
      description: 'Không thể tải dữ liệu cảm biến',
    });
  }

}

function handleReset() {
  queryParams.value.page = 1;
  queryParams.value.pageSize = 10;
  queryParams.value.filterBy = 'temperature';
  queryParams.value.filterValue = undefined;
  queryParams.value.sortBy = undefined;
  queryParams.value.sortOrder = undefined;
  fetchData();
}
</script>

<template>
  <div class="pt-10 px-10 h-full w-full">
    <p class="text-3xl font-bold text-center">Dữ liệu cảm biến</p>
    <div class="flex gap-5 mb-5 px-120">
      <a-select ref="select" v-model:value="queryParams.filterBy" placeholder="Cột" style="width: 100%">
        <a-select-option value="temperature">Nhiệt độ (°C)</a-select-option>
        <a-select-option value="humidity">Độ ẩm (%)</a-select-option>
        <a-select-option value="light">Ánh sáng (lux)</a-select-option>
        <a-select-option value="time">Thời gian</a-select-option>
      </a-select>
      <a-input v-model:value="queryParams.filterValue" placeholder="Giá trị">
      </a-input>
      <a-button type="primary" :disabled="!queryParams.filterBy || !queryParams.filterValue" @click="fetchData">
        Tìm kiếm</a-button>
      <a-button type="default" @click="handleReset">Làm mới</a-button>
    </div>
    <a-table :data-source="sensorData" stripe bordered :pagination="false" @change="fetchData">
      <a-table-column title="ID">
        <template #default="props">
          <span>{{ props.index + 1 }}</span>
        </template>
      </a-table-column>
      <a-table-column title="Nhiệt độ (°C)" data-index="temperature" :sorter="true" />
      <a-table-column title="Độ ẩm (%)" data-index="humidity" :sorter="true" />
      <a-table-column title="Ánh sáng (lux)" data-index="light" :sorter="true" />
      <a-table-column title="Thời gian" data-index="time" :sorter="true" />
    </a-table>
    <div class="py-5 float-end">
      <a-pagination v-model:current="queryParams.page" v-model:pageSize="queryParams.pageSize" show-size-changer
        :total="sensorData.length" @change="fetchData" />
    </div>
  </div>
</template>

<style scoped></style>
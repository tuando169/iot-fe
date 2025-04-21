<template>
  <div class="">
    <div class="px-10 pt-10">
      <div class="w-full h-1/5 grid grid-cols-3 gap-10">
        <div class="flex flex-col justify-center items-center bg-orange-400 rounded-2xl shadow-2xl">
          <span class="p-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#fff">
              <path
                d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z" />
            </svg>
          </span>
          <span class="text-white font-semibold text-3xl pb-4">{{ temperature }}°C</span>
        </div>
        <div class="flex flex-col justify-center items-center bg-blue-400 rounded-2xl shadow-2xl">
          <span class="p-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff">
              <path
                d="M580.12-250q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM378-256l246-246-42-42-246 246 42 42Zm2.12-194q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-60q112 0 186-76.5t74-191.82q0-78.68-66.5-179.18T480-800Q353-688 286.5-587.5T220-408.32Q220-293 294-216.5T480-140Zm0-340Z" />
            </svg>
          </span>
          <span class="text-white font-semibold text-3xl pb-4">{{ humidity }}%</span>
        </div>
        <div class="flex flex-col justify-center items-center bg-amber-400 rounded-2xl shadow-2xl">
          <span class="p-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fff">
              <path
                d="M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Zm318-275Z" />
            </svg>
          </span>
          <span class="text-white font-semibold text-3xl pb-4">{{ light }} lux</span>
        </div>
      </div>
      <div class=" flex w-full mt-4 gap-10 h-[70vh]">
        <div class="flex-1 p-5 bg-white rounded-2xl shadow-2xl ">
          <Line :data="chartData" :options="options" :key="chartKey" />
        </div>
        <div class="h-full w-1/5 grid grid-rows-3 gap-5">
          <div class="flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-emerald-400">
            <span class="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#fff">
                <path
                  d="M480-80q-27 0-47.5-13T406-129h-14q-24 0-42-18t-18-42v-143q-66-43-104-110t-38-148q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 81-38 148T628-332v143q0 24-18 42t-42 18h-14q-6 23-26.5 36T480-80Zm-88-109h176v-44H392v44Zm0-84h176v-40H392v40Zm-9-100h74v-137l-92-92 31-31 84 84 84-84 31 31-92 92v137h74q60-28 96.5-87T710-590q0-97-66.5-163.5T480-820q-97 0-163.5 66.5T250-590q0 71 36.5 130t96.5 87Zm97-176Zm0-48Z" />
              </svg>
            </span>
            <a-switch v-model:checked="isLightOn" style="margin-bottom: 20px;"
              @change="toggleDevice('light', isLightOn)" />
          </div>
          <div class="flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-emerald-400">
            <span class="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#fff">
                <path
                  d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 36.5-37.5T425-373q-1 0-1-.5t-2-1.5l-116 41q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 39.5 37.5T373-535q.67-1 1.33-2 .67-1 .67-2l-41-115q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-26 17-40.5 45T536-586q1 1 1.5.5t1.5 1.5l115-43q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-37.5-36.5T587-426q-1 2-1.6 3.06-.6 1.06-1.4 1.94l42 115q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm-58-165q12-5 26-9t28-6q8-45 29.5-81t54.5-58q10-7 15-17.5t5-24.5q0-16.42-10.5-27.71T536-820q-43 0-98.5 20.55-55.5 20.54-57.5 80.32 0 11.21 2.5 21.17T388-680l34 95ZM240-380q14 0 40-8l95-34q-8-14-11.5-28t-3.5-26q-45-8-81-29.5T221-560q-7-10-19-15t-23-5q-19 0-29 10.5T140-536q0 61.94 25.63 108.97Q191.25-380 240-380Zm184 240q53.13 0 104.57-23Q580-186 580-242q0-11-2-19t-6-19l-34-95q-13 6-26.5 10t-27.5 5q-8 45-29.5 81T400-221q-9 6-14.5 18.5T380-179q1 15 11 27t33 12Zm353-240q16.83 0 29.91-9.17Q820-398.33 820-424q0-44-20.5-99t-81.33-57q-11.17 0-20.67 2-9.5 2-17.5 5l-95 35q5 8 10 25.5t5 28.5q45 8 81 29.5t58 54.5q6 8 16.67 14 10.66 6 21.33 6ZM600-484ZM476-600ZM360-476Zm124 116Z" />
              </svg>
            </span>
            <a-switch v-model:checked="isFanOn" style="margin-bottom: 20px;" @change="toggleDevice('fan', isFanOn)" />
          </div>
          <div class="flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-emerald-400">
            <span class="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#fff">
                <path
                  d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm-20-61v-131l-92 92q20 17 43 27t49 12Zm40 0q26-3 49-13.5t43-25.5l-92-92v131Zm120-67q16-20 27-43t13-49H528l92 92Zm-92-132h131q-2-26-12-49t-27-43l-92 92Zm-28-28 92-92q-20-16-43-26.5T500-659v131Zm-19.82 78q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM460-528v-131q-26 1-49 11.5T368-620l92 92Zm-159 28h131l-92-92q-16 20-26.5 43T301-500Zm39 132 92-92H301q3 26 13 49t26 43ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
              </svg>
            </span>
            <a-switch v-model:checked="isAirConditionerOn" style="margin-bottom: 20px;"
              @change="toggleDevice('airConditioner', isAirConditionerOn)" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'vue-chartjs';
import axios from 'axios';
import { apis } from '@/common/apis';
import type { ISensorData, ISensorDataQuery } from '@/common/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const isLightOn = ref(false);
const isFanOn = ref(false);
const isAirConditionerOn = ref(false);

const sensorData = ref<ISensorData[]>([]);
const temperature = ref(30);
const humidity = ref(50);
const light = ref(1000);

const chartKey = ref(0);
const chartData = ref({
  labels: ['1'],
  datasets: [{
    label: 'Nhiệt độ',
    data: [50, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: '#ff8a0b',
    borderColor: '#ff8a0b',
    tension: 0.1,
  }, {
    label: 'Độ ẩm',
    data: [40, 50, 60, 70, 80, 90, 100],
    fill: false,
    backgroundColor: '#50a2ff',
    borderColor: '#50a2ff',
    tension: 0.1,
  }, {
    label: 'Ánh sáng',
    data: [80, 120, 134, 145, 150, 160, 170],
    fill: false,
    backgroundColor: '#ffb900',
    borderColor: '#ffb900',
    tension: 0.1,
  }],
});

const options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',

    },
  },
};

const intervalId = ref<number>();

onMounted(async () => {
  await fetchSensorData();
  await fetchDeviceStatus();

  intervalId.value =
    setInterval(async () => {
      await fetchSensorData();
    }, 5000);
});

onUnmounted(() => {
  // Clear the interval when the component is unmounted
  clearInterval(intervalId.value);
});

async function fetchSensorData() {
  const queryParams: ISensorDataQuery = {
    page: 1,
    pageSize: 10,
    sortBy: 'time',
    sortOrder: 'DESC',
  };
  try {
    const res = await axios.get(apis.sensor.getAll, {
      params: queryParams,
    });
    const data = await res.data.sensors;
    sensorData.value = data.sort((a: ISensorData, b: ISensorData) => {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    });;
    temperature.value = sensorData.value[0].temperature;
    humidity.value = sensorData.value[0].humidity;
    light.value = sensorData.value[0].light;

    // Format time to HH:MM:SS
    chartData.value.labels = sensorData.value.map((item: ISensorData) => new Date(item.time).toTimeString().split(' ')[0]);
    chartData.value.datasets[0].data = sensorData.value.map((item: ISensorData) => item.temperature);
    chartData.value.datasets[1].data = sensorData.value.map((item: ISensorData) => item.humidity);
    chartData.value.datasets[2].data = sensorData.value.map((item: ISensorData) => item.light);
    chartKey.value++;

  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
}

async function fetchDeviceStatus() {
  try {
    const res = await axios.get(apis.device.getStatus);
    const data = await res.data;
    isLightOn.value = data.light;
    isFanOn.value = data.fan;
    isAirConditionerOn.value = data.airConditioner;

  } catch (error) {
    console.error('Error fetching device status:', error);
  }
}

async function toggleDevice(device: string, status: boolean) {
  try {
    await axios.post(apis.device.toggle, {
      [device]: status,
    });
    fetchDeviceStatus();
    await fetchDeviceStatus();
  } catch (error) {
    console.error('Error changing device status:', error);
  }
}
</script>

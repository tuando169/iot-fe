export interface SensorData {
  id: number
  temperature: number
  humidity: number
  light: number
  time: string
}

export interface DeviceHistoryData {
  id: number
  device: string
  state: string
  time: string
}

export interface DeviceHistoryUploadData {
  page: number
  pageSize: number
  date?: string
}

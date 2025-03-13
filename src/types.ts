export interface SensorData {
  id: number
  temperature: number
  humidity: number
  light: number
  time: string
}

export interface DeviceData {
  id: number
  device: string
  status: string
  time: string
}

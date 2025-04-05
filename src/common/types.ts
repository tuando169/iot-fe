export interface IDeviceHistoryQuery {
  page: number
  pageSize: number
  date?: string
  sortBy?: string
  sortOrder?: 'DESC' | 'ASC'
}

export interface ISensorDataQuery {
  pageSize: number
  page: number
  filterBy?: string
  filterValue?: string
  sortBy?: string
  sortOrder?: 'DESC' | 'ASC'
}

export interface ISensorData {
  temperature: number
  humidity: number
  light: number
  time: string
}

export interface IDeviceHistory {
  device: string
  state: string
  time: string
}

const baseUrl = 'http://localhost:8000'
export const apis = {
  device: {
    getAll: baseUrl + '/device',
    getStatus: baseUrl + '/device/status',
    toggle: baseUrl + '/device/toggle',
  },
  sensor: {
    getAll: baseUrl + '/sensor',
    getLatest: baseUrl + '/sensor/latest',
  },
}

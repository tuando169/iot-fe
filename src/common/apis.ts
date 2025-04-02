const baseUrl = 'http://localhost:8000'
export const apis = {
  deviceHistory: {
    getAll: baseUrl + '/device',
  },
  sensorData: {
    getAll: baseUrl + '/sensor',
  },
  toogle: {
    device: baseUrl + '/toggle',
  },
}

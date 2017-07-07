export const res = {
  status: jest.fn(),
  send: jest.fn(),
}

export const endpointOk = () => new Promise((resolve, reject) => {
  resolve('ok')
})

export const endpointWithError = () => {
  throw 'error'
}

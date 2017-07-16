export const res = {
  status: jest.fn(),
  send: jest.fn(),
}

export const endpointOk = () => new Promise(resolve =>
  resolve('ok'),
)

export const endpointWithError = () => {
  throw new Error()
}

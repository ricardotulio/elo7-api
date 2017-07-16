export const req = {
  headers: {
    authorization: 'whatever',
  },
}

export const res = {
  status: jest.fn(),
  send: jest.fn(),
}

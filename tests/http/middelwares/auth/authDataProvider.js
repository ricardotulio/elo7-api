export const validRequest = {
  headers: {
    authorization: process.env.APP_TOKEN,
  },
}

export const invalidRequest = {
  headers: {
    authorization: 'whatever',
  },
}

export const res = {
  status: jest.fn(),
  send: jest.fn(),
}

export const next = jest.fn()

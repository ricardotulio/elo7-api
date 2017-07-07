export const validRequest = {
  headers: {
    authorization: process.env.APP_TOKEN,
  },
}

export const requestWithoutToken = {
  headers: {},
}

export const requestWithInvalidToken = {
  headers: {
    authorization: 'whatever',
  },
}

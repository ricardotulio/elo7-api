export const requestWithValidToken = {
  headers: {
    authorization: process.env.APP_TOKEN,
  }
}

export const requestWithInvalidToken = {
  headers: {
    authorization: 'whatever',
  }
}

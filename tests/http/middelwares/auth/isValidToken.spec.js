import isValidToken from './../../../../src/http/middlewares/auth/isValidToken'
import {
  requestWithValidToken,
  requestWithInvalidToken,
} from './isValidTokenDataProvider'

test('must be truthy when token is valid', () => {
  expect(isValidToken(requestWithValidToken)).toBeTruthy()
})

test('must be false when token is invalid', () => {
  expect(isValidToken(requestWithInvalidToken)).toBeFalsy()
})

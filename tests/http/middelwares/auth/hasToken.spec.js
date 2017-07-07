import hasToken from './../../../../src/http/middlewares/auth/hasToken'
import {
  requestWithToken,
  requestWithoutToken,
} from './hasTokenDataProvider'

test('must be truthy when request has authorization token', () => {
  expect(hasToken(requestWithToken)).toBeTruthy()
})

test('must be falsy when request hasnt authorization token', () => {
  expect(hasToken(requestWithoutToken)).toBeFalsy()
})

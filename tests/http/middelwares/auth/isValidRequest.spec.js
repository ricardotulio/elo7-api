import isValidRequest from './../../../../src/http/middlewares/auth/isValidRequest'
import {
  validRequest,
  requestWithoutToken,
  requestWithInvalidToken,
} from './isValidRequestDataProvider'

test('must be falsy when request hasnt token', () => {
  expect(isValidRequest(requestWithoutToken)).toBeFalsy()
})

test('must be falsy when request has invalid token', () => {
  expect(isValidRequest(requestWithInvalidToken)).toBeFalsy()
})

test('must be truthy when request is valid', () => {
  expect(isValidRequest(validRequest)).toBeTruthy()
})

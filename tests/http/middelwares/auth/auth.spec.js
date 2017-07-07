import { length } from 'ramda'
import auth from './../../../../src/http/middlewares/auth'
import {
  validRequest,
  invalidRequest,
  res,
  next,
} from './authDataProvider'

test('must authorize valid request', () => {
  auth(validRequest, res, next)
  expect(length(next.mock.calls)).toBe(1)
})

test('must not authorize invalid request', () => {
  auth(invalidRequest, res, next)
  expect(res.status.mock.calls[0][0]).toBe(401)
})

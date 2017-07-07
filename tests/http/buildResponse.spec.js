import buildResponse from '../../src/http/buildResponse'
import {
  res,
  endpointOk,
  endpointWithError,
} from './buildResponseDataProvider'

test('must build success response', () => {
  buildResponse(endpointOk, {}, res)
  expect(res.status.mock.calls[0][0]).toBe(200)
})

test('must build error response', () => {
  buildResponse(endpointWithError, {}, res)
  expect(res.status.mock.calls[0][0]).toBe(500)
})

import unauthorized from './../../../../src/http/middlewares/auth/unauthorized'
import {
  req,
  res,
} from './unauthorizedDataProvider'

test('must respond with 401', () => {
  unauthorized(req, res)
  expect(res.status.mock.calls[0][0]).toBe(401)
})

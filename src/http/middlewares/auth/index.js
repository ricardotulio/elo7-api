import { ifElse } from 'ramda'
import isValidRequest from './isValidRequest'
import unauthorized from './unauthorized'

const auth = ifElse(
  isValidRequest,
  (req, res, next) => next(),
  unauthorized,
)

export default auth

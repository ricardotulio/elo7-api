import {
  ifElse,
} from 'ramda'
import hasToken from './hasToken'
import isValidToken from './isValidToken'
import isPublicPath from './isPublicPath'

const isValidRequest = ifElse(
  hasToken,
  isValidToken,
  isPublicPath,
)

export default isValidRequest

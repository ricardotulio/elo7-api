import {
  always,
  has,
  ifElse,
  pipe,
  prop,
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

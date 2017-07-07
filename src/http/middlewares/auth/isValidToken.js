import { pathEq } from 'ramda'

const isValidToken = req =>
  pathEq(['headers', 'authorization'], process.env.APP_TOKEN, req)

export default isValidToken

import { test } from 'ramda'

const isPublicPath = req =>
  test(/^\/public/, req.path)

export default isPublicPath

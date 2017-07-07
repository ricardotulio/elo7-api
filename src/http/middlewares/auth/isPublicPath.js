import { test } from 'ramda'

const isPublicPath = (req, res, next) =>
  test(/^\/public/, req.path)

export default isPublicPath

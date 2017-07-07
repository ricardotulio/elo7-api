import {
  map,
  prop,
} from 'ramda'
import buildResponse from './buildResponse'

const mapRoute = (route, app) => {
  const method = prop('method', route)
  const path = prop('path', route)
  const endpoint = buildResponse(prop('endpoint', route))

  return app[method](path, endpoint)
}

const mapRoutes = (routes, app) => map(route => mapRoute(route, app), routes)

export default mapRoutes

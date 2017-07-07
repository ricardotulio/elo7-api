import { length } from 'ramda'
import mapRoutes from './../../src/http/mapRoutes'
import { 
  routes,
  app,
} from './mapRoutesDataProvider'

test('must map routes', () => {
  mapRoutes(routes, app)
  expect(length(app.get.mock.calls)).toBe(1)
})

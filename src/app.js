import express from 'express'
import bodyParser from 'body-parser'
import config from '../config'
import middlewares from './http/middlewares'
import mapRoutes from './http/mapRoutes'
import routes from './http/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(middlewares.cors)

mapRoutes(routes, app)

app.listen(config.port(), () => {
  console.log('Running...')
})

import express from 'express'
import bodyParser from 'body-parser'
import elo7 from 'elo7'
import config from '../config'
import resources from './http/resources/'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(resources.order.list)

app.listen(config.port(), () => {
  console.log('Running...')
})

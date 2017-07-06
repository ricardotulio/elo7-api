import express from 'express'
import elo7 from 'elo7'
import routes from '../../../routes'

const router = express.Router()

const list = (req, res, next) => {
  elo7.connect({ email: process.env.EMAIL, password: process.env.PASSWORD })
    .then(client => client.order.list())
    .then(orders => res.send(orders))
}

router.get(routes.order.list, list)
  
export default router

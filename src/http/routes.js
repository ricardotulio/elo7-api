import order from './resources/order'

export default [
  {
    path: '/order/',
    method: 'get',
    endpoint: order.list,
  },
]

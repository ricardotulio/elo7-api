import elo7 from 'elo7'

const list = () => {
  const credentials = {
    email: process.env.ELO7_EMAIL,
    password: process.env.ELO7_PASSWORD,
  }

  return elo7.connect(credentials)
    .then(client => client.order.list())
}

export default list

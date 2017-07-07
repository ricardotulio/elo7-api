const unauthorized = (req, res) => {
  res.status(401)
  res.send({ error: 'unauthorized' })

  return res
}

export default unauthorized

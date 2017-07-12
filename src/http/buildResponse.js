import { curry } from 'ramda'

const buildResponse = curry((endpoint, req, res) => {
  const success = content => buildSuccessResponse(content, res)
  const error = () => buildErrorResponse(res)

  return endpoint().then(success)
    .catch(error)
})
const buildErrorResponse = (err, res) =>
  res.status(500).send('Something broke')

const buildSuccessResponse = (content, res) =>
  res.status(200).send(content)

export default buildResponse

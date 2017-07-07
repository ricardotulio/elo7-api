import { curry } from 'ramda'

<<<<<<< HEAD
const buildResponse = curry((endpoint, req, res) => {
  const success = content => buildSuccessResponse(content, res)
  const error = () => buildErrorResponse(res)

  return endpoint().then(success)
    .catch(error)
})
=======
const buildErrorResponse = (err, res) =>
  res.status(500).send('Something broke')
>>>>>>> 13d6776... improve testes

const buildSuccessResponse = (content, res) =>
  res.status(200).send(content)

<<<<<<< HEAD
const buildErrorResponse = (res) => {
  return res.status(500)
    .send('Something broke')
}
=======
const buildResponse = curry((endpoint, req, res) =>
  endpoint(req, res)
    .then(content => buildSuccessResponse(content, res))
    .catch(error => buildErrorResponse(error, response)))
>>>>>>> 13d6776... improve testes

export default buildResponse

import { 
  pipe,
  prop, 
  has,
} from 'ramda'

const hasToken = pipe(
  prop('headers'),
  has('authorization'),
)

export default hasToken

export const routes = [
  {
    path: '/hello',
    method: 'get',
    endpoint: () => {},
  },
  {
    path: '/world',
    method: 'post',
    endpoint: () => {},
  },
]

export const app = {
  get: jest.fn(),
  post: jest.fn(),
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var isValidToken = function isValidToken(req) {
  return (0, _ramda.pathEq)(['headers', 'authorization'], process.env.APP_TOKEN, req);
};

exports.default = isValidToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaXNWYWxpZFRva2VuLmpzIl0sIm5hbWVzIjpbImlzVmFsaWRUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJBUFBfVE9LRU4iLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQ25CLG1CQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FBUCxFQUFxQ0MsUUFBUUMsR0FBUixDQUFZQyxTQUFqRCxFQUE0REMsR0FBNUQsQ0FEbUI7QUFBQSxDQUFyQjs7a0JBR2VKLFkiLCJmaWxlIjoiaXNWYWxpZFRva2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGF0aEVxIH0gZnJvbSAncmFtZGEnXG5cbmNvbnN0IGlzVmFsaWRUb2tlbiA9IHJlcSA9PlxuICBwYXRoRXEoWydoZWFkZXJzJywgJ2F1dGhvcml6YXRpb24nXSwgcHJvY2Vzcy5lbnYuQVBQX1RPS0VOLCByZXEpXG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRUb2tlblxuIl19
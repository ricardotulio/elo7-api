'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _elo = require('elo7');

var _elo2 = _interopRequireDefault(_elo);

var _routes = require('../../../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var list = function list(req, res, next) {
  _elo2.default.connect({ email: process.env.EMAIL, password: process.env.PASSWORD }).then(function (client) {
    return client.order.list();
  }).then(function (orders) {
    return res.send(orders);
  });
};

router.get(_routes2.default.order.list, list);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL3Jlc291cmNlcy9vcmRlci9saXN0LmpzIl0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsImxpc3QiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29ubmVjdCIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzc3dvcmQiLCJQQVNTV09SRCIsInRoZW4iLCJjbGllbnQiLCJvcmRlciIsInNlbmQiLCJvcmRlcnMiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxrQkFBUUMsTUFBUixFQUFmOztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUMvQixnQkFBS0MsT0FBTCxDQUFhLEVBQUVDLE9BQU9DLFFBQVFDLEdBQVIsQ0FBWUMsS0FBckIsRUFBNEJDLFVBQVVILFFBQVFDLEdBQVIsQ0FBWUcsUUFBbEQsRUFBYixFQUNHQyxJQURILENBQ1E7QUFBQSxXQUFVQyxPQUFPQyxLQUFQLENBQWFiLElBQWIsRUFBVjtBQUFBLEdBRFIsRUFFR1csSUFGSCxDQUVRO0FBQUEsV0FBVVQsSUFBSVksSUFBSixDQUFTQyxNQUFULENBQVY7QUFBQSxHQUZSO0FBR0QsQ0FKRDs7QUFNQWpCLE9BQU9rQixHQUFQLENBQVcsaUJBQU9ILEtBQVAsQ0FBYWIsSUFBeEIsRUFBOEJBLElBQTlCOztrQkFFZUYsTSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBlbG83IGZyb20gJ2VsbzcnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uLy4uLy4uL3JvdXRlcydcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5jb25zdCBsaXN0ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGVsbzcuY29ubmVjdCh7IGVtYWlsOiBwcm9jZXNzLmVudi5FTUFJTCwgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBBU1NXT1JEIH0pXG4gICAgLnRoZW4oY2xpZW50ID0+IGNsaWVudC5vcmRlci5saXN0KCkpXG4gICAgLnRoZW4ob3JkZXJzID0+IHJlcy5zZW5kKG9yZGVycykpXG59XG5cbnJvdXRlci5nZXQocm91dGVzLm9yZGVyLmxpc3QsIGxpc3QpXG4gIFxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXX0=
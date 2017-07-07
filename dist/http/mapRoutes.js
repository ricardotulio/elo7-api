'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _buildResponse = require('./buildResponse');

var _buildResponse2 = _interopRequireDefault(_buildResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapRoute = function mapRoute(route, app) {
  var method = (0, _ramda.prop)('method', route);
  var path = (0, _ramda.prop)('path', route);
  var endpoint = (0, _buildResponse2.default)((0, _ramda.prop)('endpoint', route));

  return app[method](path, endpoint);
};

var mapRoutes = function mapRoutes(routes, app) {
  return (0, _ramda.map)(function (route) {
    return mapRoute(route, app);
  }, routes);
};

exports.default = mapRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odHRwL21hcFJvdXRlcy5qcyJdLCJuYW1lcyI6WyJtYXBSb3V0ZSIsInJvdXRlIiwiYXBwIiwibWV0aG9kIiwicGF0aCIsImVuZHBvaW50IiwibWFwUm91dGVzIiwicm91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFJQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMvQixNQUFNQyxTQUFTLGlCQUFLLFFBQUwsRUFBZUYsS0FBZixDQUFmO0FBQ0EsTUFBTUcsT0FBTyxpQkFBSyxNQUFMLEVBQWFILEtBQWIsQ0FBYjtBQUNBLE1BQU1JLFdBQVcsNkJBQWMsaUJBQUssVUFBTCxFQUFpQkosS0FBakIsQ0FBZCxDQUFqQjs7QUFFQSxTQUFPQyxJQUFJQyxNQUFKLEVBQVlDLElBQVosRUFBa0JDLFFBQWxCLENBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVNMLEdBQVQ7QUFBQSxTQUFpQixnQkFBSTtBQUFBLFdBQVNGLFNBQVNDLEtBQVQsRUFBZ0JDLEdBQWhCLENBQVQ7QUFBQSxHQUFKLEVBQW1DSyxNQUFuQyxDQUFqQjtBQUFBLENBQWxCOztrQkFFZUQsUyIsImZpbGUiOiJtYXBSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBtYXAsXG4gIHByb3AsXG59IGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGJ1aWxkUmVzcG9uc2UgZnJvbSAnLi9idWlsZFJlc3BvbnNlJ1xuXG5jb25zdCBtYXBSb3V0ZSA9IChyb3V0ZSwgYXBwKSA9PiB7XG4gIGNvbnN0IG1ldGhvZCA9IHByb3AoJ21ldGhvZCcsIHJvdXRlKVxuICBjb25zdCBwYXRoID0gcHJvcCgncGF0aCcsIHJvdXRlKVxuICBjb25zdCBlbmRwb2ludCA9IGJ1aWxkUmVzcG9uc2UocHJvcCgnZW5kcG9pbnQnLCByb3V0ZSkpXG5cbiAgcmV0dXJuIGFwcFttZXRob2RdKHBhdGgsIGVuZHBvaW50KVxufVxuXG5jb25zdCBtYXBSb3V0ZXMgPSAocm91dGVzLCBhcHApID0+IG1hcChyb3V0ZSA9PiBtYXBSb3V0ZShyb3V0ZSwgYXBwKSwgcm91dGVzKVxuXG5leHBvcnQgZGVmYXVsdCBtYXBSb3V0ZXNcbiJdfQ==
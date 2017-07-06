'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _elo = require('elo7');

var _elo2 = _interopRequireDefault(_elo);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _resources = require('./http/resources/');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.use(_resources2.default.order.list);
app.get('/', function (req, res, next) {
  return res.send('teste');
});

app.listen(_config2.default.port(), function () {
  console.log('Running...');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsIm9yZGVyIiwibGlzdCIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJzZW5kIiwibGlzdGVuIiwicG9ydCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSx3QkFBWjs7QUFFQUEsSUFBSUMsR0FBSixDQUFRLHFCQUFXQyxVQUFYLENBQXNCLEVBQUVDLFVBQVUsSUFBWixFQUF0QixDQUFSO0FBQ0FILElBQUlDLEdBQUosQ0FBUSxxQkFBV0csSUFBWCxFQUFSOztBQUVBSixJQUFJQyxHQUFKLENBQVEsb0JBQVVJLEtBQVYsQ0FBZ0JDLElBQXhCO0FBQ0FOLElBQUlPLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVg7QUFBQSxTQUFvQkQsSUFBSUUsSUFBSixDQUFTLE9BQVQsQ0FBcEI7QUFBQSxDQUFiOztBQUVBWCxJQUFJWSxNQUFKLENBQVcsaUJBQU9DLElBQVAsRUFBWCxFQUEwQixZQUFNO0FBQzlCQyxVQUFRQyxHQUFSLENBQVksWUFBWjtBQUNELENBRkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0IGVsbzcgZnJvbSAnZWxvNydcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL2h0dHAvcmVzb3VyY2VzLydcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuXG5hcHAudXNlKHJlc291cmNlcy5vcmRlci5saXN0KVxuYXBwLmdldCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4gcmVzLnNlbmQoJ3Rlc3RlJykpXG5cbmFwcC5saXN0ZW4oY29uZmlnLnBvcnQoKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnUnVubmluZy4uLicpXG59KVxuIl19
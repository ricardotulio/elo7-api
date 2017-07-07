'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isValidRequest = require('./isValidRequest');

var _isValidRequest2 = _interopRequireDefault(_isValidRequest);

var _unauthorized = require('./unauthorized');

var _unauthorized2 = _interopRequireDefault(_unauthorized);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = (0, _ramda.ifElse)(_isValidRequest2.default, function (req, res, next) {
  return next();
}, _unauthorized2.default);

exports.default = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sNkNBRVgsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVg7QUFBQSxTQUFvQkEsTUFBcEI7QUFBQSxDQUZXLHlCQUFiOztrQkFNZUgsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlmRWxzZSB9IGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGlzVmFsaWRSZXF1ZXN0IGZyb20gJy4vaXNWYWxpZFJlcXVlc3QnXG5pbXBvcnQgdW5hdXRob3JpemVkIGZyb20gJy4vdW5hdXRob3JpemVkJ1xuXG5jb25zdCBhdXRoID0gaWZFbHNlKFxuICBpc1ZhbGlkUmVxdWVzdCxcbiAgKHJlcSwgcmVzLCBuZXh0KSA9PiBuZXh0KCksXG4gIHVuYXV0aG9yaXplZCxcbilcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuIl19
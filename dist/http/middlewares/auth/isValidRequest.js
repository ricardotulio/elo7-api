'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _hasToken = require('./hasToken');

var _hasToken2 = _interopRequireDefault(_hasToken);

var _isValidToken = require('./isValidToken');

var _isValidToken2 = _interopRequireDefault(_isValidToken);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b1e222a... WIP
var _isPublicPath = require('./isPublicPath');

var _isPublicPath2 = _interopRequireDefault(_isPublicPath);

<<<<<<< HEAD
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValidRequest = (0, _ramda.ifElse)(_hasToken2.default, _isValidToken2.default, _isPublicPath2.default);

exports.default = isValidRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaXNWYWxpZFJlcXVlc3QuanMiXSwibmFtZXMiOlsiaXNWYWxpZFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQU9BOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLHNGQUF2Qjs7a0JBTWVBLGMiLCJmaWxlIjoiaXNWYWxpZFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbHdheXMsXG4gIGhhcyxcbiAgaWZFbHNlLFxuICBwaXBlLFxuICBwcm9wLFxufSBmcm9tICdyYW1kYSdcbmltcG9ydCBoYXNUb2tlbiBmcm9tICcuL2hhc1Rva2VuJ1xuaW1wb3J0IGlzVmFsaWRUb2tlbiBmcm9tICcuL2lzVmFsaWRUb2tlbidcbmltcG9ydCBpc1B1YmxpY1BhdGggZnJvbSAnLi9pc1B1YmxpY1BhdGgnXG5cbmNvbnN0IGlzVmFsaWRSZXF1ZXN0ID0gaWZFbHNlKFxuICBoYXNUb2tlbixcbiAgaXNWYWxpZFRva2VuLFxuICBpc1B1YmxpY1BhdGgsXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRSZXF1ZXN0XG4iXX0=
=======
=======
>>>>>>> b1e222a... WIP
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValidRequest = (0, _ramda.ifElse)(_hasToken2.default, _isValidToken2.default, _isPublicPath2.default);

exports.default = isValidRequest;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaXNWYWxpZFJlcXVlc3QuanMiXSwibmFtZXMiOlsiaXNWYWxpZFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQU9BOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQiwrREFHckIsbUJBQU8sS0FBUCxDQUhxQixDQUF2Qjs7a0JBTWVBLGMiLCJmaWxlIjoiaXNWYWxpZFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbHdheXMsXG4gIGhhcyxcbiAgaWZFbHNlLFxuICBwaXBlLFxuICBwcm9wLFxufSBmcm9tICdyYW1kYSdcbmltcG9ydCBoYXNUb2tlbiBmcm9tICcuL2hhc1Rva2VuJ1xuaW1wb3J0IGlzVmFsaWRUb2tlbiBmcm9tICcuL2lzVmFsaWRUb2tlbidcblxuY29uc3QgaXNWYWxpZFJlcXVlc3QgPSBpZkVsc2UoXG4gIGhhc1Rva2VuLFxuICBpc1ZhbGlkVG9rZW4sXG4gIGFsd2F5cyhmYWxzZSksXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRSZXF1ZXN0XG4iXX0=
>>>>>>> 13d6776... improve testes
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaXNWYWxpZFJlcXVlc3QuanMiXSwibmFtZXMiOlsiaXNWYWxpZFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQU9BOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLHNGQUF2Qjs7a0JBTWVBLGMiLCJmaWxlIjoiaXNWYWxpZFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbHdheXMsXG4gIGhhcyxcbiAgaWZFbHNlLFxuICBwaXBlLFxuICBwcm9wLFxufSBmcm9tICdyYW1kYSdcbmltcG9ydCBoYXNUb2tlbiBmcm9tICcuL2hhc1Rva2VuJ1xuaW1wb3J0IGlzVmFsaWRUb2tlbiBmcm9tICcuL2lzVmFsaWRUb2tlbidcbmltcG9ydCBpc1B1YmxpY1BhdGggZnJvbSAnLi9pc1B1YmxpY1BhdGgnXG5cbmNvbnN0IGlzVmFsaWRSZXF1ZXN0ID0gaWZFbHNlKFxuICBoYXNUb2tlbixcbiAgaXNWYWxpZFRva2VuLFxuICBpc1B1YmxpY1BhdGgsXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWRSZXF1ZXN0XG4iXX0=
>>>>>>> b1e222a... WIP

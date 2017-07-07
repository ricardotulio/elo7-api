'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var hasToken = (0, _ramda.pipe)((0, _ramda.prop)('headers'), (0, _ramda.has)('authorization'));

exports.default = hasToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9odHRwL21pZGRsZXdhcmVzL2F1dGgvaGFzVG9rZW4uanMiXSwibmFtZXMiOlsiaGFzVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQU1BLElBQU1BLFdBQVcsaUJBQ2YsaUJBQUssU0FBTCxDQURlLEVBRWYsZ0JBQUksZUFBSixDQUZlLENBQWpCOztrQkFLZUEsUSIsImZpbGUiOiJoYXNUb2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBwaXBlLFxuICBwcm9wLCBcbiAgaGFzLFxufSBmcm9tICdyYW1kYSdcblxuY29uc3QgaGFzVG9rZW4gPSBwaXBlKFxuICBwcm9wKCdoZWFkZXJzJyksXG4gIGhhcygnYXV0aG9yaXphdGlvbicpLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBoYXNUb2tlblxuIl19
'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _main = require('../main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const assert = require('chai').assert;

// const myApp = require('../main.js');
var assert = _chai2.default.assert;


describe('rainDrops', function () {
  describe('rainDrops tests', function () {
    it('should return Plong for 28', function () {
      assert.equal((0, _main2.default)(28), 'Plong');
    });
    it('should return 13 for 13', function () {
      assert.equal((0, _main2.default)('13'), 13);
    });
    it('should return 34 for 34', function () {
      assert.equal((0, _main2.default)(34), 34);
    });
    it('should return PlingPlong for 1755', function () {
      assert.equal((0, _main2.default)('1755'), 'PlingPlang');
    });
    it('should return Please enter a valid number for hello', function () {
      assert.equal((0, _main2.default)('hello'), 'Please enter a valid number');
    });
    it('should return Please enter a valid number for 0', function () {
      assert.equal((0, _main2.default)('0'), 'Please enter a valid number');
    });
    it('should return PlingPlong for 21', function () {
      assert.equal((0, _main2.default)(21), 'PlingPlong');
    });
    it('should return Plong for 406', function () {
      assert.equal((0, _main2.default)('406'), 'Plong');
    });
    it("should return Please enter a valid number for '' ", function () {
      assert.equal((0, _main2.default)("''"), 'Please enter a valid number');
    });
    it('should return 124 for 124', function () {
      assert.equal((0, _main2.default)('124'), 124);
    });
  });
});
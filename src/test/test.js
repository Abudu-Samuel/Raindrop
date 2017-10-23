// const assert = require('chai').assert;

// const myApp = require('../main.js');
import chai from 'chai';
import myApp from '../main';

const { assert } = chai;

describe('rainDrops', () => {
  describe('rainDrops tests', () => {
    it('should return Plong for 28', () => {
      assert.equal(myApp(28), 'Plong');
    });
    it('should return 13 for 13', () => {
      assert.equal(myApp('13'), 13);
    });
    it('should return 34 for 34', () => {
      assert.equal(myApp(34), 34);
    });
    it('should return PlingPlong for 1755', () => {
      assert.equal(myApp('1755'), 'PlingPlang');
    });
    it('should return Please enter a valid number for hello', () => {
      assert.equal(myApp('hello'), 'Please enter a valid number');
    });
    it('should return Please enter a valid number for 0', () => {
      assert.equal(myApp('0'), 'Please enter a valid number');
    });
    it('should return PlingPlong for 21', () => {
      assert.equal(myApp(21), 'PlingPlong');
    });
    it('should return Plong for 406', () => {
      assert.equal(myApp('406'), 'Plong');
    });
    it("should return Please enter a valid number for '' ", () => {
      assert.equal(myApp("''"), 'Please enter a valid number');
    });
    it('should return 124 for 124', () => {
      assert.equal(myApp('124'), 124);
    });
  });
});

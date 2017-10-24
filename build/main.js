'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rainDrops = function rainDrops(num) {
  var output = '';
  if (!Number(num)) return 'Please enter a valid number';
  if (num % 3 === 0) {
    output += 'Pling';
  }
  if (num % 5 === 0) {
    output += 'Plang';
  }
  if (num % 7 === 0) {
    output += 'Plong';
  }
  if (num < 0) {
    output = 'Enter number greater than 0';
  }
  if (output.length === 0) {
    return Number(num);
  }
  return output;
};

exports.default = rainDrops;
var assert = require('assert');
const {test_function} = require("../../codewars/8kyu.js");

describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
    const result = test_function();
    assert.equal(result,0);
    });
});

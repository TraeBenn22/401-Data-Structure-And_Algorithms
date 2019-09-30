'use strict';

const returnFunction = require('../left-join');
const testMap = new Map();
const testMap2 = new Map();

testMap.set('Hi', 56);
testMap.set('hello', 9);
testMap.set('goodbye', 30);
testMap2.set('Hi', 55);
testMap2.set('hello', 10);
testMap2.set('no', 31);

describe('', function () {
    it('should ', function () {
        expect(returnFunction(testMap, testMap2)).toBe({"Hi": [56, 55], "hello": [9, 10]});
    });
});




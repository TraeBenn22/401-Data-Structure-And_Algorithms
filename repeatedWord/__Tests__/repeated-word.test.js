'use strict';
const returnFunction = require('../repeated-word');
let string = 'hello I need to go where it is always green please';
let string2 = 'hello I need to go to where it is always green please';


describe('testing function that checks repeating words ina a string', () => {
    it('function should return the first word that is repeated in the string, else return null', () => {
        returnFunction(string);
        console.log(string);
        expect(null);
    })
});

describe('testing function that checks repeating words ina a string', () => {
    it('function should return the first word that is repeated in the string, else return null', () => {
        returnFunction(string2);
        expect('to');
    })
});


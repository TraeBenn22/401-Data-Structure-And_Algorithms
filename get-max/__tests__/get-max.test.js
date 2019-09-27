let Stack = require('../get-max');

describe('Stacks with a linked list', () => {
    test('Can successfully return the biggest number ina  stack', () => {
        const testStack = new Stack;
        testStack.push(3);
        testStack.push(1);
        testStack.push(9);
        testStack.push(5);
        testStack.push(8);
        expect(testStack.getMax(testStack.top)).toEqual(9);
    })
});
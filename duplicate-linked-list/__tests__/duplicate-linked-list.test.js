'use strict';
const returnFunction = require('../duplicate-linked-list');
class TestList {
    constructor() {
        this.head = new Node();
        this.head.next = new Node();
        this.head.next.next = new Node();
        this.head.next.next.next = new Node();
        this.head.next.next.next.next = new Node();
        this.head.next.next.next.next.next  = new Node();
        this.head.next.next.next.next.next.next = new Node();
    }
}

class Node {
    constructor() {
        this.value = null;
        this.next = null;
        this.previous = null;

    }
}

describe('testing function to return a linked list with no duplicate values', () => {
    it('should return the linked list with the duplicates removed', () => {
        let tree  = new TestList();
        tree.head.value = 3;
        tree.head.next.value = 0;
        tree.head.next.next.value = 1;
        tree.head.next.next.next.value = 2;
        tree.head.next.next.next.next.value = 2;
        tree.head.next.next.next.next.next.value  = 6;
        tree.head.next.next.next.next.next.next.value = 7;
        console.log(tree);
        expect(returnFunction(tree.head)).toEqual(new Set([ 3,0,1,2,6,7]));
    })
});







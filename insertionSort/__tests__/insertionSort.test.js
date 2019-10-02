'use strict';

let returnFunction = require('/insertionSort');


class LinkedList {
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
        let list  = new TestList();
        list.head.value = 0;
        list.head.next.value = 1;
        list.head.next.next.value = 2;
        list.head.next.next.next.value = 4;
        list.head.next.next.next.next.value = 5;
        list.head.next.next.next.next.next.value  = 6;
        list.head.next.next.next.next.next.next.value = 7;
        console.log(list);
        expect(returnFunction()).toEqual(new Set([ 3,0,1,2,6,7]));
    })
});
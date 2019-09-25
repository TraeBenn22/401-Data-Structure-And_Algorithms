'use strict';
const returnFunction = require('../tree-intersection.js');
class TestTree {
    constructor() {
        this.root = new TestNode();
        this.root.left = new TestNode();
        this.root.right = new TestNode();
        this.root.left.left = new TestNode();
        this.root.left.left.right = new TestNode();
        this.root.right.left = new TestNode();
        this.root.right.right = new TestNode();
    }
}

class TestNode {
    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

describe('testing function to return the largest node value in a binary tree', () => {
    it('should return with the largest value in the entire tree', () => {
        let tree  = new TestTree();
        let treeb = new TestTree();
        tree.root.value = 1;
        tree.root.left.value = 2;
        tree.root.right.value = 3;
        tree.root.left.left.value = 4;
        tree.root.left.left.right.value = 5;
        tree.root.right.left.value = 6;
        tree.root.right.right.value = 7;
        treeb.root.value = 8;
        treeb.root.left.value = 9;
        treeb.root.right.value = 10;
        treeb.root.left.left.value = 11;
        treeb.root.left.left.right.value = 12;
        treeb.root.right.left.value = 13;
        treeb.root.right.right.value = 2;

        let unionSet = new Set([1,2,4,5,3,6,7,8,9,11,12,10,13]);
        let intersectionSet = new Set([2]);
        expect(returnFunction(tree.root, treeb.root)).toStrictEqual({unionSet: unionSet, intersectionSet: intersectionSet});
    })
});
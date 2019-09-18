'use strict';
const returnFunction = require('../maximum-Value');
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
        tree.root.value = 5;
        tree.root.left.value = 4;
        tree.root.right.value = 1;
        tree.root.left.left.value = 14;
        tree.root.left.left.right.value = 15;
        tree.root.right.left.value = 2;
        tree.root.right.right.value = 6;
        console.log(tree);
        expect(returnFunction(tree.root)).toBe(15);
    })
});







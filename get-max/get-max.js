
'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    push(value){
        if(this.top === null){
            this.top = new Node(value);
        } else {
            let newest = new Node(value);
            newest.next = this.top;
            this.top = newest;
        }
    }

    pop(){
        let record = this.top;
        this.top = this.top.next;
        record.next = null;
        return record;
    }

    peek(){
        if(this.top){
            return this.top.value;
        } else {
            return null;
        }
    }

    getMax(node) {
        console.log(node);
        let biggestNum = 0;
        while (node) {
            if (node.value > biggestNum) {
                biggestNum = node.value;
                node = node.next;
            } else {
                node = node.next;
            }
        }
        return biggestNum;
    }

}

module.exports = Stack;
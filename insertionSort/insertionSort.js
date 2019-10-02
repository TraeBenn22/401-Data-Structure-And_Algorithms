class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

   insertionSort(value) {
        let node = this.head;
    let sortedNode = new Node();
        let tempNode = null;
        while(node.next) {
            if(value < node.next.value) {

                sortedNode.next = node.next;
                node = sortedNode;

            }
            this.traverse(node);
        }
    }

    traverse(node) {
        while(node.next) {
            node = node.next;
        }

    }
}
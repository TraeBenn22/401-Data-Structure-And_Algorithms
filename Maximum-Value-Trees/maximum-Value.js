'user strict';



class Bnodes {
    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class Btree {
    constructor() {
        this.root = null;
    }


}

let biggestVal = null;

function findMaximumValue(root) {
    if(!root) {
        return;
    }
    if(biggestVal < root.value) {
        biggestVal = root.value;
    }
    if(root.left) {
        findMaximumValue(root.left)
    }
    if(root.right) {
        findMaximumValue(root.right)
    }
    return biggestVal;
}

module.exports = findMaximumValue;

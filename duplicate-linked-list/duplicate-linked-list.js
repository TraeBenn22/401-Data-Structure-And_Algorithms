

function findDuplicateNodes(node) {
    let hashtable = new Set();
   let current = node;
    while(current) {

        if(hashtable.has(current.value)) {
            console.log(current.value);
            current.previous = current.next;
        } else {
            console.log(current.value);
            hashtable.add(current.value);
        }
        current.previous = current;
        current = current.next;

    }
    return hashtable;
}

module.exports = findDuplicateNodes;
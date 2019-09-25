"use strict";

function findUnionAndIntersection(rootA, rootB) {
    const unionSet = new Set();
    const intersectionSet = new Set();
    if(!rootA || !rootB) {
        return null;
    }

    traverseTree(rootA, unionSet);

    traverseAndCompareTrees(rootB, unionSet, intersectionSet);
    return {unionSet,intersectionSet};
}


function traverseAndCompareTrees(root, unionSet, intersectionSet) {

        if (unionSet.has(root.value)) {
            intersectionSet.add(root.value);
        }
    else {
        unionSet.add(root.value);
    }
    if(root.left) {
        traverseAndCompareTrees(root.left, unionSet, intersectionSet);
    }
    if(root.right) {
        traverseAndCompareTrees(root.right, unionSet, intersectionSet);
    }
}

function traverseTree(root, unionSet) {
    unionSet.add(root.value);
    if(root.left) {
        traverseTree(root.left, unionSet);
    }
    if(root.right) {
        traverseTree(root.right, unionSet);
    }
}

module.exports = findUnionAndIntersection;


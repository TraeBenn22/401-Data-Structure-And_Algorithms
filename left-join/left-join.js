function leftJoin(h1, h2) {
    let leftJoined = new Map();
    let joinedSet = new Set();
    for(let key of h1.keys()) {
        joinedSet.add(key);
    }
    console.log(joinedSet);
    for(let key of h2.keys()) {
        if(joinedSet.has(key)) {
            leftJoined.set(key, [h1.get(key), h2.get(key)]);
        }

    }
    return leftJoined;
}

module.exports = leftJoin;
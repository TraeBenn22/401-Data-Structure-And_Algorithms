"use strict";
let animalShelter = require('../animal-shelter.js');
let dogArray = [];
let catArray = [];


function enqueue(animal) {

    if(animal === "dog") {
        dogArray.push(animal);
    }
    else{
        catArray.push(animal);
    }
}

function dequeue(preference) {

    if(preference === "dog") {
        return  dogArray.shift();
    }
    if(preference === "cat") {
        return catArray.shift();
    }
    else{
        return dogArray.shift() || catArray.shift();
    }
}


describe('testing methos in my animal shelter class', () => {
    it('should return witht he first dog or cat that was pushed into the array', () => {
        enqueue("dog");
        enqueue("dog");
        enqueue("dog");
        enqueue("dog");
        enqueue("dog");
        enqueue("cat");
        enqueue("cat");
        enqueue("cat");
        enqueue("cat");
        expect(dequeue("dog")).toStrictEqual("dog");

    })
});
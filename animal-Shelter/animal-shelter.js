"use strict";


let dogArray = [];
let catArray = [];

class AnimalShelter {
    constructor() {

    }


    enqueue(animal) {

        if(animal === "dog") {
            dogArray.push(animal);
        }
        else{
            catArray.push(animal);
        }
    }

    dequeue(preference) {

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
}

module.exports = AnimalShelter;
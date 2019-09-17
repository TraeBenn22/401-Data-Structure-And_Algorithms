'use strict';


function returnAnyRepeatedWords(str) {
  const  stringArray = [];
    let currentString = '';
    console.log(str);
    for(let i = 0; i < str.length; i ++) {
        if(str[i] === '') {
            stringArray.push(currentString);
        } else {
          currentString =  currentString + str[i];
        }
    }
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < stringArray.length - 1; j++) {
            if(stringArray[i].toLowerCase() === stringArray[j].toLowerCase()) {
                return stringArray[i];
            }
        }
    }
    return null;
    // checkStrings(stringArray);
}
function checkStrings(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[i].toLowerCase() === array[j].toLowerCase()) {
                return array[i];
            }
        }
    }
    return null;
}

module.exports = returnAnyRepeatedWords;
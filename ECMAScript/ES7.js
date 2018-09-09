// Array.prototype.includes()
// checks the array for the value passed as an argument
// it returns true if the array contains the value, otherwise, it returns false

    let numbers = [1, 2, 3, 4, 5];

    numbers.includes(2); // returns true
    
// EXPONENTIAL OPERATOR
// **

    2 ** 4 // returns 16
    

// =========================================================================================================
// OBJECT SPREAD PROPERTIES
// =========================================================================================================

// ... 
// spread uses
// expands elements

// adding things

    moreNumbers = [4, 5, 6];

    numbers = [1, 2, 3, ...moreNumbers]; // returns [1, 2, 3, 4, 5, 6]


// pass elements of an array to a functions as arguments

    function addThreeNumbers(x, y, z) {
        console.log(x + y + z);
    }

    let numbersToAdd = [2, 2, 2];

    addThreeNumbers(...numbersToAdd); // returns 6


// copy or concatenate arrays

    arr1 = [1, 2, 3];
    arr2 = [...arr1]; // returns [1, 2, 3]
    
    arr3 = [...arr1, ...arr2]; // returns [1, 2, 3, 1, 2, 3]
    

// =========================================================================================================
// OBJECT REST PROPERTIES 
// =========================================================================================================

// ...
// rest uses
// condenses elements

// condense multiple elements into Array

    function multiply(multiplier, ...theArgs) {
        return theArgs.map(function(element) {
            return multiplier * element;
        });
    }

    var arr = multiply(2, 1, 2, 3); // returns [2, 4, 6]


// =========================================================================================================
// OBSERVABLES
// =========================================================================================================


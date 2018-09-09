// ==========================================================================================================
// VARIABLE DECLARATIONS
// ==========================================================================================================

// let 
// statement allows you to declare a variable with block scope.

    var x = 10;
    // Here x is 10
    {
        let x = 2;
        // Here x is 2
    }
    // Here x is 10 


// const 
// statement allows you to declare a constant
// Constants are similar to let variables, except that the value cannot be changed

    var x = 10;
    // Here x is 10
    {
        const x = 2;
        // Here x is 2
    }
    // Here x is 10 


// DEFAULT PARAMETER VALUES
// functions to have default parameters

    function myFunction(x, y = 10) {
        // y is 10 if not passed or undefined
        return x + y;
    }
    
    myFunction(5); // will return 15


// Array.find()
// method returns the first array element that passed a test function

    var numbers = [4, 9, 16, 25, 30];
    var first = numbers.find(testFunction);

    function testFunction(value, index, array) {
        return value > 18;
    }

    // returns 25

// Array.findIndex()
// method returns the index of the first array element that passes a test function

    var numbers = [4, 9, 16, 25, 30];
    var first = numbers.findIndex(testFunction);
        
    function testFunction(value, index, array) {
        return value > 18;
    }

    // returns 3


// =============================================================================================================================
// NEW NUMBER PROPERTIES
// =============================================================================================================================

// Number.EPSILON
// represents the difference between 1 and the smallest floating point number greater than 1

    console.log(Number.EPSILON);
    // returns 2.220446049250313e-16
    console.log(Number.EPSILON.toFixed(20));
    // returns 0.00000000000000022204


// Number.MIN_SAFE_INTEGER
// a constant represents the minimum safe integer in JavaScript

    console.log(Number.MIN_SAFE_INTEGER);
    // returns -9007199254740991


// Number.MAX_SAFE_INTEGER
// a constant represents the maximum safe integer in JavaScript

    console.log(Number.MAX_SAFE_INTEGER);
    // returns 9007199254740991


// =============================================================================================================================
// NEW NUMBER METHODS
// =============================================================================================================================

// Number.isInteger()
// method returns true if the argument is an integer

    Number.isInteger(7); // returns true
    Number.isInteger(7.5); // returns false
    
// Number.isSafeInteger()
// method returns true if the argument is a safe integer

    Number.isSafeInteger(7); // return true
    Number.isSafeInteger(12345678901234567890); // returns false
    

// =============================================================================================================================
// NEW GLOBAL METHODS
// =============================================================================================================================


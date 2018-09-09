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

    

    
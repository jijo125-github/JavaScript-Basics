// Named Functions
function calculateBiggerFraction(a, b){
    var ans = a > b ? "a is bigger: " + a : "b is bigger: " + b;
    return ans
}

var a = 3/5;
var b = 7/10;
var result = calculateBiggerFraction(a, b);
console.log(result)


// Anonymous functions
var addTwoNumbers = function(a, b) {
    return a + b;
}

console.log("Addition: ", addTwoNumbers(3,5));
console.log(addTwoNumbers);


// Immediately involved function expressions .. they are invoked immediately and doesn't wait to be called.
var x = 5, y = 3
var subtractTwoNumbers = (function (a, b){
    return a - b;
})(x, y)

console.log(subtractTwoNumbers);


// using let instead of var

function logScope(){
    var localVar = 2;
    const PI = 3.14; // once assigned don't change value.
    console.log(PI);
    //PI = 3; // it will throw Uncaught TypeError

    if (localVar){
        let localVar = "This is different!"; // when we use this variable belongs to this if scope only
        console.log(localVar);
    }

    console.log(localVar);
}

logScope();
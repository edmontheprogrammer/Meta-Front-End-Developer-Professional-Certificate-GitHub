// In functional programming, we use a lot of functions and variables. 
function getTotal(a, b) {
    return a + b; 
}

var num1 = 2; 
var num2 = 3; 

var total = getTotal(num1, num2); 

// When writing functional programming, we keep data and functionality separate 
// and pass data into functions only when we want something computed. 
function getDistance1(mph, h) {
    return mph * h;
}

// example of keeping data sepearate
var mph = 60; 
var h = 2; 

// example of computing something or functional programming in action 
var distance1 = getDistance1(mph, h); 

// In functional programing, functions return new values and then use those values 
// somewhere else in the code. 
function getDistance2(mph, h) {
    return mph * h;
}
var mph = 60; 
var h = 2; 

// example of a function that returns a new value 'getDistance2'
var distance2 = getDistance2(mph, h); 

// example of the value being used somewhere else in the code. 
console.log(distance2)

/*
    * Another style is object oriented programming (OOP). In this style, we group data
and functionality as properites and methods inside the objects.

For example, if I have a 'virtualPet' object, I can give it a 'sleepy' property 
and a 'nap()' method. 
*/
var virtualPet1 = {
    sleepy: true, 
    nap: function() {}
}


/*
    In OOP, methods update properites stored in the object instead of generating 
    new return values. 
    For example, If I check the 'sleepy' properties on the 'virtualPet' object, 
    will the 'sleepy' property's value change?
*/
var virtualPet2 = {
    sleepy: true, 
    nap: function() {
        // Note that this function named 'nap' is acting like a constructor or the 
        // __init__() method for the virtualPet object
        // Therefore, we are able to use the 'this.sleepy' syntax to change the value 
        // of the variable sleepy from 'true' to 'false'
        this.sleepy = false; 
    }
}

console.log(virtualPet2.sleepy) // true 
virtualPet2.nap() // calling the nap() function which doesn't return anything. 
console.log(virtualPet2.sleepy) // false 

/*
    * To summarize this point, we can say that the Functional Programming paradigm works
by keeping the data and functionality separate. It's counterpart, OOP, works by 
keeping the data and functionality grouped in meaniningful objects

There are many more concepts and ideas in functional programming.

Here are some of the most imporant ones: 
    * First-class functions
    * Higher-order function
    * Pure functions and side-effects

There are many other concepts and pricples in functional programming, but for now, 
let's stick to these three. 

* First-class functions:
    It is often said that functions in JavaScript are "first-class citizens". 
    What does this mean?

    It means that a function in JavaScript is just another value that we can:
        * pass to other functions
        * save in a variable 
        * return from other functions
    In other words, a function in JavaScript is just a value - from this vantage point,
    almost no different then a string or a number. 

    For example, in JavaScript, it's perfectly normal to pass a function invoication to 
    another function. 

    To expain how this works, consider the following program
*/

function addTwoNums(a, b) {
    console.log(a + b)
}


function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

function specificNum() {
    return 42; 
};

var useRandom = true; 
var getNumber; 

if(useRandom) {
    // Note that 'randomNum' is name of a function that returns a value we declared 
    // above, but we assigned the 'getNumber' variable to the function named 'randomNum'
    // without the parenthsis
    getNumber = randomNum; 
} else {
    // Note that 'specificNum' is name of a function that returns a value we declared 
    // above, but we assigned the 'getNumber' variable to the function named 'specificNum'
    getNumber = specificNum; 
}

// calling the addTwoNums and passing 'getNumber()' function as input parameter
// twice. 
addTwoNums(getNumber(), getNumber()); 

/*
    * I start the program with the 'addTwoNums()' function whose definition I've already
used earlier in various variations. The reason why this function is a recurring example
is because it's so simple that it helps explain the concepts that otherwise might be a bit
harder to grasp. 

Next, I code a function named 'randomNum()' which returns a random number between 0 and
10. 

I then code another function named 'specificNum()' which returns a specific number, 
the number 42. 

Next, I save a variable named 'useRandom' and I set it to the boolean value of 'true'.
I declare another variable, named 'getNumber'

This is where things get intersteing. 

On the next several lines, I have an if else statment. The if condition is executed when the value 
of 'useRandom' is set to 'true'. If that's the case, the entire 'randomNum()' function's 
declaration is saved into the 'getNumber' variable. Otherwise, I've saving the entire 
'specificNum()' function's declaration ito the 'getNumber' variable.

In other words, based on the 'useRandom' being set to 'true' or 'false', the 'getNumber'
variable will be assigned either the 'randomNum()' function declaration or the 
'specificNum()' function's declaration into the 'getNumber' variable. 

In other words, based on the the "useRandom" being set to "true" or "false", the 
"getNumber" variable will be assigned either the "randomNum()" function declaraton 
or the "specificNum()" function declaration.

With all this code set, I can then invoke the "addTwoNums()" function, passing it the 
invocation of the "getNumber()" variables as it first and second arguments. 

This works because functons in JavaScript are truly first-class citizens, which 
can be assigned to variable names and passed around just like I would pass around a 
string, a number, an object, etc. 

Note: most of the code inside the "randomNum()" function declaration comes from a 
previous lesson, namely the lesson that discussed the Math object in JavaScript. 

This brings me to the second foundational concept of functional programming, which is 
the concept of higher-order functions. 

Higher-Order functions:
    
    A higher-order function is a function that has either one or both of the following 
    characteristics:
        * It accepts other functions as argument 
        * It returns functions when invoked or called

    There's no "special way" of defining higher-order functions in JavaScript. It is 
    simply a feature of the language. The language itself allows me to pass a function
    to another function, or to return a function from another function. 

    Continuing from the previous section, consider the following code, in which I'm 
    re-defining the 'addTwoNums()' function so that it is a higher-order function.
*/
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

/*
    * You can think of the above function declaration of "addTwoNums" as describing 
    how it will deal with the "getNumber1" and "getNumber2" inputs: 
    once it receieves them as arguments, it will then attempt invoking them and 
    concatenating the values returned from those inovations. 

    For example:
*/
addTwoNums(specificNum, specificNum); // return number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 some random number 

/*
    * Pure functions and side-effects: 
        Another concept of functional programming and pure functions. 
        A pure function returns the exact same result as long as it's given the values.
        
        An example of a pure function is the "addTwoNums()" function from the previous 
        section: 
*/

function addTwoNums(a, b) {
    console.log(a + b); 
}

/*
    * This function will always return the same output, the based on the input. 
For example, as long as we give it a specific value, say a "5" and a "6"
*/
addTwoNums(5, 6); // 11

/*
    * The output will always be the same. 
Another rule for a function to be considered pure it that it should not have side-effects. 
A side-effect is any instance where a funciton makes a changeoutside of itself. 

This includes:
    * changing variable values outside of the function itself, or even relying on outside
        variables. 
    * calling a Browser API (even the console itself!)
    * calling Math.random() - since the value cannot be reliably repeated 

The topic of pure and impure functions can get somewhat complex 
For now, it's sufficient to know that this concept exists and that it is related 
to functional programming. 
*/
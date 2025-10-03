//here is the js code
console.log("functions");

//step 1. function declaration (creating a function)
function sayHello(){
    //body of the function
    console.log("Hello Cohort 62");
}

//step 2. call/trigger/run/execute the function
sayHello();

//Example #2 - with 1 parameter (input)
function greet(name){
    console.log("Hello " + name); //concatenation (join strings)
}

greet("John");
greet("Ashton");
greet("Tyler");

//Example #3 - with 2 parameters
function greet2(fname, lname){
    console.log("Welcome to the system " + fname + " " + lname)
}

greet2("John", "Rochon");

//Challenge 1: Double the number
//task:
//-create a function called doubleNumber that takes one number as a parameter
//-the function should display the number mulitplied by 2

function doubleNumber(num1){
    let total = num1*2;
    console.log(total);
}

doubleNumber(3);
doubleNumber(4);

//Example #4 - with the prompt
function welcome(){
    let name = prompt("Enter your name");
    console.log("Welcome " + name);
}

welcome();

//Example #5 - with default parameters

function addNumbers(num1=0, num2){
    let total = num1 + num2;
    console.log('The total is: ${total}');
}

addNumbers(2,5);
addNumbers(5);


//convert to seconds(2)

function convertToSeconds(){
    let mins = Number(prompt("Enter the min"));
    let sec = mins*60;

    document.getElementById("results").innerHTML=`<p>${sec}</p>`;
}


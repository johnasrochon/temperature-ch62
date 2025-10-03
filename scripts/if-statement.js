console.log("conditional statements");

//if-statement (condition y/n)
//if (condition){
//code to be executed if the condition is true
//}

let result =50;

if (result>40){
    console.group("You passed the exam!");
}

let result1 = 50;
let result2 = 50;

if(result1 == result2){
    console.log("The values are the same!")
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true == compare the values
// case 3: 5 === "5" -> false === compare the value and datatype

//if-else statement
//if (condition){
//code to be executed if the condition is true
//}else{
//code to be executed if the condition is false    
//}

if(result>40){
    console.log("You passed the exam");
}else{
    console.log("You did not pass the exam");
}

let waterTemp =105;

if(waterTemp >=100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

//else-if statement
//if (condition1){
//code to be executed if the condition1 is true
//}else-if(condition2){
//code to be executed if the condition2 is true    
//}else{
//code to be executed if the conditions are false
//}

function ageCalculator(){
    let age = prompt('Enter your age:');

    if(age<13){
        console.log("you are a child");
    }else if(age < 21){
        console.log("you are a teenager");
    }else if(age < 64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

//challenge1 from canvas class 3 without creating a button

function ageCalculator2(){
    let age2 = prompt('Enter your age:');

    if(age2<12){
        console.log("ticket cost $5");
    }else if(age2 >= 12 && age2 <= 18){
        console.log("the ticket cost $8");
    }else{
        console.log("the ticket cost $10");
    }
}







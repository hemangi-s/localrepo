// METHOD 1

// function sum(num1, num2) {
//     let result = num1+num2;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is = " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is: " + data);
// }

// const ans = sum(5,6);
// displayResult(ans);



//METHOD 2 of function call

// function sum(num1, num2) {
//     let result = num1+num2;
//     displayResult(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is = " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is: " + data);
// }

// const ans = sum(5,6);


//METHOD 3 of function call

function sum(num1, num2, fnToCall) {
    let result = num1+num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is = " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is: " + data);
}

const ans = sum(5,6, displayResult);

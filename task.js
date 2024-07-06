// Write a program to print reverse of a number by using while loop
var num = +prompt("Enter a number to reverse it : ")
// var num = 123;
var str = String(num);
var s = ""
let i = str.length - 1;
while (i >= 0) {
    s += str[i] + " ";
    i--;
};
document.write(`<h2>Reverse of input ( ${num} ) is ${s}</h2>`)
console.log(`Reverse of input ( ${num} ) is ${s}`);

//method - 2 -- Methods

var num = prompt("Enter a number to reverse it : ")
// num = "123";
var str = num.split("").reverse().join("");
document.write(`<h2>Reverse of input ( ${num} ) is ${str}</h2>`)
console.log(`Reverse of input ( ${num} ) is ${str}`);

/*Write a program to check whether input 2 is available in input1
input1: 108, input 2: 8   true
input 1: 535, input 2: 6  false*/

let input1 = prompt("Enter the first input : ");
let input2 = prompt("Enter the second input : ");

if (input1.includes(input2)) {
    console.log("True - input 1 is available in input 2");
    document.write(`<h2>True - input 1 is available in input 2</h2>`);
} else {
    console.log("False - input 2 is not available in input 1");
    document.write(`<h2>False - input 2 is not available in input 1</h2>`);
};

// Write a program to check whether a number is even or not by using switch statement
var num = +prompt("Enter a number to check even or odd : ")
// var num = 1;
switch (num % 2) {
    case true:
        document.write(`<h2>The given input ( ${num} ) is even</h2>`)
        console.log(`The given input ${num} is even`);
        break;
    default:
        document.write(`<h2>The given input ( ${num} ) is odd</h2>`)
        console.log(`The given input ${num} is odd`);
        break;
};

// //method 2
// var num = +prompt("Enter a number to check even or odd :")
// //var  num = 1;
// switch (num % 2 == 0) {
//     case 0:
//         document.write(`The given input ( ${num} ) is even`)
//         console.log(`The given input ${num} is even`);
//         break;
//     default:
//         document.write(`The given input ( ${num} ) is odd`)
//         console.log(`The given input ${num} is odd`);
//         break;
// };
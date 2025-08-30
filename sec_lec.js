// console.log("hello world!");

// //this is a comment in one line

// /* this is a comment in multiple lines
//    this is a comment in multiple lines
//    this is a comment in multiple lines*/ 


// //operators in javascript

// //arithmetic operators
// let a = 10;
// let b = 20;
// console.log("a+b = " + (a+b));//addition operator
// console.log("a-b = " + (a-b));//subtraction operator
// console.log("a*b = " + (a*b));//multiplication operator
// console.log("a/b = " + (a/b));//division operator
// console.log("a%b = " + (a%b));//modulous operator
// console.log("a**b = " + (a**b));//exponentiation operator

// //comparison operators   (true/false)
// console.log(a==b);//equal to operator
// console.log(a===b);//strict equal to operator
// console.log(a!=b);  //not equal to operator
// console.log(a!==b);//strict not equal to operator
// console.log(a>b);//greater than operator
// console.log(a<b);//less than operator
// console.log(a>=b);//greater than or equal to operator
// console.log(a<=b);//less than or equal to operator      

// //logical operators      (true/false)
// console.log((a<b) && (a==10));//logical and operator
// console.log((a<b) || (a==10));//logical or operator
// console.log(!(a<b));//logical not operator  

// //increment and decrement operators
// console.log(a++);//post increment operator
// console.log(++a);//pre increment operator
// console.log(a--);//post decrement operator
// console.log(--a);//pre decrement operator

// //assignment operators
// let c = 10;
// c += 5;//c = c + 5
// console.log(c);
// c -= 5;//c = c - 5
// console.log(c);
// c *= 5;//c = c * 5
// console.log(c);
// c /= 5; //c = c / 5
// console.log(c);
// c %= 5;//c = c % 5
// console.log(c);
// c **= 5;//c = c ** 5
// console.log(c); 

// //ternary operator
// let age = 18;
// let isAdult = (age >= 18) ? "You are an adult." : "You are not an adult.";
// console.log(isAdult);

// //-----------------------------------------------------------------------------------

// //conditional statements
// //if statement
// let num = 10;
// if(num > 0){
//     console.log(num + " is a positive number.");
// }

// //if-else statement
// let number = -10;
// if(number > 0){
//     console.log(number + " is a positive number.");
// }
// else{
//     console.log(number + " is a negative number.");
// }

// //if-else if-else statement
// let n = 0;
// if(n > 0){
//     console.log(n + " is a positive number.");
// }
// else if(n < 0){
//     console.log(n + " is a negative number.");
// }
// else{
//     console.log(n + " is zero.");
// }

// //switch statement
// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day.");
// }


// let mode = "dark";
// switch(mode){
//     case "dark":
//         console.log("Dark mode is on.");
//         break;         
//     case "light":
//         console.log("Light mode is on.");
//         break;
//     default:
//         console.log("Invalid mode.");
// }


// let num2=5
// if( num2%2 === 0){
//     console.log(num2 + " is even");

// }
// else{
//     console.log(num2 + " is odd");
// }


// prompt("Enter your name: ");//this will show a prompt box to enter the name
// let userName = prompt("Enter your name: ");//this will show a prompt box to enter the name and store it in userName variable
// console.log("Hello, " + userName + "!");


let number = prompt("Enter a number: ");
console.log("enter the number: "+ number);
if(number >= 90 && number <= 100){
    console.log("A+");
}
else if(number >= 80 && number < 90){
    console.log("A");
}
else if(number >= 70 && number < 80){
    console.log("B+");
}   
else if(number >= 60 && number < 70){
    console.log("B");
}       
else if(number >= 50 && number < 60){
    console.log("C+");
}
else if(number >= 40 && number < 50){
    console.log("C");
}
else{
    console.log("Fail");
}
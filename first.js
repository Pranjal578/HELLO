console.log("Hello, World!");
console.log("This is the first JavaScript file.");
let age;// Variable declaration
age = 25;// Variable initialization
console.log("I am " + age + " years old.");
let name;
name = "Pranjal Shukla";
console.log("My name is " + name + ".");
price = 100;
console.log("The price is $" + price + ".");
x = null;
y = undefined;
console.log("The value of x and y is " + x +" "+ y + ".");
isfollow = true
console.log(isfollow);
const pi = 3.14;
console.log("The value of pi is " + pi + ".");
// pi = 3.15; // This will cause an error because pi is a constant
{
    let num = 10
    console.log(num);// This will work because num is defined within the block
}
// console.log(num); // This will cause an error because num is not defined outside the block
{
    const city = "New York";
    console.log(city);// This will work because city is defined within the block
    
}
city = "Los Angeles";
console.log(city); // This will cause an error because city is not defined outside the block
// This is a single-line comment
const student = {
    fullName : "Pranjal Shukla", // This is a multi-line comment
    age : 25,
    isEnrolled : true
    }
console.log(student.age);
console.log(student["fullName"]);
student.age = 26;
console.log(student.age);
student["age"] + 5;






console.log("hello");
console.log(student.age);
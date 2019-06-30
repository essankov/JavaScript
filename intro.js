//Program Structure

let num = 100;
console.log(num * num);

let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);


var name = "Essa";
const greeting = "Hello ";
console.log(greeting + name);

// let number;
// let theNumber = number(prompt("Pick a number: "));
// if (!number.isNaN(theNumber))
// {
//     console.log("your number is the square root of " + theNumber * theNumber);
// }

// let num = Number(prompt("Pick a number"));

// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

let n = 0;

while (n <= 12)
{
    console.log(n);
    n = n + 1;
};

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
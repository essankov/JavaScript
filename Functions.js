
//1
const square = function(x)
{
    return x * x;
;}

console.log(square(11));


//2
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}


//3
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };


 function greet(who)
 {
    console.log("Hello " + who);
 }

 greet("Essa");
 console.log("Bye");


 function minus(a, b)
 {
     if(b == undefined) return -a;
     else return a -b;
 };
console.log(minus(10));
console.log(minus(10, 5));
//Data Structures: Objects and Arrays

let doh = "Doh";
console.log(typeof doh.toUpperCase);

console.log(doh.toUpperCase());


let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);

function reperatLog(n)
{
    for( let i = 0; i < n; i++)
    {
        console.log(i);
    };
};

reperatLog(9);

function repeat(n, action)
{
    for(let i = 0; i < n; i++)
    {
        action(i);
    };
};
repeat(5, console.log);

let labels = [];
repeat2(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
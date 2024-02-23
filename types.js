// javascript hosse dynamic type programming language


// primitive data type --number, string, boolean
const a = 14;
const name = 'ashik';
const isCleaned = true;
console.log(typeof a, typeof name, typeof isCleaned);




// non primitive data type --object and array
const numbers = [2, 3, 4, 5, 6];
const person = {
    name: 'atik',
    age: 25,
    address: 'dhaka'
}
console.log(typeof numbers, typeof person);




// difference primitive and non primitive
// primitive
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

// non primitive
let p = {job: 'web developer'};
let q = p;
console.log(p, q);
q.job = 'fornt end';
console.log(p, q);



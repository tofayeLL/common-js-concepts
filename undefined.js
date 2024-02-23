/* 
  ---------8 ways to get undefined--------
  1.variable that is not initialized that will give you undefined.
  2.Function with no return.
  3.parameter that is not pass will be undefined.
  4.if return has nothing on the right side will return undefined.
  5.property that does not exist inside the object will give you undefined.
  6.accessing array elements outside of the index range will give you undefined.
  7.deleting an element inside an array.
  8.set a value directly to undefined.
 */


/*  let first;
 console.log(first); */


function add(a, b, c) {
    const result = a + b + c;

}
const result = add(4, 5);
console.log(result);




const person = {
    name: 'abul',
    age: 23
}
console.log(person.name, person.salary);


const numbers = [2, 3, 4, 56, 7];
console.log(numbers[2], numbers[3], numbers[10]);


// kono ekta value na thakle seta bujhanor jonno undefined use kora jabe na 
// ---null use kore bujha te hobe je kono ekta value nay ba tar man nay

const ninth = undefined;
console.log(typeof ninth);

const eighth = null;
console.log(typeof eighth);
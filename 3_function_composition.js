// 3.Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composedFunction = x => addFive(double(square(x)));

console.log(composedFunction(3));
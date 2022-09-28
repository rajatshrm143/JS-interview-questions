// QUESTION : 1
// ***********************************************************
// Diff results of traditional function & fat arrow function
// ***********************************************************
const abc = {
  firstName: 'Rajat',
  address: {
    street: '9th',
    addr1: 'Dwr',
    city: 'Mzn',
  },
  getName: function () {
    // console.log(this.firstName);
  },
};
var firstName = 'RajatShrm';
const abcd = {
  firstName: 'Sharma',
  getName: () => {
    // console.log(this.firstName);
  },
};
abc.getName(); // 'Rajat'
abcd.getName(); // 'RajatShrm'

// QUESTION : 2
// ***********************************************************
// Diff btw Shallow & deep copy
// ***********************************************************
const x = Object.create(abc); // create new object
const xy = Object.assign(abc); // shallow copy of object
const xyz = { ...abc }; // shallow copy of object
const xyzq = JSON.parse(JSON.stringify(abc)); // deep copy of object
abc.firstName = 'manoj';
abc.address.street = '10th';
// console.log(x);
// console.log(xy);
// console.log(xyz);
// console.log(xyzq);

// QUESTION : 3
// ***********************************************************
// Count the frequency of unique numbers in array
// ***********************************************************
const arr = [1, 2, 1, 1, 3, 2, 1, 1, 3, 3, 2];
const result = {};
for (let i = 0; i < arr.length; i++) {
  if (result[arr[i]]) {
    result[arr[i]] = result[arr[i]] + 1;
  } else {
    result[arr[i]] = 1;
  }
}
// console.log(result);

// QUESTION : 4
// ***********************************************************
// Create group on the basis of age, like this :
// O/p
// {“20”:[{“name”:”a”,”age”:20},{“name”:”b”,”age”:20}]}
// [Incomplete]
// ***********************************************************
let p = [
  { name: 'a', age: 20 },
  { name: 'b', age: 20 },
  { name: 'c', age: 25 },
  { name: 'd', age: 21 },
  { name: 'e', age: 25 },
];

let r = {};
for (let i = 0; i < p.length; i++) {
  let arr = [];
  // r[p[i].age] = arr;
  if (p[i] == p[i + 1]) {
    arr.push(p[i]);
  }
  r[p[i].age] = arr;
}
// console.log('group : ' + JSON.stringify(r));

// QUESTION : 5
// ***********************************************************
// create pair of any two numbers whose multiple is 8, from the array
// ***********************************************************
const arr1 = [2, 4, 3, 8, 21, 24, 32, 1];
let results = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] * arr1[j] === 8) {
      results.push({ first: arr1[i], second: arr1[j] });
    }
  }
}

// console.log(JSON.stringify(results));

// QUESTION : 6
// ***********************************************************
// Give the output of these variables
// ***********************************************************
var a11 = 99;
(() => {
  var a11 = (b1 = c1 = d1 = 2);
})();
// console.log(a11); // 99
// console.log(b1); // 2
// console.log(c1); // 2
// console.log(d1); // 2

// &&

let channel = 'Outer Value';
if (true) {
  // var channel = 'Inner Value';
}
// console.log(channel);

// QUESTION : 7
// ***********************************************************
// Create an array with numbers & their recurrence from the given Array
// ***********************************************************
let targetArray = [2, 1, 4, 8, 6, 9, 7, 1, 2, 7, 7, 7, 8, 5, 5, 1, 3, 3, 9];
let output = {};
for (let i = 0; i < targetArray.length; i++) {
  if (output[targetArray[i]]) {
    output[targetArray[i]] = output[targetArray[i]] + 1;
  } else {
    output[targetArray[i]] = 1;
  }
}
// console.log(JSON.stringify(output));
// {"1":3,"2":2,"3":2,"4":1,"5":2,"6":1,"7":4,"8":2,"9":2}

// QUESTION : 7
// ***********************************************************
// Example of Clousure in JS
// ***********************************************************
function abcde(param = '') {
  const a = 'Rajat ';
  const b = 'JavaScript ';

  function pqr() {
    const d = 'Sharma ';
    const g = 'JS ';
    // console.log(a + b + d + g + param);
  }
  pqr();
}
abcde('Global');

// QUESTION : 8
// ***********************************************************
// Make 3rd element color 'red' using JS
// ***********************************************************
document.querySelector('ul').style.color = 'green';
document.querySelector('ul > li:nth-child(3)').style.color = 'red';

// QUESTION : 9
// ***********************************************************
// Click on any element in list and alert its value
// ***********************************************************
const tag = document.querySelector('ul');
// console.log(tag);
tag.addEventListener('click', function (elem) {
  alert(elem.target.innerHTML);
});

// OR
// const tag = document.getElementsByName('ul');
// console.log(tag);
// for (let i = 0; i < tag.length; i++) {
//   tag[i].addEventListener('click', function (elem) {
//     alert(elem.target.innerHTML);
//   });
// }

// QUESTION : 10
// ***********************************************************
// Reverse each word of string
// ***********************************************************
var string = 'Welcome to this Javascript world!';
var arrSplit = string.split(' ');
// console.log(arrSplit);
let outputRev = [];
for (let i = 0; i < arrSplit.length; i++) {
  let temp = '';
  for (let j = arrSplit[i].length - 1; j >= 0; j--) {
    temp += arrSplit[i][j];
  }
  outputRev.push(temp);
}
// console.log(outputRev.join(' '));

// QUESTION : 11
// ***********************************************************
// console.log(3 > 2 > 1); // false
// console.log('A' - 'B' + 50); // NaN

// 3 + 2 + ''
// '5'

// '' + 1 + 3
// '13'

// 3 + 2 - 'r'
// NaN

// '3' + 3 + 2 - 'r'
// NaN

// '3' + 1 + 2 - 'e'
// NaN

// '3' - 1 + 2
// 4

// '' - 1 + 2
// 1

// '' + 1 + 2
// '12'

// '5' + 1 - 2
// 49

// '5a' - 1 + 2 + 'e'
// 'NaNe'

// '3' - '2' + 1
// 2

// '3' - '2' + 4 + 'rty'
// '5rty'

// ***********************************************************

// QUESTION : 12
// ***********************************************************
// Map(), Reduce(), & Filter() and their return types
// ***********************************************************
const names = [
  { text: 'Alpha', value: 5 },
  { text: 'Beta', value: 2 },
  { text: 'Gamma', value: 4 },
];

// Creates a new array with the results of a function applied to every element in the array.
let mapResult = names.map((x) => ({ ...x, value: x.value * 10 }));
// console.log(JSON.stringify(mapResult));
//[{text: "Alpha", value: 50}, {text: "Beta", value: 20}, {text: "Gamma", value: 40}];

// Creates an array filled with only the array elements that pass a test.
let filterResult = names.filter((x) => x.value > 3);
// console.log(JSON.stringify(filterResult));
//[{text: "Alpha", value: 5}, {text: "Gamma", value: 4}]

// Executes a provided function for each value of the array (from left-to-right). Then returns a single value, the accumulator.
let reduceResult = names.reduce((accumulator, currentValue) =>
  currentValue.value > accumulator.value ? currentValue : accumulator
);
// console.log(reduceResult);
// Get the largest object by value: {"text":"Alpha","value":5}

// QUESTION : 13
// ***********************************************************
// What will be the output
// ***********************************************************
a12 = 0;
b12 = 0;
function abcdr(a, b) {
  this.a12 = a;
  this.b12 = b;
}
let obj = new abcdr(2, 4);
abcdr(5, 10);
// console.log(this.a12, this.b12); // 5 10
// console.log(JSON.stringify(obj)); // {"a12":2,"b12":4}

// QUESTION : 14
// ***********************************************************
// Sort an array in decreasing order
// ***********************************************************
let arr14 = [2, 1, 5, 3, 7, 8, 0];
// console.log(arr14.sort((a, b) => b - a));

// QUESTION : 15
// ***********************************************************
// Diff btw Slice & Splice
// ***********************************************************
//splice
var spliceArr = [1, 2, 3, 4, 5];
//array.splice(startIndex, deleteCount)
// console.log(JSON.stringify(spliceArr.splice(2, 3))); // [3,4,5]

//slice
var sliceArr = [1, 2, 3, 4, 5];
// array.slice(startIndex, endIndex)
// console.log(JSON.stringify(sliceArr.slice(2, 3))); // [3]

// console.log('----after-----');
// SP LICE  = SPlitting original array
// console.log(JSON.stringify(spliceArr)); // [1,2]

// S LICE = NO splitting original array
// console.log(JSON.stringify(sliceArr)); // [1,2,3,4,5]

// QUESTION : 16
// ***********************************************************
// Diff btw Split & Join
// ***********************************************************
// Split - to convert a string into array
var string = 'My Name is Rajat Sharma';
// string.split(separator, limit);
// console.log(JSON.stringify(string.split(' ', 3))); // ["My","Name","is"]

var arrayStr = ['My', 'Name', 'is'];
// Join - to convert a array into string
// console.log(JSON.stringify(arrayStr.join(' '))); // "My Name is"

// QUESTION : 16
// ***********************************************************
// Find 10 Prime numbers
// ***********************************************************
for (let i = 2; i <= 10; i++) {
  let flag = 0;
  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
    }
  }
  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    // console.log(i);
  }
}

// QUESTION : 17
// ***********************************************************
// Find the maximum character word from the string
// ***********************************************************
let str =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
let arrMax = str.split(' ');
let storeLength = [];
for (let i = 0; i < arrMax.length; i++) {
  storeLength.push({ word: arrMax[i], length: arrMax[i].length });
}
// console.log(JSON.stringify(storeLength));
// [{"word":"Lorem","length":5},{"word":"Ipsum","length":5},{"word":"is","length":2},{"word":"simply","length":6},{"word":"dummy","length":5},{"word":"text","length":4},{"word":"of","length":2},{"word":"the","length":3},{"word":"printing","length":8},{"word":"and","length":3},{"word":"typesetting","length":11},{"word":"industry.","length":9}]
// console.log(storeLength.sort((a, b) => a.length - b.length)[`${storeLength.length - 1}`]);
// {word: "typesetting", length: 11}

// QUESTION : 18
// ***********************************************************
// Find 2nd largest number from the array
// ***********************************************************
let arr3 = [1, 4, 10, 3, 2, 4, 5, 6, 7, 7, 8, 9, 9];
arr3.sort((a, b) => a - b);
let arr4 = [];
for (let j = 0; j < arr3.length; j++) {
  if (arr3[j - 1] !== arr3[j] && arr3[j - 1] < arr3[j]) {
    arr4.push(arr3[j]); // pick unique items from array
  }
}
// console.log(arr4); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr4[arr4.length - 2]);

// QUESTION : 18
// ***********************************************************
// Find the salary total based on the department
// ***********************************************************
let empList = [
  { deptName: 'IT', salary: 10000 },
  { deptName: 'HR', salary: 10000 },
  { deptName: 'Accounts', salary: 15000 },
  { deptName: 'Admin', salary: 20000 },
  { deptName: 'IT', salary: 30000 },
  { deptName: 'Admin', salary: 30000 },
  { deptName: 'Accounts', salary: 40000 },
  { deptName: 'HR', salary: null },
];

output = {};

for (let i = 0; i < empList.length; i++) {
  if (output[empList[i].deptName]) {
    output[empList[i].deptName] += empList[i].salary;
  } else {
    output[empList[i].deptName] = empList[i].salary;
  }
}

// console.log(output); // {IT: 40000, HR: 10000, Accounts: 55000, Admin: 50000}

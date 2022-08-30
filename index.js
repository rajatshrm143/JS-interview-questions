// QUESTION : 1
// ***********************************************************
// Diff results of traditional function & fat arrow function
// ***********************************************************
const abc = {
  firstName: 'Rajat',
  getName: function () {
    // console.log(this.firstName);
  },
};
const abcd = {
  firstName: 'Sharma',
  getName: () => {
    //console.log(this.firstName);
  },
};
abc.getName();
abcd.getName();

// QUESTION : 2
// ***********************************************************
// Diff btw Shallow & deep copy
// ***********************************************************
const x = Object.create(abc); // create new object
const xy = Object.assign(abc); // shallow copy of object
const xyz = JSON.parse(JSON.stringify(abc)); // deep copy of object
const xyzq = { ...abc }; // shallow copy of object
abc.firstName = 'manoj';
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
// console.log(a11);
// console.log(b1);
// console.log(c1);
// console.log(d1);

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
let targetArray = [2, 1, 4, 8, 6, 9, 7, 1, 2, 7, 7, 7, 8, 5, 5, 1, 3, 3];
let output = {};
for (let i = 0; i < targetArray.length; i++) {
  if (output[targetArray[i]]) {
    output[targetArray[i]] = output[targetArray[i]] + 1;
  } else {
    output[targetArray[i]] = 1;
  }
}
// console.log(JSON.stringify(output));

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
// input : "abc mnq xyz";
// output : "cba qnm zyx"
// ***********************************************************
let str = 'abc mnq xyz';
let arr3 = str.split(' ');
let temp = '';
for (let i = 0; i < arr3.length; i++) {
  for (let j = arr3[i].length; j >= 0; j--) {
    temp += arr3[i][j];
  }
  temp += ' ';
}
// console.log(temp);

// QUESTION : 11
// ***********************************************************
console.log(3 > 2 > 1); // false
console.log('A' - 'B' + 50); // NaN
// ***********************************************************

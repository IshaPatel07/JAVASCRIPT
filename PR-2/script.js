console.log("1. return the sum of all alement");
let array = [23, 11, 34, 5, 5, 26, 56, -86, 46, 89, 89];

function SumOfAll(arr) {
  let sum = 0;
  arr.forEach((a) => {
    sum += a;
  });
  return sum;
}

const ans = SumOfAll(array);

console.log("all of sum is =", ans);

console.log("2.find max");

function largest(arr) {
  let max = 0;
  arr.forEach((a) => {
    if (max < a) {
      max = a;
    }
  });
  return max;
}

const large = largest(array);
console.log("large number is =", large);

console.log("3 find smallest");

function Smallest(arr) {
  let min = array[0];
  arr.forEach((a) => {
    if (min > a) {
      min = a;
    }
  });
  return min;
}

const small = Smallest(array);
console.log("smallest num is =", small);

console.log("4.takes an array and return new with doubled.");

function DoubleNum(arr) {
  let result = [];
  arr.forEach((i) => {
    result.push(i * 2);
  });
  return result;
}

const mul = DoubleNum(array);
console.log(mul);

console.log("5.even number in array.");

function EvenNum(arr) {
  arr.forEach((i) => {
    if (i % 2 == 0) {
      console.log("even num is =", i);
    }
  });
}
EvenNum(array);

console.log("6. odd number in array");

function OddNum(arr) {
  arr.forEach((a) => {
    if (a % 2 !== 0) {
      console.log("odd num is =", a);
    }
  });
}

OddNum(array);

console.log("7.average of all number");

function AverageOfAll(arr) {
  let sum1 = 0;
  arr.forEach((i) => {
    sum1 += i;
  });
  return sum1 / array.length;
}

const average = AverageOfAll(array);
console.log("Average of all is =", average);

console.log(
  "8. write a function that takes an array and return a new array containing only positive number.",
);
function PositiveNumber(arr) {
  let poss = [];
  arr.forEach((i) => {
    if (i > 0) {
      poss.push(i);
    }
  });
  return poss;
}

const positive = PositiveNumber(array);
console.log("positive number is =", positive);

console.log("9.return the index.");

function FindIndex(arr, value) {
  for (let b = 0; b < array.length; b++) {
    if (array[b] === value) {
      return b;
    }
  }
  return -1;
}
//   arr.forEach((b) => {
//     if (array[b] === value) {
//       return b;
//     }
//   });
//   return -1;
// }

const value = 5;
const index = FindIndex(array, value);
console.log("index of alemens =", index);

console.log("10. reverse withouth reverse method.");

function ReverseArray(arr) {
  let result = [];
  // arr.forEach((i) => {
  //   result.push(i);
  // });
  // return result;
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

const reverse = ReverseArray(array);
console.log("reverse is =", reverse);

console.log("11.remove dublicate element.");

function DuplicateArray(arr) {
  let remove = [];
  arr.forEach((a) => {
    if (!remove.includes(a)) {
      remove.push(a);
    }
  });
  return remove;
}

const duplicate = DuplicateArray(array);
console.log("remove duplicate num =", duplicate);

console.log("12.square of each element");

function SquareOf(arr) {
  let squ = [];
  arr.forEach((s) => {
    squ.push(s * s);
  });
  return squ;
}

const square = SquareOf(array);
console.log("square of all =", square);

console.log("13. murge two array");

function MurgeArray(arr1, arr2) {
  return arr1.concat(arr2);
}

MurgeArray(array, array);

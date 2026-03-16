console.log("1. return the sum of all alement");
let array = [23, 11, 34, 5, 26, 56, 86];

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

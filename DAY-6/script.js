// wap to find max/ min from 5 numbers using ladder else if.

console.log("1. wap to find max/ min from 5 numbers using ladder else if.");


const a = 21,
  b = 4,
  c = 6,
  d = 19,
  e = 9;

if (a > b && a > c && a > d && a > e) {
    // if a is bigger than other than this condition is true otherwise we can go on next.
  console.log("a is max");
} else if (b > a && b > c && b > d && b > e) {
  console.log("b is max");
} else if (c > a && c > b && c > d && c > e) {
  console.log("c is max");
} else if (d > a && d > b && d > c && d > e) {
  console.log("d is max");
} else {
  console.log("e is max");
}

if (a < b && a < c && a < d && a < e) {
  console.log("a is min");
} else if (b < a && b < c && b < d && b < e) {
  console.log("b is min");
} else if (c < a && c < b && c < d && c < e) {
  console.log("c is min");
} else if (d < a && d < b && d < c && d < e) {
  console.log("d is min");
} else {
  console.log("e is min");
}
console.log(
  "*****************************************************************************************",
);
console.log(
  "2.wap to find grade based using given presentage of 5 using mark out of 100",
);

const mark = 35;

if (mark >= 90 && mark <= 100) {
  console.log("Grade = A");
} else if (mark >= 80 && mark < 90) {
  console.log("Grade = B");
} else if (mark >= 70 && mark < 80) {
  console.log("Grade = C");
} else if (mark >= 60 && mark < 70) {
  console.log("Grade = D");
} else {
  console.log("Fail");
}
console.log(
  "*****************************************************************************************",
);

console.log("3.wap to calculate electricity bill using ladder else if.");

const unit = 67;

if (unit >= 1 && unit <= 20) {
  console.log("your bill is ", unit * 1);
} else if (unit >= 21 && unit <= 40) {
  console.log("your bill is ", unit * 2);
} else if (unit >= 41 && unit <= 60) {
  console.log("your bill is ", unit * 3);
} else if (unit > 60 && unit <= 80) {
  console.log("your bill is ", unit * 4);
} else if (unit > 80 && unit <= 100) {
  console.log("your bill is ", unit * 5);
} else {
  console.log("your bill is . ", unit * 1);
}
console.log(
  "*****************************************************************************************",
);

console.log(
  "4.wap to chek number is divisible by 7 or not, using ladder else if.",
);

const num = 23;

if (num % 7 == 0) {
  console.log(num + " Number is divisible by 7");
} else {
  console.log(num + " Number is not divisible by 7");
}

console.log(
  "*****************************************************************************************",
);

console.log("5.wap to check number is even or odd using by if else");

const number = 1103;

if (number % 2 == 0) {
  console.log(number + " Number is even");
} else {
  console.log(number + " Number is odd");
}

console.log(
  "*****************************************************************************************",
);

console.log(
  "6.wap to chek user is eligible for vote or not using ternary operator.",
);
const age = 23;

age >= 18
  ? console.log("User is eligible for vote")
  : console.log("User is not eligible for vote");

console.log(
  "*****************************************************************************************",
);

console.log(
  "7.wap to chek number is nuterial, negative or positive using ternary operator",
);

const n = 0;

n > 0
  ? console.log("number is positive !!")
  : n == 0
    ? console.log("number is nutirial !!")
    : console.log("number is negetive !!");

console.log(
  "*****************************************************************************************",
);

console.log("8.wap to display month name by number using by switch case.");



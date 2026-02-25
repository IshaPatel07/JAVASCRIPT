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
  // if b is bigger than all numbers then this condition become true otheriwse we can go to next condition
  console.log("b is max");
} else if (c > a && c > b && c > d && c > e) {
  // if c is bigger than all numbers then this condition become true otheriwse we can go to next condition
  console.log("c is max");
} else if (d > a && d > b && d > c && d > e) {
  // if d is bigger than all numbers then this condition become true otheriwse we can go to next condition
  console.log("d is max");
} else {
  // all condition are false then thiss condition is true
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
  "2.wap to find grade based using given presentage of 5 using mark out of 100",
);
// fint grade based on given persentage
const mark = 35;

if (mark >= 90 && mark <= 100) {
  // agr 90 or 100 ke bich me parsentage honge to A grade.
  console.log("Grade = A");
} else if (mark >= 80 && mark <= 90) {
  // agr 80 or 90 ke bich me parsentage toh B grade.
  console.log("Grade = B");
} else if (mark >= 70 && mark <= 80) {
  // agr 70 or 80 ke bich me parsentage toh C grade.
  console.log("Grade = C");
} else if (mark >= 60 && mark <= 70) {
  // agr 60 or 70 ke bich me parsentage toh D grade.
  console.log("Grade = D");
} else {
  //agr 60 se niche persentage honge to fail print hoga.
  console.log("Fail");
}



console.log("3.wap to calculate electricity bill using ladder else if.");

const unit = 190;

if (unit >= 1 && unit <= 20) {
  // bill unt 1 se 20 ke bich me hogi toh uska multiplay by 10 se hoga
  console.log("your bill is ", unit * 10);
} else if (unit >= 21 && unit <= 40) {
  //
  console.log("your bill is ", unit * 20);
} else if (unit >= 41 && unit <= 60) {
  console.log("your bill is ", unit * 15);
} else if (unit > 60 && unit <= 80) {
  console.log("your bill is ", unit * 10);
} else if (unit > 80 && unit <= 100) {
  console.log("your bill is ", unit * 5);
} else {
  console.log("your bill is . ", unit * 2);
}



console.log(
  "4.wap to chek number is divisible by 7 or not, using ladder else if.",
);

const num = 23;

// agr number 7 se devide hoga toh vaha print hoga number is divisible by 7 nhi hoga toh vaha print hoga number is not divisible by 7.
if (num % 7 == 0) {
  console.log(num + " Number is divisible by 7");
} else {
  console.log(num + " Number is not divisible by 7");
}



console.log("5.wap to check number is even or odd using by if else");

const number = 263459;

// koee bhi number agr 2 se divide ho rha hai to vo even number hai like 2,4,6,8,10 ,12
// or koee number 2 se divide nhi ho rha toh vo odd number hai. like 1, 3, 5,7,9
// agr jyada number vala digit ho jese 263459 to hum uska last digit dekh kr bhi pta kr sakte hai ki vo number odd hai ya even jese 263459 toh ye munber ka last digit odd hai to ye number odd huaa.

if (number % 2 == 0) {
  console.log(number + " Number is even");
} else {
  console.log(number + " Number is odd");
}



console.log(
  "6.wap to chek user is eligible for vote or not using ternary operator.",
);
const age = 23;

// ternary operator ka uss krke hum ek hi line ke code me humari comdition likh sakte hai.
// ? is ka use hum condition jab true ho tab kr sakte hai or : is ka use hum false condition me kr sakte hai.

age >= 18
  ? console.log("User is eligible for vote")
  : console.log("User is not eligible for vote");



console.log(
  "7.wap to chek number is nuterial, negative or positive using ternary operator",
);


const n = 0;

n > 0
  ? console.log("number is positive !!")
  : n == 0
    ? console.log("number is nutirial !!")
    : console.log("number is negetive !!");

    


console.log("8.wap to display month name by number using by switch case.");

const month = "11";

switch (month) {
  case "1":
    console.log("January");
    break;
  case "2":
    console.log("February");
    break;
  case "3":
    console.log("March");
    break;
  case "4":
    console.log("April");
    break;
  case "5":
    console.log("May");
    break;
  case "6":
    console.log("June");
    break;
  case "7":
    console.log("July");
    break;
  case "8":
    console.log("August");
    break;
  case "9":
    console.log("September");
    break;
  case "10":
    console.log("Octomber");
    break;
  case "11":
    console.log("November");
    break;
  case "12":
    console.log("December");
    break;
  default:
    console.log("Enter month number !!");
}



console.log("9.wap to message based on grade using switch case.");

const grade = "";

switch (grade) {
  case "A+":
    console.log("Exellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "c":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "E":
    console.log("Fail");
    break;
  default:
    console.log("Enter your grade !!");
}

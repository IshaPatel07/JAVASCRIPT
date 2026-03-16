console.log(
  "1. write a javascript  program to swap two numbers using a third variable. ",
);
let a = 10;
let b = 20;
let u = a;
a = b;
b = u;
console.log("a =", a);
console.log("b =", b);

console.log(
  "2. write a javascript program to swap  two numbers without using third variable.",
);

let d = 23;
let e = 11;

d = d + e;
e = d - e;
d = d - e;

console.log("d =", d);
console.log("e =", e);

console.log(
  "3. write a javascript program to convert celsius  temprerture to fahrenheit.",
);

let c = 30;

let f = (c * 9) / 5 + 32;
console.log("fehrenheit is", f);

console.log(
  "4. write a javascript program to convert fehrenheit temprerture to celsius.",
);

let F = 77;

let C = ((F - 32) * 5) / 9;

console.log("celsius is", C);

console.log(
  "5. write a javascript program to calculate the area of rectengle using lenth and width.",
);

let lenth = 20;
let width = 30;

let area = lenth * width;

console.log("rectangle area is =", area);

console.log(
  "6. write a javascript program to calculate the area of circle using the formula PIr2 ",
);

let r = 7;

let Area = 3.14 * r * r;

console.log("Area of circle =", Area);

console.log(
  "7. write a javascript program to calculate the simple intrest using formula SI = (P*R*T)/100.",
);

let P = 20;
let R = 10;
let T = 30;

let SI = (P * R * T) / 100;

console.log("simple interest is =", SI);

console.log(
  "8. write a javascript program to calculate the permeter of a rectangle.",
);

let Lenth = 23;
let Width = 11;

let permeter = 2 * (Lenth + Width);

console.log("permeter is =", permeter);

console.log(
  "9. write a javascript program to calculate the sqare of a number.",
);

let num1 = 23;

let square = num1 * num1;
console.log("square is =", square);

console.log(
  "10. write a javascript program to calculate the cube of a number.",
);

let num2 = 23;

let cube = num2 * num2 * num2;

console.log("cube is =", cube);

console.log(
  "11. write a javascript program to find remainder when one number is divided by another.",
);

let num3 = 29;
let num4 = 26;

let div = num3 % num4;

console.log("remainder is =", div);

console.log("12. write a javascript program to convert minutes into second.");

let min = 20;

let sec = min * 60;

console.log("second is =", sec);

console.log("13. write a javascript program to convert hours into minuts.");

let hours = 4;

let minuts = hours * 60;

console.log("minuts are =", minuts);

console.log("14. write a javascript program to find average of three number.");

let i = 23;
let s = 42;
let k = 31;

let average = (i + s + k) / 3;

console.log("average is =", average);

console.log("15. write a javascript program to convert kilometers into meters");

let km = 4;

let meter = km * 1000;

console.log("meters are =", meter);

console.log("16. write a javascript program to convert meter into centimeter.");

let m = 5;

let cm = m * 100;
console.log("centimeter is =", cm);

console.log(
  "17. write a javascript program to calculate total marks and percentage of 5 subject.",
);

let hid = 40;
let guj = 50;
let eng = 60;
let math = 80;
let sci = 56;

let marks = hid + guj + eng + math + sci;
let per = marks / 5;

console.log("Total marks =", marks);
console.log("percentage =", per);

console.log(
  "18. write a javascript program to increment number using increment operator.",
);

let num = 23;

num++;

console.log("increment is", num);

console.log(
  "19. write a javascript program to decrement number using decrement operator.",
);

let n = 23;

n--;

console.log("decrement is ", n);

console.log(
  "20. write a javascript program to chek if anumber is even or odd using the moduls operator.",
);

let g = 6;

if (g % 2 == 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

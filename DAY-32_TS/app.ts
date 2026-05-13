// 1. swaping with third wariable

let a: string = "hello";
let b: string = "hii";

let temp: string = a;
a = b;
b = temp;

console.log(a, b);

// 2. without third wariable

let x: number = 11;
let y: number = 23;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);

// function

function min(i: number, s: number): number {
  return i * s;
}
console.log(min(41, 11));

// Array

let number: number[] = [23, 11, 3, 9, 5];
let pihu: string[] = ["isha", "hetvi", "princy", "uma"];

console.log(number);
console.log(pihu);

// objects

let products: { name: string; price: number } = {
  name: "book",
  price: 231,
};
console.log(products);

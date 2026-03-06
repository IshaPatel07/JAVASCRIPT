// wap to create perform all arthmetical operators.

// function addition(num1, num2) {
//   return num1 + num2;
// }

// function substraction(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function division(num1, num2) {
//   return num1 / num2;
// }

// const sum = addition(23, 11);
// console.log("sum is", sum);
// const sub = substraction(65, 11);
// console.log("sub is", sub);
// const mul = multiply(2, 3);
// console.log("mul is", mul);
// const div = division(2, 4);
// console.log("div is", div);

//  wap to find cube of any number using function.

// function cube(num) {
//   return num * num * num;
// }

// const ans = cube(9);
// console.log("cube is", ans);

// wap to print 1 to n using function

// function PrintN(n){
//   for(let i = 1; i <=n; i++){
//     console.log(i)
//   }
// }

// PrintN(5)
// PrintN(23)

// wap to chek palidom numbers using function.

// function CheckPalidrom(num) {
//   const safe = num;
//   let rev = 0;

//   while (num > 0) {
//     const id = num % 10;
//     rev = rev * 10 + id;
//     num = Math.floor(num / 10);
//   }

//   console.log(rev);
//   return safe == rev;
// }

// console.log(CheckPalidrom(232323));

// wap to creat  basic calc by switch case and function.

function addition(num1, num2) {
  return num1 + num2;
}

function substraction(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

let choice = 3;
const num1 = 11;
const num2 = 23;

switch (choice) {
  case 1:
    const a = addition(num1, num2);
    console.log("sum is", a);
    break;

  case 2:
    const b = substraction(num1, num2);
    console.log("sub is", b);
    break;
  case 3:
    const c = multiply(num1, num2);
    console.log("mul is", c);
    break;

  case 4:
    const d = division(num1, num2);
    console.log("div is", d);
    break;
}

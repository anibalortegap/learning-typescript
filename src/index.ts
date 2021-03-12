/*
    ===== Código de TypeScript =====
*/

function sum(a: number, b: number): number {
  return a + b;
}

const sumArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(number1: number, number2?: number, base: number = 2): number {
  return number1 * base;
}

const result = sum(10, 45);
const result2 = multiply(10, 0, 34);
console.log(result);
console.log(result2);

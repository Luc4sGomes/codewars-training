export function squareSum(numbers: number[]): number {

  let squareNumbers = 0;

  for (let number of numbers) {
    squareNumbers += Math.pow(number, number);
  }

  return squareNumbers;
}

console.log(squareSum([0, 3, 4, 5]));
const numbers = [10, 4, 100, -5, 54, 2];

// 1. Через цикл for
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += Math.pow(numbers[i], 3);
}
console.log('Сумма кубов через цикл for:', sumFor);

// 2. Через цикл for...of
let sumForOf = 0;
for (const number of numbers) {
    sumForOf += Math.pow(number, 3);
}
console.log('Сумма кубов через цикл for...of:', sumForOf);

// 3. Через метод forEach()
let sumForEach = 0;
numbers.forEach(number => {
    sumForEach += Math.pow(number, 3);
});
console.log('Сумма кубов через forEach():', sumForEach);

// 4. Через метод reduce()
const sumReduce = numbers.reduce((accumulator, number) => {
    return accumulator + Math.pow(number, 3);
}, 0);
console.log('Сумма кубов через reduce():', sumReduce);


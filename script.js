// task 1
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const primeNumbers = [];
for(let i = 1; i <= 100; i++){
    if (isPrime(i)){
        primeNumbers.push(i);
    }
}

console.log(primeNumbers);

// task 2

function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }

    return sum;
}

const years = [];
for(let i = 1; i <= 2030; i++){
    if (getDigitsSum(i) === 13){
        years.push(i);
    }
}

console.log(years);

// task 3

let nums = [123, 456, 789];



function flip(num){

    return String(num).split('').reverse().join('');
}
const reversed = [];
for (let i = 0; i < nums.length; i++){
    reversed.push(flip(nums[i]));
}

console.log(reversed);

// task 4

let num1 = 234;
let num2 = 531;

function func4(num){
    let digits = String(num).split('');
    let digitSum = 0;
    for (let digit of digits){
        digitSum += Number(digit);
    }
    return digitSum;
}

if (func4(num1) === func4(num2)) {
    alert('суммы цифр совпадают');
} else {
    alert('суммы цифр не совпадают');
}

// task 5

let nums5 = [12, 24, 35, 14];

for (let num of nums5) {
    console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
console.log('result', result);
    return result;
}


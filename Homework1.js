"use strict";
// 1. Повернути негативний:
const makeNegative = (num) => num == 0 ? 0 : Math.abs(num) * (-1);
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

// 2. Протилежне число:
const opposite = (number) => number * (-1);
console.log(opposite(3));
console.log(opposite(2.25));
console.log(opposite(-6));


// 3. Парні чи непарні:
const evenOrOdd = (number) => number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd(3));
console.log(evenOrOdd(2));
console.log(evenOrOdd(-6));
console.log(evenOrOdd(0));

// 4. Перетворіть число на рядок
const numberToString = (num) => num.toString();
console.log(numberToString(123));


// 5. Перетворення логічних значень на рядки «Так» або «Ні»:

const boolToWord = (bool) => bool === true ? "Yes" : "No";
console.log(boolToWord(false));
console.log(boolToWord(true));


// 6 *.Перевернуті рядки:
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));



// Задача на розворот числа:
const currentMaxValue = 4589;
const array = Array.from(currentMaxValue.toString());
const reverseMaxValue = Number(array.reverse().join(""));
console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
const productOfArray = (resultsArray.flat(Infinity)).reduce((a, b) => a * b);
console.log(productOfArray);

// Задача на повернення  ініціалів для кожного   імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Aa A A", "Az A A", "Aa B B"];
const initials = userNames.map((user) => user.split(' ').map(user => user[0]).join('.'));
initials.sort();
console.log(initials);

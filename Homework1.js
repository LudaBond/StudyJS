"use strict";
// // 1. Повернути негативний:
// function makeNegative(num) {
//     if (num > 0) {
//         return num * (-1);
//     }
//     return num;
// }
// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));

// // 2. Протилежне число: 
// function opposite(number) {
//     return number * (-1);
// }
// console.log(opposite(3));
// console.log(opposite(2.25));
// console.log(opposite(-6));


// // 3. Парні чи непарні:

// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd"
// }
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(2));
// console.log(evenOrOdd(-6));
// console.log(evenOrOdd(0));

// // 4. Перетворіть число на рядок
// function numberToString(num) {
//     return num.toString();
// }
// console.log(numberToString(123));


// // 5. Перетворення логічних значень на рядки «Так» або «Ні»:
// function boolToWord(bool) {
//     if (bool === true) {
//         return "Yes";
//     }
//     return "No";
// }
// console.log(boolToWord(false));
// console.log(boolToWord(true));


// // 6 *.Перевернуті рядки: 
// let str;
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));



// // Задача на розворот числа:

// const currentMaxValue1 = 4589;
// let reverseMaxValue;
// let array = Array.from(currentMaxValue1.toString());
// reverseMaxValue = array.reverse().join("");
// reverseMaxValue = Number(reverseMaxValue);
// console.log(reverseMaxValue);
// console.log(typeof reverseMaxValue);

// // Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray;
// productOfArray = (resultsArray.flat(10))
// productOfArray = productOfArray.reduce((a, b) => { return a * b; });
// console.log(productOfArray); // 24

// // Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials;
// initials = userNames.sort().map((user) => user.split(' ').map(user => user[0]).join('.'));
// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

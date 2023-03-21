"use strict";

// Задача про обчислення різниці часу

function durationBetweenDates(startDate = '2022-01-01', endDate = '2022-01-02', dimensions = ['days']) {
    const timeDiff = Math.abs((new Date(endDate)).getTime() - (new Date(startDate)).getTime());

    const configObj = {
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
    };

    return Math.ceil(timeDiff / configObj[dimensions]);
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));



// Напишіть функцію яка буде всі ключі переводити у нижній регістр,
//     а всі ціни буде заокруглювати до двох знаків після коми.

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};
function optimizer(data) {
    return Object.entries(data)
        .map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)])
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

console.log(optimizer(priceData));



// Задача про рекурсію та ітерацію
function recursiveOddSumTo(number) {
    let newNumber = number;
    if (number <= 0) {
        return 0;
    }
    if (number % 2 === 0) {
        newNumber--;
    }
    return newNumber + recursiveOddSumTo(newNumber - 2);
}
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

// - функцію яка ітеративно(в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.                
function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25







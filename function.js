"use strict";
// // 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості
function addThemAll(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(addThemAll(2, 4));// 6
console.log(addThemAll(1, 2, 3, 4));// 10
console.log(addThemAll(5, 5, 10));// 20

// 2. Задача на використання замикання.
function multiply(a) {
    return function (b) {
        return a * b;
    }
}
console.log(multiply(5)(5))
console.log(multiply(2)(-2))
console.log(multiply(4)(3))

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. 
const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];
function byProperty(property, direction) {
    return function (a, b) {
        if (direction === '>') {
            return a[property] - b[property];
        } else {
            return b[property] - a[property];
        }
    }
}
console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

// 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи 
// з delay(ціле число) і в кінці замість 0 виведе 'BOOM!'.Напишіть її двома варіантами:

// Використовуючи setIntervalВикористовуючи вкладений setTimeout
function detonatorTimer(delay) {
    let counter = delay;
    const intervalId = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter <= 0) {
            console.log('BOOM!');
            clearInterval(intervalId);
        }
    }, 1000);
}
detonatorTimer(3);

function detonatorTimer(delay) {
    let counter = delay;
    const countdown = () => {
        console.log(counter);
        counter--;
        if (counter <= 0) {
            console.log('BOOM!');
        } else {
            setTimeout(countdown, 1000);
        }
    };
    setTimeout(countdown, 1000);
}
detonatorTimer(3);

// 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи 
//     (2 - 3 штуки) що ці властивості виводять.Наприклад:
let me = {
    name: 'Liudmyla',
    residency: 'Poznan',
    gender: 'female',
    age: 18,
    hobby: 'macrame',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
    },
    describeMyMood() {
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

me.introduce();
me.prognose();
me.describeMyMood();

// 6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту -
//     аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат*



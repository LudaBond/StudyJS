"use strict";
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const measureSelect = document.getElementById("measure");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");
const daysOptionSelect = document.getElementById("daysOption");

calculateBtn.addEventListener("click", () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const measure = measureSelect.value;
    const daysOption = daysOptionSelect.value;

    const diff = calculateDateDifference(startDate, endDate, measure);
    // const option = countDays(startDate, endDate, daysOption);

    resultDiv.innerText = `Період ${diff} ${measure}. `;
    // resultDiv.innerText = ` ${option}. `;


    function calculateDateDifference(startDate, endDate, measure) {
        const diffInMs = endDate - startDate + 24 * 60 * 60 * 1000;

        switch (measure) {
            case "days":
                return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            case "hours":
                return Math.floor(diffInMs / (1000 * 60 * 60));
            case "minutes":
                return Math.floor(diffInMs / (1000 * 60));
            case "seconds":
                return Math.floor(diffInMs / 1000);
            default:
                throw new Error("Invalid measure value");
        };
        return days;
    };
    function countDays(startDate, endDate, daysOption) {
        const oneDay = 24 * 60 * 60 * 1000; // Кількість мілісекунд у одному дні
        const daysBetween = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay)) + 1;
        const weekends = [0, 6]; // Номери днів, які вважаються вихідними (неділя та субота)

        let countWeekdays = 0;
        let countWeekends = 0;

        // Проходимо по кожному дню між датами
        for (let i = 0; i < daysBetween; i++) {
            const date = new Date(startDate.getTime() + (i * oneDay));
            const dayOfWeek = date.getDay();

            // Якщо день належить до вихідних
            if (weekends.includes(dayOfWeek)) {
                countWeekends++;
            } else {
                countWeekdays++;
            }
        }
        if (daysOption === 'all') {
            console.log(`Загальна кількість днів між ${startDate.toDateString()} та ${endDate.toDateString()}: ${daysBetween}`);
        } else if (daysOption === 'weekends') {
            console.log(`Кількість вихідних днів між ${startDate.toDateString()} та ${endDate.toDateString()}: ${countWeekends}`);
        } else if (daysOption === 'weekdays') {
            console.log(`Кількість будніх днів між ${startDate.toDateString()} та ${endDate.toDateString()}: ${countWeekdays}`);
        }
    }
    countDays(startDate, endDate, 'all');
    countDays(startDate, endDate, 'weekends');
    countDays(startDate, endDate, 'weekdays');

});


// function addToHistory(startDate, endDate, measure, diff) {
//     // Отримуємо історію результатів з локального сховища
//     let history = JSON.parse(localStorage.getItem("history")) || [];

//     // Додаємо новий результат до історії
//     history.push({
//         start: startDate,
//         end: endDate,
//         measure: measure,
//         diff: diff
//     });

//     // Якщо історія містить більше 10 результатів, видаляємо найстаріший
//     if (history.length > 10) {
//         history.shift();
//     }

//     // Зберігаємо оновлену історію в локальному сховищі
//     localStorage.setItem("history", JSON.stringify(history));

// }
// addToHistory();


    // function addResultToTable() {
    //     // Отримуємо значення з полів введення
    //     let input1 = parseFloat(document.getElementById("input1").value);
    //     let input2 = parseFloat(document.getElementById("input2").value);

    //     // Рахуємо результат
    //     let result = input1 + input2;

    //     // Отримуємо таблицю за її id
    //     let table = document.getElementById("results-table");

    //     // Створюємо новий рядок
    //     let newRow = table.insertRow();

    //     // Створюємо три нові комірки для нашого нового рядка
    //     let cell1 = newRow.insertCell();
    //     let cell2 = newRow.insertCell();
    //     let cell3 = newRow.insertCell();

    //     // Заповнюємо комірки значеннями
    //     cell1.innerHTML = input1;
    //     cell2.innerHTML = input2;
    //     cell3.innerHTML = result;
    // };









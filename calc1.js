"use strict";
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const measureSelect = document.getElementById("measure");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");
// const weekdaysElement = document.getElementById("weekdays");
// const weekendsElement = document.getElementById("weekends");
const daysOptionSelect = document.getElementById("daysOption");

calculateBtn.addEventListener("click", () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const measure = measureSelect.value;
    const daysOption = daysOptionSelect.value;

    const diff = calculateDateDifference(startDate, endDate, measure);
    const weekdays = calculateWeekdays(startDate, endDate, daysOption)
    const weekends = calculateWeekends(startDate, endDate, daysOption)

    // resultDiv.innerText = `Період ${diff} ${measure}.  Робочих днів ${weekdays} . Вихідних ${weekends}`;
});

function calculateDateDifference(startDate, endDate, measure) {
    const diffInMs = endDate - startDate;

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
    }
    return days;



};
function calculateWeekends(startDate, endDate, daysOption) {
    let weekends = 0;
    for (let i = startDate; i <= endDate; i += 24 * 60 * 60 * 1000) {
        const date = new Date(i);
        if (date.getDay() == 0 && date.getDay() == 6) {
            weekends++;
        }
    }

    return weekends;
};

function calculateWeekdays(startDate, endDate, daysOption) {
    let weekdays = 0;


    for (let i = startDate; i <= endDate; i += 24 * 60 * 60 * 1000) {
        const date = new Date(i);
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            weekdays++;
        }
    }

    return weekdays;

    function addToHistory(startDate, endDate, duration, unit) {
        // Отримуємо історію результатів з локального сховища
        let history = JSON.parse(localStorage.getItem("history")) || [];

        // Додаємо новий результат до історії
        history.push({
            start: startDate,
            end: endDate,
            duration: duration,
            unit: unit
        });

        // Якщо історія містить більше 10 результатів, видаляємо найстаріший
        if (history.length > 10) {
            history.shift();
        }

        // Зберігаємо оновлену історію в локальному сховищі
        localStorage.setItem("history", JSON.stringify(history));

    }
    addToHistory();
};


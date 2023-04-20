"use strict";
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const measureSelect = document.getElementById("measure");
const resultDiv = document.getElementById("results");
const calculateBtn = document.getElementById("calculate-btn");
const daysOptionSelect = document.getElementById("daysOption");
const periodSelect = document.getElementById("period");

endDateInput.disabled = true;
startDateInput.addEventListener("input", () => {
    endDateInput.disabled = false;
    endDateInput.min = startDateInput.value;
});
periodSelect.addEventListener("change", () => {
    const startDate = new Date(startDateInput.value);
    let endDate;
    if (periodSelect.value === "week") {
        endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    } else if (periodSelect.value === "month") {
        endDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    }
    document.getElementById("end-date").value = endDate.toISOString().slice(0, 10);
});
calculateBtn.addEventListener("click", () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    const measure = measureSelect.value;
    const daysOption = daysOptionSelect.value;
    const period = periodSelect.value;
    const diff = calculateDateDifference(startDate, endDate, daysOption, measure);
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerText = `${startDate.toLocaleDateString()}`
    td2.innerText = `${endDate.toLocaleDateString()}`
    td3.innerText = `${daysOption}`
    td4.innerText = `${diff}`
    td5.innerText = `${measure}`

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    resultDiv.insertBefore(row, resultDiv.firstChild);
    addToHistory(startDate.toLocaleDateString(), endDate.toLocaleDateString(), daysOption, diff, measure);

    if (resultDiv.children.length > 9) {
        resultDiv.removeChild(resultDiv.lastChild);
    }
    function calculateDateDifference(startDate, endDate, daysOption, measure) {
        const oneDay = 24 * 60 * 60 * 1000;
        const daysBetween = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay) + 1);
        let countDays = 0;
        if (daysOption === 'allDays') {
            countDays = daysBetween;
        } else {
            const weekends = [0, 6];
            for (let i = 0; i < daysBetween; i++) {
                const date = new Date(startDate.getTime() + (i * oneDay));
                const dayOfWeek = date.getDay();

                if ((daysOption === 'Weekdays' && !weekends.includes(dayOfWeek)) ||
                    (daysOption === 'Weekends' && weekends.includes(dayOfWeek))) {
                    countDays++;
                }
            }
        }
        switch (measure) {
            case "days":
                return countDays;
            case "hours":
                return countDays * 24;
            case "minutes":
                return countDays * 24 * 60;
            case "seconds":
                return countDays * 24 * 60 * 60;
            default:
                throw new Error("Invalid measure value");
        }
    };
});
function addToHistory(startDate, endDate, daysOption, diff, measure) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push({
        startDate: startDate,
        endDate: endDate,
        daysOption: daysOption,
        measure: measure,
        diff: diff
    });
    if (history.length > 9) {
        history.shift();
    }
    localStorage.setItem("history", JSON.stringify(history));
}
let stringifiedHistory = JSON.parse(localStorage.getItem("history")) || [];

if (history.length) {

    stringifiedHistory.forEach(({ startDate, endDate, daysOption, diff, measure }) => {
        console.log

        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");


        td1.innerText = `${startDate}`
        td2.innerText = `${endDate}`
        td3.innerText = `${daysOption}`
        td4.innerText = `${diff}`
        td5.innerText = `${measure}`

        row.appendChild(td1);
        row.appendChild(td2)
        row.appendChild(td3)
        row.appendChild(td4)
        row.appendChild(td5)
        resultDiv.appendChild(row);
    });
}

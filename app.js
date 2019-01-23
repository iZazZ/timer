const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hours");
const timerMinEl = document.querySelector(".timer__minutes");
const timerSecEl = document.querySelector(".timer__seconds");
const InEl = document.querySelector("input");
const buttEl = document.querySelector("button");





function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)

    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    //  return days + " " + hours+" "+ minutes+" "+seconds;
    return {
        rDays: days,
        rHours: hours,
        rMinutes: minutes,
        rSeconds: seconds
    }
}


let timer = setInterval(function () {

    const startDate = new Date();
    let endDate = new Date("Tue Jan 09 2019 20:08:01");

    buttEl.addEventListener("click",function() {
        endDate = InEl.value;
        console.log(endDate);
        
     })




    let TimeDifferenceObj = getTimeDifference(startDate, endDate);

    // if (
    //     TimeDifferenceObj.rDays === 0 &&
    //     TimeDifferenceObj.rHours === 0 &&
    //     TimeDifferenceObj.rMinutes === 0 &&
    //     TimeDifferenceObj.rSeconds === 0)

    // {
        timerDayEl.textContent = TimeDifferenceObj.rDays;
        timerHourEl.textContent = TimeDifferenceObj.rHours;
        timerMinEl.textContent = TimeDifferenceObj.rMinutes;
        timerSecEl.textContent = TimeDifferenceObj.rSeconds;

    // } else {

        // clearInterval(timer);
        // console.log("finished");


    // }

}, 1000);
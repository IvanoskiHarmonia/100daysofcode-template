const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reviewed = document.getElementById('reviewed');
const learning = document.getElementById('learning');

// Start: Timers start and end time

let time_SS = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

function startTime() {
    time_SS.hours = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
    time_SS.minutes = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
    time_SS.seconds = (new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds();
    if (time_SS.hours > 11) {
        time_SS.hours = time_SS.hours - 12;
        time_SS.seconds = time_SS.seconds + 'PM';
    } else {
        time_SS.seconds = time_SS.seconds + 'AM';
    }
    start.value = time_SS.hours + ':' + time_SS.minutes + ':' + time_SS.seconds;
}
function stopTime() {
    time_SS.hours = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
    time_SS.minutes = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
    time_SS.seconds = (new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds();
    if (time_SS.hours > 11) {
        time_SS.hours = time_SS.hours - 12;
        time_SS.seconds = time_SS.seconds + 'PM';
    } else {
        time_SS.seconds = time_SS.seconds + 'AM';
    }

    stop.value = time_SS.hours + ':' + time_SS.minutes + ':' + time_SS.seconds;
}

// End: Timers start and end time




// What day is it from the day I started?

// Below: Please change this to the date you started

let startday = new Date('2022-07-11')

// Above: Please change this to the date you started

let startDate = Date.UTC( startday.getFullYear(), startday.getMonth(), startday.getDate());

let todayDay = new Date(new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate());
let todaysDate = Date.UTC( todayDay.getFullYear(), todayDay.getMonth(), todayDay.getDate());


let diffTime = Math.abs(todaysDate - startDate);
let diffDays = 'Day ' + Math.floor(diffTime / (1000 * 60 * 60 * 24)) + ' of #100DaysOfCode';

let layoutArr = [];

function createLayout() {
    layoutArr = [];
    layoutArr.push(diffDays + '\n\n\nStart-Time: ' + start.value + '\nEnd-Time: ' + stop.value + '\n\nReviewed: ' + reviewed.value + '\nLearning: ' + learning.value);
    document.getElementById('layout').innerHTML = layoutArr;
}

// End of Day of Start Code.
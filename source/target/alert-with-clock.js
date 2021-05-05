/* Time Constants */
const targetMs = Date.parse(new Date('23 May 2021 23:55:00 GMT'));
const msToDays = 86400000; // 1000ms * 60s * 60m * 24h
const msToHours = 3600000; // 1000ms * 60s * 60m
const msToMinutes = 60000; // 1000ms * 60s
const msToSeconds = 1000; // 1000ms
const uInterval = 1000;
const targetId = 'awesome-event-timer';

/*Timing Funcs*/
const plural = quantity => quantity !== 1 ? 's' : '' ;
    const clockCounter = remMs => {
    let days = Math.floor(remMs / msToDays);
    let remDays = remMs % msToDays;
    let hours = Math.floor(remDays/msToHours);
    let remHours = remMs % msToHours;
    let minutes = Math.floor(remHours/msToMinutes);
    let remMinutes = remMs % msToMinutes;
    let seconds = Math.floor(remMinutes/msToSeconds);

    return `${days} day${plural(days)}, ${hours} hour${plural(hours)}, ${minutes} minute${plural(minutes)}, ${seconds} second${plural(seconds)}`;
};

/*Main*/
window.setInterval(() => {
    let nowMs = Date.now();
    let timeDiffSec = clockCounter(targetMs - nowMs);
    document.querySelector(`#${targetId}`).innerHTML = timeDiffSec;
}, uInterval);
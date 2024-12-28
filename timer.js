let milliSec = 00
let sec = 00
let min = 00
let hours = 00
let interval;

function timer() {
    interval = setInterval(function () {
        var formattedmilliSec = ("0" + milliSec).slice(-2);
        var formattedsec = ("0" + sec).slice(-2);
        var formattedmin = ("0" + min).slice(-2);
        var formattedhours = ("0" + hours).slice(-2);

        milliSec++
        if (milliSec === 100) {
            milliSec = 00
            sec++
            if (sec === 60) {
                sec = 00
                min++
            }
            if (min === 60) {
                min = 00
                hours++
            }

        }
        let timer = formattedhours + ":" + formattedmin + ":" + formattedsec + ":" + formattedmilliSec;
        document.getElementById("mainDiv").innerHTML = timer

    }, 10);

}

function reset() {
    clearInterval(interval)
    milliSec = 00
    sec = 00
    min = 00
    hours = 00
    timer()
}

function stop() {
    clearInterval(interval)
}

function start() {
    timer()
}

//Time generating functions
function getCurrentTime() {
    var date = new Date();
    return date.getTime();
}

var getElapsedTime = function() {
    var initialTime = getCurrentTime();
    return function() {
        return getCurrentTime() - initialTime;
    }
}();

function mins(elapsedTime) {
    var mins = Math.floor(elapsedTime / (1000 * 60))

    if (mins >= 60) {
        mins = mins % 60;
    }
    if (mins < 10) {
        return '0' + mins;
    }
    return mins;
}

function seconds(elapsedTime) {
    var seconds = Math.floor(elapsedTime / 1000);
    if (seconds >= 60) {
        seconds = seconds % 60;
    }
    if (seconds < 10) {
        return '0' + seconds;
    }
    return seconds
}

function deciseconds(elapsedTime) {
    var deciseconds = Math.floor(elapsedTime/100)
    if (deciseconds >= 100) {
        deciseconds = deciseconds % 100;
    }
    if (deciseconds < 10) {
        return '0' + deciseconds;
    }
    return deciseconds
}

//Drawing functions
function drawClock() {
    var elapsedTime = getElapsedTime()
    updateDom('js-number', mins(elapsedTime), seconds(elapsedTime), deciseconds(elapsedTime));
    var FrameID = requestAnimationFrame(drawClock)

}

function startAnimation(argument) {
    requestAnimationFrame(drawClock)
}

// Stop and Start functions
var togglePause = function(bool) {
    var isPaused = bool;
    isPaused = !isPaused;
    return function() {
        return isPaused;
    }
}

function updateDom(id, mins, seconds, deciseconds) {
    //Check to see if the element to which we are js-numberending our newly created
    //element exists
    var timeElement = document.getElementById(id);
    timeElement.innerText = `${mins}:${seconds}:${deciseconds}`;
}


// document.getElementById('js-start').addEventListener('click', startAnimation);

module.exports = {
    getCurrentTime,
    getElapsedTime,
    updateDom,
    mins,
    deciseconds,
    seconds
}

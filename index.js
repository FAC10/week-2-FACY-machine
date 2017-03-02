//Time generating functions
function getCurrentTime() {
    return Date.now();
}

var getElapsedTime = function() {
    var initialTime = getCurrentTime();
    return function() {
        return getCurrentTime() - initialTime;
    }
}();

// Returns the correct number of minutes
function mins(elapsedTime) {
    var mins = Math.floor(elapsedTime / (1000 * 60))
    // Ensures minutes never go above 60
    if (mins >= 60) {
        mins = mins % 60;
    }
    // Pads the number with 0
    if (mins < 10) {
        return '0' + mins;
    }
    return mins;
}

// Returns the correct number of seconds
function seconds(elapsedTime) {
    var seconds = Math.floor(elapsedTime / 1000);
    // Ensures minutes never go above 60
    if (seconds >= 60) {
        seconds = seconds % 60;
    }
    // Pads the number with 0
    if (seconds < 10) {
        return '0' + seconds;
    }
    return seconds
}

// Returns the correct number of minutes
function deciseconds(elapsedTime) {
    // Returns just the 3rd last and 2nd last digits
    var deciseconds = (elapsedTime.toString()).slice(-3, -1);
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

//Stop and Start functions
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
    var timeElement = document.querySelector('#js-number');
    timeElement.innerText = `${mins}:${seconds}:${deciseconds}`;
}(function addStartListener() {
    var startButton = document.getElementById('js-start');
    startButton.addEventListener('click', startAnimation);
}());

module.exports = {
    getCurrentTime,
    getElapsedTime,
    togglePause,
    updateDom
}

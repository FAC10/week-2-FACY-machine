// Returns the current UNIX time in milliseconds
function getCurrentTime() {
    return Date.now();
}

var timer = function() {
    var initialTime = getCurrentTime();
    var passedTime = 0;
    var startTime;
    var isRunning = false;
    var frameID;
    var updateTime;
    return {
        getElapsedTime: function getElapsedTime() {
            var elapsedTime = getCurrentTime() - initialTime;
            return elapsedTime;
        },
        // Not using right now
        startTimer: function startTimer() {
            if (isRunning) return;
            isRunning = true;
            startTime = getCurrentTime() - passedTime;
        },
        // Not using right now
        updateTime: function updateTime() {
            passedTime = getCurrentTime() - startTime;
            updateDom('js-number',
                      mins(passedTime),
                      seconds(passedTime),
                      deciseconds(passedTime)
            );
            frameID = requestAnimationFrame(updateTime);
        },
        pauseTime: function pauseTime() {
            if (!isRunning) return;
            isRunning = false;
            cancelAnimationFrame(frameID)
        },
    }
};

//Drawing functions
// var myTime = time();
function drawClock(id, myTime) {
    var elapsedTime = myTime.getElapsedTime();
    updateDom('js-number', mins(elapsedTime), seconds(elapsedTime), deciseconds(elapsedTime));
    // Creates a global variable: FIX THIS
    frameID = requestAnimationFrame(function() {
        drawClock(null, myTime);
    });
}

function startAnimation(myTime) {
    requestAnimationFrame(function() {
        drawClock(null, myTime);
    });
}

function pauseAnimation(frameID) {
    cancelAnimationFrame(frameID);
}

// Updates the parent element with the correct time
function updateDom(id, mins, seconds, deciseconds) {
    var parent = document.getElementById(id);
    parent.innerText = `${mins}:${seconds}:${deciseconds}`;
}

// IIFE adds click event handler to start button
(function addListeners() {
    var startButton = document.getElementById('js-start');
    var pauseButton = document.getElementById('js-pause');
    startButton.addEventListener('click', function() {
        // Calling time() in here creates a new closure every time, which means the timer resets whenever you click this.
        // Also each click starts a new animationFrame, so you have to click Pause the same number of times to actually get it to pause...
        // No idea how to fix :(
        startAnimation(timer());
    });
    pauseButton.addEventListener('click', function() {
        pauseAnimation(frameID);
    });
}());

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

//Stop and Start functions
// var togglePause = function(bool) {
//     var isPaused = bool;
//     isPaused = !isPaused;
//     return function() {
//         return isPaused;
//     }
// }

module.exports = {
    getCurrentTime,
    getElapsedTime,
}

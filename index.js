// Utility function for returning the current time
function getCurrentTime() {
    return Date.now();
}

////////////////////////////////
//    Elapsed Time counter    //
////////////////////////////////

// This function is key - it closes in our initial time at the point of
// invocation (which is immediate).
// The return value is a function with access to the time at point of
// invocation (initialTime). This function is then used to get the
// amount of time expired since the beginning.
var getElapsedTime = (function() {
    var initialTime = getCurrentTime();
    return function() {
        return getCurrentTime() - initialTime;
    }
}());

////////////////////////////////
//  Time Conversion Function  //
////////////////////////////////

//These functions convert the elapsed time from milleseconds to the mins,
//deciseconds and seconds
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
    var deciseconds = Math.floor(elapsedTime / 100)
    if (deciseconds >= 100) {
        deciseconds = deciseconds % 100;
    }
    if (deciseconds < 10) {
        return '0' + deciseconds;
    }
    return deciseconds
}
////////////////////////////////
//     Animate the Clock      //
////////////////////////////////

// The following function uses request animation frame to
// redraw our changing time variables
var FrameID;
function drawClock() {
    var elapsedTime = getElapsedTime()
    updateDom('js-number', mins(elapsedTime), seconds(elapsedTime), deciseconds(elapsedTime));
    //This function is used recursively i.e. startAnimation is called below then recalled again within this function
    FrameID = requestAnimationFrame(drawClock)
}

function startAnimation(argument) {
    requestAnimationFrame(drawClock)
}

//This pauses the animation frame
function pauseAnimation() {
    cancelAnimationFrame(FrameID);
}
// Puts the numbers into the DOM
function updateDom(id, mins, seconds, deciseconds) {
    var timeElement = document.getElementById(id);
    timeElement.innerText = `${mins}:${seconds}:${deciseconds}`;
}

// document.getElementById('js-start').addEventListener('click', startAnimation);
// document.getElementById('js-pause').addEventListener('click', pauseAnimation);

// Stop and Start functions
// var togglePause = function(bool) {
//     var isPaused = bool;
//     isPaused = !isPaused;
//     return function() {
//         return isPaused;
//     }
// }

//Using Jasmine requires that we export each of our functions as
//properties of an object which we require/import to be used in Jasmine
module.exports = {
    getCurrentTime,
    getElapsedTime,
    mins,
    deciseconds,
    seconds
}

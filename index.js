//Time generating functions
//This function is a utiliy function that gets and returns the current time
function getCurrentTime() {
    var date = new Date();
    return date.getTime();
}

///////////////////////////////////////////////////////////////////
//           Elapsed Time counter
////////////////////////////////////////////////////////////////////

// This function is our key one it closes in our initial time at the point of
// invocation which is immediate it then gets called lower down and at that
// point a call of get current time will give a different time
var getElapsedTime = (function() {
    var initialTime = getCurrentTime();
    return function() {
        return getCurrentTime() - initialTime;
    }
}());

///////////////////////////////////////////////////////////////////
//          Time Conversion Function
////////////////////////////////////////////////////////////////////
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
    var deciseconds = Math.floor(elapsedTime/100)
    if (deciseconds >= 100) {
        deciseconds = deciseconds % 100;
    }
    if (deciseconds < 10) {
        return '0' + deciseconds;
    }
    return deciseconds
}
///////////////////////////////////////////////////////////////////
//         Animate the Clock
////////////////////////////////////////////////////////////////////
// The following function uses request animation frame a native JS function to
// redraw our changing time variables (this tries to redraw these at a rate of
// 60FPS (frames per second)
//Drawing functions
function drawClock() {
    var elapsedTime = getElapsedTime()
    updateDom('js-number', mins(elapsedTime), seconds(elapsedTime), deciseconds(elapsedTime));
    //This function is used recursively i.e. startAnimation is called below
    //then recalled again within this function
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
//This function takes in the id of our clock div and fills it with our time
//variables
function updateDom(id, mins, seconds, deciseconds) {
    //Check to see if the element to which we are js-numberending our newly created
    //element exists
    var timeElement = document.getElementById(id);
    timeElement.innerText = `${mins}:${seconds}:${deciseconds}`;
}


document.getElementById('js-start').addEventListener('click', startAnimation);

//Using Jasmine requires that we export each of our functions as properties of
//an object which we require/import to be used in Jasmine
module.exports = {
    getCurrentTime,
    getElapsedTime,
    updateDom,
    mins,
    deciseconds,
    seconds
}

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

//Drawing functions
function drawClock() {
    var elapsedTime = getElapsedTime()
    var mins = Math.floor(elapsedTime / (1000 * 60));
    var seconds = Math.floor(elapsedTime / 1000);
    var milliseconds = (elapsedTime.toString()).slice(-2)
    // if (milliseconds >= 1000) {
    //     milliseconds = milliseconds - 1000;
    // }
    updateDom('js-number', mins, seconds, milliseconds);
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

//DOM Manipulation and checking functions
function createDomElement(element) {
    return document.createElement(element);
}

function updateDom(id, mins, seconds, milliseconds) {
    //Check to see if the element to which we are js-numberending our newly created
    //element exists
    var timeElement = document.querySelector('#js-number');
    timeElement.innerText = `${mins}: ${seconds}: ${milliseconds}`;
}





//Cannot update the DOM
// function checkDomUpdated(id) {
//     //If the DOM is updated return a boolean value
//     var el = document.getElementById(id)
//     console.log(el);
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// }


module.exports = {
    getCurrentTime,
    getElapsedTime,
    createDomElement,
    togglePause,
    updateDom,
}


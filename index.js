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
    updateDom('app', elapsedTime);
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

function updateDom(id, elapsedTime) {
    //Check to see if the element to which we are appending our newly created
    //element exists
    var timeElement = document.querySelector('#app');
    timeElement.innerText = elapsedTime;
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


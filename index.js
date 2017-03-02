function getCurrentSeconds() {
    var date = new Date();
    return date.getSeconds();
}

function currentTime() {
    //This is a utility function that is used to generate time
    return new Date().getSeconds()
}
var getInitialTime = function() {
    var initialTime = getCurrentSeconds();
    return function() {
        return initialTime;
    }
}();

function createDomElement(element) {
    return document.createElement(element);
}

function updateDom(element, id, parent) {
    //Check to see if the element to which we are appending our newly created
    //element exists
    parent = parent || document.body
    var child = createDomElement(element);
    child.id = id;
    if (document.querySelector('body')) {
        parent.appendChild(child);
    }
    return checkDomUpdated(id);
}

function checkDomUpdated(id) {
    //If the DOM is updated return a boolean value
    var el = document.getElementById(id)
    console.log(el);
    if (el) {
        return true;
    } else {
        return false;
    }
}



//This is an immediately invoked function that sets return value to ourTime
var ourTime = function() {
    //We get the initial time by calling current time then using a closure this values is passed to the returned function below
    var outsideTime = currentTime()

    return function() {
        //At the point that this is called current time is now greater than the closed in initial time, the difference between these two number is the elapsed time
        return currentTime() - outsideTime;
    }
}()

function drawClock(){

  var clock = new Date().getSeconds()
  console.log(clock)
  var FrameID = requestAnimationFrame(drawClock)

  if (pause(toggleBool())()){
    cancelAnimationFrame(FrameID);
  }
}

requestAnimationFrame(drawClock);



function toggleBool(){
  var stuff = true
  return stuff
}


var pause = function(paused){
  var isPaused = paused
  isPaused = !isPaused

  return function(){
    return isPaused
  }
}

//Modules are exported to Jasmine here as props on an object
module.exports = {
    getCurrentSeconds,
    getInitialTime,
    createDomElement
}


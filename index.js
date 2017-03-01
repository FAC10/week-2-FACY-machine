function getCurrentSeconds() {
  var date = new Date();
  return date.getSeconds();
}

function currentTime(){
  //This is a utility function that is used to generate time
  return new Date().getSeconds()
}
   //This is an immediately invoked function that sets return value to ourTime
var ourTime = function(){
//We get the initial time by calling current time then using a closure this values is passed to the returned function below
  var outsideTime = currentTime()

  return function (){
    //At the point that this is called current time is now greater than the closed in initial time, the difference between these two number is the elapsed time
    return currentTime() - outsideTime;
  } 
  
}()


module.exports = {
	getCurrentSeconds,

}

function getCurrentSeconds() {
  var date = new Date();
  return date.getSeconds();
}

var getInitialTime = function() {
  var initialTime = getCurrentSeconds();
  return function() {
    return initialTime;
  }
}();

module.exports = {
	getCurrentSeconds,
  getInitialTime,
}

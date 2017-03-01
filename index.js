function getCurrentSeconds() {
  var date = new Date();
  return date.getSeconds();
}

module.exports = {
	getCurrentSeconds,
}

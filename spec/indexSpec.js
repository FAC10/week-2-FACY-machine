describe('Time returning functions', function() {
  var getCurrentSeconds = require('../index.js').getCurrentSeconds;
  var date = new Date()  ;
  var seconds = date.getSeconds();
  it('Should return current seconds', function() {
    var result = getCurrentSeconds();
    expect(result).toEqual(seconds);
			})
  var getInitialTime = require('../index.js').getInitialTime;
  it('Closure should have old value for initialTime', function() {
    var initialTime = getInitialTime();
    var timeNow = setTimeout(getCurrentSeconds, 2000);
    expect(timeNow).not.toBe(initialTime);
  })
})

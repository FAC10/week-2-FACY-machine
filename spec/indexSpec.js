describe('Time returning functions', function() {
	var timeObject = require('../index.js')
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
	it('The function should create a DOM Element',function() {
		var createStopWatch = timeObject.createStopWatch;
		var element = createStopWatch();
		expect(element).toBe(<div></div>)	
	})
	it('Should update the DOM with our current time',function() {
		var initialTime = getInitialTime();
		
	})
})

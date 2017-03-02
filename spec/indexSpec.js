describe('Time returning functions', function() {
	var stopwatch = require('../index.js')
  var getCurrentSeconds = require('../index.js').getCurrentSeconds;
  var date = new Date()  ;
  var seconds = date.getSeconds();



  it('Should return current seconds', function() {
    var result = getCurrentSeconds();
    expect(result).toEqual(seconds);
			})
  it('Closure should have old value for initialTime', function() {
  var getInitialTime = stopwatch.getInitialTime;
    var initialTime = getInitialTime();
    var timeNow = setTimeout(getCurrentSeconds, 2000);
    expect(timeNow).not.toBe(initialTime);
  })
	// We cannot test the DOM as in testing the framework
	it('The function should create a DOM Element',function() {
		var createDomElement = stopwatch.createDomElement;
		var element = "div"
		expect(createDomElement(element)).toBe(`<${element}></${element}>`)	
	})
	it('Should update the DOM with our current time',function() {
		var initialTime = stopwatch.getInitialTime();
		
	})
})

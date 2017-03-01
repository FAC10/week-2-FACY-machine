describe('Time returning functions', function() {
  var getCurrentSeconds = require('../index.js').getCurrentSeconds;
    var date = new Date();
    var seconds = date.getSeconds();
  it('Should return current seconds', function() {
    var result = getCurrentSeconds();
    expect(result).toEqual(seconds);
			})
	it('Converts current seconds to zero',function() {
    // Can just return 0 — TODO: improve test
		var setsInitialTime = require('../index.js').setsInitialTime;
		var result = setsInitialTime();
		expect(typeof result).toBe('number')
		expect(result).toBe(0);
  })
})

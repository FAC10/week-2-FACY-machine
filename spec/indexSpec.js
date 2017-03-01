describe('Time returning functions', function() {
  var getCurrentSeconds = require('../index.js').getCurrentSeconds;
    var date = new Date();
    var seconds = date.getSeconds();
  it('Should return current seconds', function() {
    var result = getCurrentSeconds();
    expect(result).toEqual(seconds);
			})
})

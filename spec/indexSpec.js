describe('Time returning functions', function() {
  var getCurrentSeconds = require('../index.js');
  it('Should return current seconds', function() {
    var date = new Date();
    var seconds = date.getSeconds();
    var result = getCurrentSeconds();
    expect(result).toEqual(seconds);
  })
})

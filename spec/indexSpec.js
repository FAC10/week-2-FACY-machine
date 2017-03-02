describe('Time returning functions', function() {
    var stopwatch = require('../index.js')
    var getCurrentTime = stopwatch.getCurrentTime;

    it('Should return a number', function() {
        var result = getCurrentTime();
        expect(typeof result).toBe('number');
    })
    it('Closure should have old value for initialTime', function() {
        var getElapsedTime = stopwatch.getElapsedTime;
        var initialTime = getElapsedTime();
        var timeNow = setTimeout(getCurrentTime, 2000);
        expect(timeNow).not.toBe(initialTime);
    })
})

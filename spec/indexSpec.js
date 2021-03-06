var stopwatch = require('../index.js');
//Jasmine uses the 'describe' and 'it' syntax the describe block is similar to
//a QUnit Module it describes what the following test within the block should
//do.

describe('Time returning functions', function() {
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

describe('Time returning functions', function() {
    it('should return a conversion of the given input to minutes', function() {
        var mins = stopwatch.mins
        var elapsedTime = 4500000;
        expect(mins(elapsedTime)).toEqual(15);
    })
    it('should add a zero if the mins is under 10', function() {
        var mins = stopwatch.mins;
        var elapsedTime = 0;
        expect(mins(elapsedTime)).toBe('00')
    })
    it('should add a zero if the seconds is under 10', function() {
        var mins = stopwatch.mins;
        var elapsedTime = 0;
        expect(mins(elapsedTime)).toBe('00')
    })

    it('should return a conversion of the given input to seconds', function() {
        var seconds = stopwatch.seconds
        var elapsedTime = 220000;
        expect(seconds(elapsedTime)).toEqual(40);
    })
    it('should add a zero if the seconds is under 10', function() {
        var seconds = stopwatch.seconds;
        var elapsedTime = 0;
        expect(seconds(elapsedTime)).toBe('00')
    })

    it('should return a conversion of the given input to deciseconds', function() {
        var deciseconds = stopwatch.deciseconds;
        var result = deciseconds(12345);
        expect(result).toBe(23);
    })
    it('should add a zero if the seconds is under 10', function() {
        var deciseconds = stopwatch.deciseconds;
        var elapsedTime = 0;
        expect(deciseconds(elapsedTime)).toBe('00')
    })
})

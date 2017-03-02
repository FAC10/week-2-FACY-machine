describe('Time returning functions', function() {
    var stopwatch = require('../index.js')
    var getCurrentTime = stopwatch.getCurrentTime;
    var date = new Date();
    var seconds = date.getSeconds();

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

describe('Updating DOM functions', function() {
    var stopwatch = require('../index.js')
    //This test does not work as we canno test the DOM as Jasmine runs on node
    //which has no DOM
    // it('Should return true if the element to the dom',function() {
    //     var updateDom = stopwatch.updateDom
    //     expect(updateDom('p','name')).toBe(true);
    // })
    it('Should update the DOM with our current time', function() {
        var initialTime = stopwatch.getElapsedTime();

    })
    var togglePause = stopwatch.togglePause;
    it('Should return a function to ensure we close over the variable', function() {
        expect(typeof togglePause()).toBe('function');
    })
    it('Should return a boolean', function() {
        expect(togglePause(false)()).toBe(true);
    })
})

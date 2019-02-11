var myVar = 'my var!';
function myFunc(x, y) {
    return x + y;
}
// ES6 or ES 2015
var num = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; }); // ES 2015
var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.soma = function (x, y) {
        return x + y;
    };
    return Mathematics;
}());
var n1 = 'testString';
n1 = 12;

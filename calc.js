var calculator = /** @class */ (function () {
    function calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    return calculator;
}());
function add(a, b) {
    var sum = a + b;
    return sum;
}
function sub(a, b) {
    var res = a - b;
    return res;
}
function mul(a, b) {
    var pro = a * b;
    return pro;
}
function div(a, b) {
    var rem = a / b;
    return rem;
}
var sum = add(1, 3);
var subt = sub(5, 3);
var pro = mul(5, 5);
var rem = div(10, 2);
console.log("The sum of 1 and 3 is: ".concat(sum, " "));
console.log("The subtraction of 5 and 3 is: ".concat(subt, " "));
console.log("The product of 5 and 5 is: ".concat(pro, " "));
console.log("The quotient when 2 divides 10 is: ".concat(rem, " "));

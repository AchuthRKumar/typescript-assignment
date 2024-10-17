var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator(basePremium) {
        this.basePremium = basePremium;
    }
    InsuranceCalculator.prototype.calculatePremium = function (age, coverage, health) {
        var premium = this.basePremium;
        if (age < 25) {
            premium *= 1.2;
        }
        else if (age >= 25 && age < 60) {
            premium *= 1.0;
        }
        else {
            premium *= 1.5;
        }
        premium *= (coverage / 1000);
        switch (health) {
            case "healthy":
                premium *= 0.8;
                break;
            case "average":
                premium *= 1.0;
                break;
            case "unhealthy":
                premium *= 1.5;
                break;
        }
        return premium;
    };
    return InsuranceCalculator;
}());
var calculator = new InsuranceCalculator(100);
var age = 30;
var coverage = 50000;
var health = "average";
var premium = calculator.calculatePremium(age, coverage, health);
console.log("Calculated Insurance Premium: ".concat(premium));
age = 20;
coverage = 30000;
health = "average";
var prem = calculator.calculatePremium(age, coverage, health);
console.log("Calculated Insurance Premium: ".concat(prem));

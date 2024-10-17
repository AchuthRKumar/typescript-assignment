class InsuranceCalculator {
    private basePremium: number;

    constructor(basePremium: number) {
        this.basePremium = basePremium;
    }

    calculatePremium(age: number, coverage: number, health: string): number {
        let premium = this.basePremium;
        if (age < 25) {
            premium *= 1.2; 
        } else if (age >= 25 && age < 60) {
            premium *= 1.0; 
        } else {
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
    }
}

const calculator = new InsuranceCalculator(100);

let age = 30; 
let coverage = 50000; 
let health = "average"; 

const premium = calculator.calculatePremium(age, coverage, health);
console.log(`Calculated Insurance Premium: ${premium}`);

age = 20;
coverage = 30000;
health = "average";

const prem = calculator.calculatePremium(age, coverage, health);
console.log(`Calculated Insurance Premium: ${prem}`);


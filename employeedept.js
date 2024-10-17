var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.addEmployee = function (empId, empName, deptId, salary) {
        var newEmployee = { empId: empId, empName: empName, deptId: deptId, salary: salary };
        this.employees.push(newEmployee);
    };
    Company.prototype.empByDept = function (deptId) {
        return this.employees.filter(function (emp) { return emp.deptId === deptId; });
    };
    Company.prototype.getTotalSalariesByDeptId = function (departmentId) {
        var employeesInDept = this.empByDept(departmentId);
        return employeesInDept.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    return Company;
}());
var comp = new Company();
comp.addEmployee(1, "Alice", 101, 50000);
comp.addEmployee(2, "Bob", 102, 60000);
comp.addEmployee(3, "Charlie", 101, 55000);
console.log(comp.empByDept(101));
var totalSalaries = comp.getTotalSalariesByDeptId(101);
console.log("Total salaries under department 101: ".concat(totalSalaries));

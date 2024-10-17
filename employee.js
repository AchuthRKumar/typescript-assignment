var Employee = /** @class */ (function () {
    function Employee(empId, password) {
        this.empId = empId;
        this.password = password;
    }
    return Employee;
}());
var employees = new Map();
//add
function addEmployee(empId, password) {
    if (employees.has(empId)) {
        console.log("Employee ID ".concat(empId, " already exists."));
        return false;
    }
    var employee = new Employee(empId, password);
    employees.set(empId, employee);
    return true;
}
//access
function getAllEmployees() {
    return Array.from(employees.values());
}
// Adding employees
addEmployee(1, "password123");
addEmployee(1, "mypassword");
addEmployee(3, "anotherpassword");
var employeesList = getAllEmployees();
employeesList.forEach(function (employee) {
    console.log("Employee ID: ".concat(employee.empId, ", Password: ").concat(employee.password));
});

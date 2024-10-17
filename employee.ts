class Employee {
    empId: Number;      
    password: string;   

    constructor(empId: Number, password: string) {
        this.empId = empId;
        this.password = password;
    }
}

const employees = new Map<Number, Employee>();

//add
function addEmployee(empId: Number, password: string): boolean {
    if (employees.has(empId)) {
        console.log(`Employee ID ${empId} already exists.`);
        return false;
    }
    const employee = new Employee(empId, password);
    employees.set(empId, employee);
    return true;
}

//access
function getAllEmployees(): Employee[] {
    return Array.from(employees.values());
}

// Adding employees
addEmployee(1, "password123");
addEmployee(1, "mypassword");
addEmployee(3, "anotherpassword");

const employeesList = getAllEmployees();
employeesList.forEach(employee => {
    console.log(`Employee ID: ${employee.empId}, Password: ${employee.password}`);
});

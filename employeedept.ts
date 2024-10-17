class Company {
    employees: {
        empId: number;
        empName: string;
        deptId: number;
        salary: number;
    }[] = [];

    addEmployee(empId: number, empName: string, deptId: number, salary: number): void {
        const newEmployee = { empId, empName, deptId, salary };
        this.employees.push(newEmployee);
    }

    empByDept(deptId: number): { empId: number; empName: string; deptId: number; salary: number; }[] {
        return this.employees.filter(emp => emp.deptId === deptId);
    }

    getTotalSalariesByDeptId(departmentId: number): number {
        const employeesInDept = this.empByDept(departmentId);
        return employeesInDept.reduce((total, emp) => total + emp.salary, 0);
    }
}

const comp = new Company();

comp.addEmployee(1, "Alice", 101, 50000);
comp.addEmployee(2, "Bob", 102, 60000);
comp.addEmployee(3, "Charlie", 101, 55000);

console.log(comp.empByDept(101));

const totalSalaries = comp.getTotalSalariesByDeptId(101);
console.log(`Total salaries under department 101: ${totalSalaries}`);

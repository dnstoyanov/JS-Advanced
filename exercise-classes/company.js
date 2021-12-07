class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if(!name || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
            this.departments[department].push({name, position, salary});
        }

        console.log(`New employee is hired. Name: ${name}. Position: ${position}`)
    }


    bestDepartment() {
        let currentBest = {
            name: '',
            salary: 0
        };

        for (let depKey in this.departments) {
            let avgSalary = 0;

            for (let empKey in this.departments[depKey]) {
                avgSalary += this.departments[depKey][empKey];
            }

            avgSalary = avgSalary/this.departments[depKey].length;
            if (currentBest.salary < avgSalary) {
                currentBest.name = depKey;
                currentBest.salary = avgSalary;
            }
        }
        return this.departments;
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());
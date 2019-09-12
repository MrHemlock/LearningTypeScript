const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
        }

        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smithson"; // will cause an error since the max length for the name is 10
if (employee.fullName) {
    console.log(employee.fullName);
}


/*
// basic way of setting an attribute
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}*/

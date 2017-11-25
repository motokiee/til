function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

let user = new Student("Motoki", "narita")

document.body.innerHTML = greeter(user);
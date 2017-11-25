function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
var user = new Student("Motoki", "narita");
document.body.innerHTML = greeter(user);

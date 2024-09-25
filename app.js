import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new person();
const programStart = async (persons = Persons) => {
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("As I approach the staff room, please feel free to ask any questions.welcome!");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Please enter the name of the student you would like to connect with."
            });
            const student = persons.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Happy to meet you!`);
                console.log("New student added");
                console.log("Current student list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Its a pleasure to meet you!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(Persons);

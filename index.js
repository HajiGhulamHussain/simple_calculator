import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter Your First Number:",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Your Second Number:",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one Your perform operation ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "") {
    console.log("Your Value is:" + answer.firstNumber + answer.secondNumber);
}

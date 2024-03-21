
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
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Substraction"){
console.log(answer.firstNumber - answer.secondNumber);  
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
console.log("Please Select Valid Number")
}

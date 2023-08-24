const Circle = require("./lib/Circle")
const inquirer=require("inquirer")
const fs=require("fs")

inquirer
.prompt([{
    type: "input",
    message: "Enter SVG text:",
    name: "text"
}, {
    type: "list",
    message: "Select text color:",
    name: "textcolor",
    choices: []
}, {
    type: "list",
    message: "Choose a shape:",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"]
}])
.then(response=> {

})/
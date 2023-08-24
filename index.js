const Circle = require("./lib/Circle")
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
    .prompt([{
        type: "input",
        message: "Enter text:",
        name: "text"
    },
    {
        type: "list",
        message: "Select text color:",
        name: "textColor",
        choices: ["blue", "red", "white"]
    },
    {
        type: "list",
        message: "Choose a shape:",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "list",
        message: "Choose the shape's color:",
        name: "shapeColor",
        choices: ["purple", "green", "orange"]
    }
    ])
    .then(response => {
        if (response.shape === "circle") {
            const circle = new Circle(response.text, response.textColor, response.shapeColor)
            console.table(circle)
            console.log(circle.render())
            
        } else if (response.shape === "square") {
            const square = new Square(response.text, response.textColor, response.shapeColor)
            console.table(square)
            console.log(square.render())
        } else {
            const triangle = new Triangle(response.text, response.textColor, response.shapeColor)
            console.table(triangle)
            console.log(triangle.render())
        }
    })
const inquirer = require('inquirer');
const fs = require('fs');
const shape = require("./shapes");
const Circle = require("./Circle");
const Triangle = require("./Triangle");
const Square = require("./Square");

inquirer
.prompt([
    {
        type: "input",
        name: "text",
        message: "Type in your initials:",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter primary color:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your desired shape:",
        choices: ["Circle", "Tirangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter your shape color:",
    }
])
.then((data) => { 
    let myShape
    if (data.shape==='Circle'){
        myShape = new Circle(data.shape,data.textColor,data.shapeColor,data.text)
    }else if (data.shape==='Triangle'){
        myShape = new Triangle(data.shape,data.textColor,data.shapeColor,data.text)
    }else if (data.shape==='Triangle'){
        myShape = new Square(data.shape,data.textColor,data.shapeColor,data.text)
    }
    const svg = 
    `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    `
    fs.writeFile('testLogo.svg', svg,(err) => { 
        if (err) {
            console.error(err);
        } else {
            console.log('SVG Logo Created');
        }
    });
});
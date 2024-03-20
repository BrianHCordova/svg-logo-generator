const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/cirlcle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

inquirer
.prompt([
    {
        type: "input",
        name: "text",
        message: "Type in your INITIALS:",
    },
    {
        type: "input",
        name: "textColor",
        message: "Choose your desired COLOR for initials:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your desired SHAPE:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter your desired shape COLOR:",
    }
])
.then((data) => { 
    let myShape
    if (data.shape==='Circle'){
        myShape = new Circle(data.shape,data.textColor,data.shapeColor,data.text)
    }else if (data.shape==='Triangle'){
        myShape = new Triangle(data.shape,data.textColor,data.shapeColor,data.text)
    }else if (data.shape==='Square'){
        myShape = new Square(data.shape,data.textColor,data.shapeColor,data.text)
    }
    const svg = 
    `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${myShape.render()}
    ${myShape.renderText()}
    `
    fs.writeFile('testLogo.svg', svg,(err) => { 
        if (err) {
            console.error(err);
        } else {
            console.log('SVG Logo Created');
        }
    });
});
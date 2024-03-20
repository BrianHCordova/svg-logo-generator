const Shapes = require('./shapes') 
//Class for Square
class Circle extends Shapes{
    constructor(shape,textColor,shapeColor,text){
    super(shape,textColor,shapeColor,text)    
    }
    render(){
        return` <circle cx="50%" cy="50%" r="50" fill="${this.shapeColor}"/>`
    }
    renderText() {
        return `<text x="45%" y="50%" fill = "${this.textColor}">${this.text}</text>`
    }
}
module.exports = Circle;
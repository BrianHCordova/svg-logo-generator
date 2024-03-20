const Shapes = require('./shapes') 
//Class for Square
class Square extends Shapes{
    constructor(shape,textColor,shapeColor,text){
    super(shape,textColor,shapeColor,text)    
    }
    render(){
        return `<rect x="35%" y="35%" width="70" height="70" fill="${this.shapeColor}"/>`
    }
    renderText() {
        return `<text x="47%" y="50%" fill = "${this.textColor}">${this.text}</text>`
    }
}
module.exports = Square;
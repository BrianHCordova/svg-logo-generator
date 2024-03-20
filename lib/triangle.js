const Shapes = require('./shapes') 
//Class for Triangle
class Triangle extends Shapes{
    constructor(shape,textColor,shapeColor,text){
    super(shape,textColor,shapeColor,text)    
    }
    render(){
        return`<polygon points="100, 30 200, 170 30, 182" fill="${this.shapeColor}"/>`
    }
    renderText() {
        return `<text x="45%" y="50%" fill = "${this.textColor}">${this.text}</text>`
    }
}
module.exports = Triangle;
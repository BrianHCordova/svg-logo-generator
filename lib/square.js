const Shapes = require('./lib/shapes') 
//Class for Square
class Square extends Shape{
    constructor(shape,textColor,shapeColor,text){
    super(shape,textColor,shapeColor,text)    
    }
    render(){
        return
    }
}
module.exports = Square;
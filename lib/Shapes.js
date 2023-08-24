//instead of putting parameters in the initial constructor, we are putting the parameters in the set()
//the set() is the assignment. We are assinging the value of the child inside the properties of the parent.

class Shape {
    constructor(text,textColor,shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }
    render(){
        return Error("Child must create its own render function")
    }
}
let susan = new Shape("bing bong", "yellow", "purple")
susan.setColor("")
console.table(susan)

module.exports = Shape
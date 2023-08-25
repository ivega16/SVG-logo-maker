const Shape = require("./Shapes.js")
const Triangle = require("./Triangle.js")
const Circle = require("./Circle.js")
const Square = require("./Square.js")

describe('Triangle', () => {
    test('should render shape according to correct color and points mapped', () =>{
        const triangle = new Triangle(text, textColor, shapeColor);
        triangle.setColor("purple")
        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);
    });
});

describe('Circle', () => {
    test('should render shape according to color and points mapped', () =>{
        const circle = new Circle(text, textColor, shapeColor);
        circle.setColor("green")
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);
    });
});

describe('Square', () => {
    test('should render shape according to color and points mapped', () =>{
        const square = new Square(text, textColor, shapeColor);
        square.setColor("orange")
        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="${shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);
    });
});

describe('Shape', (text, textColor, shapeColor) => {
//throws error if parent render is called
      test('should throw error if render() is called', () => {
        const shape = new Shape();
        const err = new Error('Child must implement a render() method.')
        expect(shape.render).toThrow(err);
      });
  });
let shapePrototype = {
    width: 10,
    height: 10,

    draw: function (shape) {

        console.log("shape is  " + shape)
    }
}

function Rectangle () {}

/* The prototype of Rectangle is shapePrototype, which means Rectangle should be cloned as shapePrototype */
Rectangle.prototype = shapePrototype

let rectObj = new Rectangle()

/* draw method is present on the rectObj as shapePrototype is attached to it __proto__ property */
rectObj.draw('rectangle')

function Triangle () {}
Triangle.prototype = shapePrototype
let tryObj = new Triangle();
tryObj.draw('triangle');
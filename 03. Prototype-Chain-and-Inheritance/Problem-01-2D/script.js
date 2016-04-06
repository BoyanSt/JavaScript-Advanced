if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

if (!Object.prototype.extends) {
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };
}

// holds point position
var Point = (function(){
    function Point(positionX, positionY){
        this._positionX = positionX;
        this._positionY = positionY;
    }
    Point.prototype.toString = function(){
        return '( X: ' + this._positionX + ' Y: ' + this._positionY + ' )';
    };
    return Point;
})();

//holds base shape
var Shape = (function(){
    function Shape(startPoint, color){
        this._startPoint = startPoint;
        this._color = color.toString(16);
    }
    Shape.prototype.toString = function(){
        return 'start point ' + this._startPoint.toString() + ', color: ' + this._color;
    };
    return Shape;
})();

var Circle = (function(){
    function Circle(point, color, radius){
        Shape.call(this, point, color);
        this._radius = radius;
    }
    Circle.extends(Shape);

    Circle.prototype.toString = function(){
        return 'Circle: ' + Shape.prototype.toString.call(this) + ', radius: ' + this._radius;
    };
    return Circle;
})();

var Rectangle = (function(){
    function Rectangle(point, color, width, height){
        Shape.call(this, point, color);
        this._width = width;
        this._height = height;
    }
    Rectangle.extends(Shape);

    Rectangle.prototype.toString = function(){
        return 'Rectangle: ' + Shape.prototype.toString.call(this) +
            ', width: ' + this._width + ', height: ' + this._height;
    };

    return Rectangle;
})();


var Triangle = (function () {
    function Triangle(firstPoint, secondPoint, thirdPoint, color){
        Shape.call(this, firstPoint, color);
        this._secondPoint = secondPoint;
        this._thirdPoint = thirdPoint;
    }
    Triangle.extends(Shape);

    Triangle.prototype.toString = function(){
        return 'Triangle: ' + Shape.prototype.toString.call(this) +
            ', second point ' + this._secondPoint.toString() +
            ', third point: ' + this._thirdPoint.toString();
    };

    return Triangle;
})();

var Line = (function () {
    function Line(startPoint, endPoint, color){
        Shape.call(this, startPoint, color);
        this._endPoint = endPoint;
    }
    Line.extends(Shape);
    Line.prototype.toString = function(){
        return 'Line: ' + Shape.prototype.toString.call(this) +
            ', end point ' + this._endPoint.toString();
    };
    return Line;
})();

var Segment = (function () {
    function Segment(startPoint, endPoint, color){
        Shape.call(this, startPoint, color);
        this._endPoint = endPoint;
    }
    Segment.extends(Shape);
    Segment.prototype.toString = function(){
        return 'Segment: ' + Shape.prototype.toString.call(this) +
            ', end point ' + this._endPoint.toString();
    };
    return Segment;
})();



var startPoint = new Point(20, 10);

var circle1 = new Circle(startPoint, 255, 23);
console.log(circle1.toString());

var rect1 = new Rectangle(startPoint, 180, 25, 85);
console.log(rect1.toString());

var secondPoint = new Point(100, 200),
    thirdPoint = new Point(50, 35);
var triangle1 = new Triangle(startPoint, secondPoint, thirdPoint, 187);
console.log(triangle1.toString());

var line1 = new Line(startPoint, thirdPoint, 42);
console.log(line1.toString());

var segment1 = new Segment(startPoint, secondPoint, 42);
console.log(segment1.toString());










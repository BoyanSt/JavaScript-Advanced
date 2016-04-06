if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

// holds point position
var Point = {
    init: function(positionX, positionY){
        this._positionX = positionX;
        this._positionY = positionY;
        return this;
    },
    toString: function(){
        return '( X: ' + this._positionX + ' Y: ' + this._positionY + ' )';
    }
};


var Shape = {
    init: function(startPoint, color){
        this._startingPoint = startPoint;
        this.color = color;
        return this;
    },

    toString: function(){
        return 'start point( X: ' + this._startingPoint._positionX + ' Y: ' + this._startingPoint._positionY + ' )';
    }
};

var Circle = Object.create(Shape);
Circle.init = function(startingPoint, radius, color){
    Shape.init.call(this, startingPoint, color);
    this._radius = radius;
};

Circle.toString = function(){
    return 'Circle: ' + Shape.toString.call(this) + ', radius: ' + this._radius;
};

var Rectangle = Object.create(Shape);
Rectangle.init = function(startingPoint, color, width, height){
    Shape.init.call(this, startingPoint, color);
    this._width = width;
    this._height = height;
};
Rectangle.toString = function(){
    return 'Rectangle: ' + Shape.toString.call(this) +
        ', width: ' + this._width + ', height: ' + this._height;
};

var Triangle = Object.create(Shape);
Triangle.init = function(startPoint, secondPoint, thirdPoint, color){
    Shape.init.call(this, startPoint, color);
    this._secondPoint = secondPoint;
    this._thirdPoint = thirdPoint;
};
Triangle.toString = function(){
    return 'Triangle: ' + Shape.toString.call(this) +
        ', second point ' + this._secondPoint.toString() +
        ', third point: ' + this._thirdPoint.toString();
};

var Line = Object.create(Shape);
Line.init = function(firstPoint, endPoint, color){
    Shape.init.call(this, firstPoint, color);
    this._endPoint = endPoint;
};
Line.toString = function(){
    return 'Line: ' + Shape.toString.call(this) +
        ', end point ' + this._endPoint.toString();
};

var Segment = Object.create(Shape);
Segment.init = function(firstPoint, endPoint, color){
    Shape.init.call(this, firstPoint, color);
    this._endPoint = endPoint;
};
Segment.toString = function(){
    return 'Segment: ' + Shape.toString.call(this) +
        ', end point ' + this._endPoint.toString();
};

var startPoint = Object.create(Point);
startPoint.init(20, 100);

var circle1 = Object.create(Circle);
circle1.init(startPoint, 58, 256);
console.log(circle1.toString());

var rect1 = Object.create(Rectangle);
rect1.init(startPoint, 180, 25, 85);
console.log(rect1.toString());

var secondPoint = Object.create(Point);
secondPoint.init(56, -25);
var thirdPoint = Object.create(Point);
thirdPoint.init(25, 126);

var triangle1 = Object.create(Triangle);
triangle1.init(startPoint, secondPoint, thirdPoint, 187);
console.log(triangle1.toString());

var line1 = Object.create(Line);
line1.init(startPoint, thirdPoint, 42);
console.log(line1.toString());

var segment1 = Object.create(Segment);
segment1.init(startPoint, secondPoint, 42);
console.log(segment1.toString());



class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

// Above is the code provided by HackerRank

//==========================================

Rectangle.prototype.area = function() {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(l){
        super(l);
        this.w = l;
        this.h = l;
    }
    area(){
        return super.area();
    }
}
// later, I found out i could solve this by skipping some code and changing parameters in super

Rectangle.prototype.area = function() {
    return this.w * this.h;
}

class Square extends Rectangle {
    constructor(l){
        super(l, l);
    }
}

//=========================================

// Down below is the code provided by HackerRank

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}
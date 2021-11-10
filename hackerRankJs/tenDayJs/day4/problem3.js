// Here is the solution

class Polygon{
    constructor(arr){
        this.arr = arr;
    }
    perimeter(){
        let lengthSum = this.arr.reduce((a, b) => a + b, 0);
        return lengthSum;
    }
}

// Down below is the code provided by HackerRank

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
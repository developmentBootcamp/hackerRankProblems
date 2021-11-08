'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//Here is the required solution code

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (this.length + this.width);
    this.area = this.length * this.width;
}
// Above is the solution code, and down below is the code from HackerRank, I included so that everyone can see how this problem is being solved
function main() {
    const a = +(readLine());
    const b = +(readLine());

    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}
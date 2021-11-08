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

// Above is the default code from HackerRank
// ======================================

// Here are 3 Solutions to solve this Problem

function getCount(objects) {
    let objCount = 0;
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y){
            objCount++;
        }
    }
    return objCount;
}

// OR

function getCount(objects) {
    let objCount = 0;
    for(let i in objects){
       if(objects[i].x == objects[i].y){
            objCount++;
       }
    }
    return objCount;
}

// OR

function getCount(objects) {
    let objCount = 0;
    objects.forEach(function(i, x, y){
        if(i.x == i.y){
             objCount++;
        }
    });
    return objCount;
}

// ======================================
// Down here is the default code from HackerRank to understand what is actually happening.

function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');

        objects.push({x: +(a), y: +(b)});
    }

    console.log(getCount(objects));
}
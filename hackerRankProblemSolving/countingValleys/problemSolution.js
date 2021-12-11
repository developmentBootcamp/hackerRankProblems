'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// Above is the code from HackerRank
//===============================================================================

// Here is the solution.

function countingValleys(steps, path) {
    let currLevel = 0;
    let valleys = 0;
    for(let i = 0; i < path.length; i++){
        if(path[i] === 'U'){
            currLevel += 1;
            if(currLevel === 0){
                valleys += 1;
            }
        }
        else {
            currLevel -= 1;
        }
    }
    return valleys;
}

// This solution passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

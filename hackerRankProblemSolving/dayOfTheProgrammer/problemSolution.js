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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

// Above is the code from HackerRank
//===============================================================================

// Here is the solution.

function dayOfProgrammer(year) {
    function isLeap(year){
        if( year % 4 !== 0 ){
            return false;
        } else if( year > 1918 && year % 100 === 0 && year % 400 !== 0 ){
            return false;
        }
        return true;
    }
    if( year === 1918 ){
        // As there are only 15 days in Fab 1918, It is a special case
        return "26.09.1918";
    } else
    if( isLeap(year) ){
        return "12.09." + year;
    } else{
        return "13.09." + year;
    }
}

// This solution passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
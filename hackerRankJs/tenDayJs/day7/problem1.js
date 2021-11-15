// Solution
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let re = /^([aeiou]).*\1$/ig;
    return re;
}
//========================================================================
// Down below is the code from HackerRank

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}
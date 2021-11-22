// Solution Code.
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
    let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-z]+$/i;
    return re;
}
//========================================================================
// Down below is the code from HackerRank

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(!!s.match(re));
}
function reverseString(s) {
    let strReverse;
    try{
        strReverse = s.split("").reverse().join("");
    } catch(err){
        console.log(err.message)
    }
    if(typeof strReverse === 'string'){
        console.log(strReverse);
    } else{
        console.log(s);
    }
}
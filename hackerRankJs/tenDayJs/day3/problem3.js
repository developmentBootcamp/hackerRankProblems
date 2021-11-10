function isPositive(a) {
   if(a > 0){
        throw new Error ("YES");
    } else if(a == 0){
        throw new Error ("Zero Error");
    } else if(a < 0){
        throw new Error ("Negative Error");
    }
}
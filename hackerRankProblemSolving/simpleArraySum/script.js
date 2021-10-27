function simpleArraySum(ar) {
  let sum = 0;

   for(let i = 0; i < ar.length; i++) {
      //  sum = sum + ar[i]; or
       sum = ar.reduce((a, b) => a + b);
   }

   return sum;
}
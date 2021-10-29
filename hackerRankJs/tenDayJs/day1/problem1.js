function factorial(n){
  // according to Constraints
  if (n >= 1 && n <= 10){
      return n * factorial(n-1);
  }
  return 1;
}
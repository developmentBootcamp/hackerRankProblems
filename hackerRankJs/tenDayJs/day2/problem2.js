function getLetter(s) {
  let letter;
  switch (true) {
      case 'aeiou'.includes(s[0]):
          letter = 'A';
          break;
      case 'bcdfg'.includes(s[0]):
          letter = 'B';
          break;
      case 'hjklm'.includes(s[0]):
          letter = 'C';
          break;
      default:
          letter = 'D';
  }
  return letter;
}

// Can also be solved with RegExp test() Method

function getLetter(s) {
  let letter;
  switch (true) {
      case /^[aeiou]/.test(s):
          letter = "A";
          break;
      case /^[bcdfg]/.test(s):
          letter = "B";
          break;
      case /^[hjklm]/.test(s):
          letter = "C";
          break;
      case /^[npqrstvwxyz]/.test(s):
          letter = "D";
          break;
  }
  return letter;
}

// Can also be solved with has() Method

function getLetter(s) {
  let letter;
  // Write your code here
  var mySet1 = new Set(['a','e','i','o','u']);
  var mySet2 = new Set(['b','c','d','f','g']);
  var mySet3 = new Set(['h','j','k','l','m']);
  switch(true){
      case mySet1.has(s[0]):
          letter='A';
          break;
      case mySet2.has(s[0]):
          letter='B';
          break;
      case mySet3.has(s[0]):
          letter='C';
          break;
      default:
          letter='D';
  }
  return letter;
}
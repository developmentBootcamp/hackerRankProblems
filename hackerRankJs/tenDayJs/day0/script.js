function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const intSum = firstInteger + parseInt(secondInteger);
  // const intSum = firstInteger + Number(secondInteger);
  
  const firstDecimal = 4.0;
  const decSum = firstDecimal + parseFloat(secondDecimal);
  // const decSum = firstDecimal + Number(secondDecimal);
  
  const firstString = 'HackerRank ';
  const strSum = firstString + secondString;
  
  console.log(intSum);
  console.log(decSum);
  console.log(strSum);
}


function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();
  
  performOperation(secondInteger, secondDecimal, secondString);
}
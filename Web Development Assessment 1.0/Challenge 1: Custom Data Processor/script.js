function processData(data, operationFn){
  if(data.length <= 5){
    return data;
  }else{
    return operationFn(data);
  }
}

function squareNumbers(array){
  return array.map(num => num * num);
}

function filterEvens(array){
  return array.filter(num => num % 2 == 0);
}

function sumNumbers(array){
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

console.log(processData([2, 4, 6, 8, 10, 12], squareNumbers));
console.log(processData([2, 4, 3, 8, 15, 12], filterEvens));
console.log(processData([2, 4, 6, 8, 10, 12], sumNumbers));
console.log(processData([2, 4, 6, 8, 10], sumNumbers));
function forLoop (array) {
  for ( var i = 0; i < 25; i++) {
    array.push(console.log('I am ${i} strange loops.'));
  }
  return array;
}

function whileLoop(n){

  while (n > 0){
  
  console.log(--n);
  if (n === 0){
  
  return 'done';
  }
  }
}
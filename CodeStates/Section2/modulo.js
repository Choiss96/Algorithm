function modulo(num1, num2) {
    if(num1 === 0) return 0;
    if(num2 === 0) return 'Error: cannot divide by zero';
    let num_2 = 0;
    
    for(let i = 1; i * num2 <= num1; i++) {
      num_2 = num2 * i;
    }
  
    return num1 - num_2;
  }
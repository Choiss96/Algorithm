function computeWhenDouble(interestRate) {
    let result = 0;
    let principal = 1;
    let newInterestRate = (1 + (interestRate / 100));
  
    for(let i = 1; principal < 2; i++){
      principal = principal * newInterestRate;
      result = i;
    }
  
    return result;
  }
  
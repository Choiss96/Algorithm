function computeSquareRoot(num) {
    let result = 1;
    let count = 1;
    let fit_count = 1;
  
    while(1) {
      if(fit_count * fit_count > num) {
        break;
      } else if(fit_count * fit_count === num){
        return fit_count;
      }
      fit_count++;
    }
    
    while(count <= 3) {
      result = (result * result + num) / (2 * result);
      count++;
    }
    return Number(result.toFixed(2));
  }
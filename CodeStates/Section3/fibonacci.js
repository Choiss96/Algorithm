function fibonacci(n) {
    let memo = [0, 1];
  
    const aux = (n) => {
      if(memo[n] !== undefined) return memo[n];
      
      memo[n] = aux(n-1) + aux(n-2);
      return memo[n];
    }
  
    return aux(n);
  }
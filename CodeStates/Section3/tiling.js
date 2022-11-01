let tiling = function (n) {
    const memo = [0, 1, 2];
  
    // 재귀를 위한 보조 함수(auxiliary function)을 선언)
    const aux = (size) => {
      // 이미 해결한 문제는 풀지 않는다.
      if (memo[size] !== undefined) return memo[size];
      if (size <= 2) return memo[n];
      memo[size] = aux(size - 1) + aux(size - 2);
      return memo[size];
    };
    return aux(n);
  };
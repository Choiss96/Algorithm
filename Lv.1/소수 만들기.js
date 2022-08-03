function isPrime(x) {
    if(x === 1) {
        return false;
    } else {
        for(let i = 2; i < x; i++) {
            if(x % i === 0) {
                return false;
            }
        }
        return true;
    }
}
 
function solution(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let sum_n = nums[i] + nums[j] + nums[k];
                if(isPrime(sum_n)) {
                    result++;
                }
            }
        }
    }
    
    return result;
}
function solution(nums) {
    let answer = 0;
    let num_div = nums.length/2;
    let num_copy = nums.slice(0);
    
    for(let i = 0; i < num_copy.length; i++) {
        for(let j = i+1; j < num_copy.length; j++) {
            if(num_copy[i] === num_copy[j]) {
                num_copy.splice(j, 1);
                j--;
            }
        }
    }
    
    if(num_copy.length > num_div) {
        answer = num_div;
    }else {
        answer = num_copy.length;
    }
    
    return answer;
}
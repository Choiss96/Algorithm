function solution(lottos, win_nums) {
    let count = 0;
    let count_zero = 0;
    let result = [];
    
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0){
            count_zero++;
        }
        for(let j = 0; j < win_nums.length; j++){
            if(lottos[i] === win_nums[j]){
                count++;            
            }
        }
    }
    let lottos_rank = [6, 6, 5, 4, 3, 2, 1]
    
    result[0] = lottos_rank[count+count_zero];
    result[1] = lottos_rank[count];                                                              
    
    return result;
}
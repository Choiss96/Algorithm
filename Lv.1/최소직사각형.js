function solution(sizes) {
    let answer = 0;
    let max_w = 0;
    let max_y = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a-b);
        if(sizes[i][0] > max_w) max_w = sizes[i][0];
        if(sizes[i][1] > max_y) max_y = sizes[i][1];
    }
    
    return max_w * max_y;
}
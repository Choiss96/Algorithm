function solution(dartResult) {
    let arr = [];
    let dartResultArr = [];
    let count = 0; 
    
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(Number(dartResult[i])) && !isNaN(Number(dartResult[i+1]))) {
            dartResultArr.push(dartResult[i] + dartResult[i+1]);
            i++;
        } else {
            dartResultArr.push(dartResult[i]);
        }
    }
    
    for(let i = 0; i < dartResultArr.length; i++) {
        if(dartResultArr[i] === 'S') {
            arr.push(Math.pow(dartResultArr[i-1], 1));
            count++;
        } else if(dartResultArr[i] === 'D') {
            arr.push(Math.pow(dartResultArr[i-1], 2));
            count++;
        } else if(dartResultArr[i] === 'T') {
            arr.push(Math.pow(dartResultArr[i-1], 3));
            count++;
        } else if(dartResultArr[i] === '*') {
            arr[count-2] = arr[count-2] * 2;
            arr[count-1] = arr[count-1] * 2;
        } else if(dartResultArr[i] === '#') {
            arr[count-1] = arr[count-1] * -1;
        } else {
            continue;
        }
    }
    
    return result = arr.reduce((acc, cur) => {
        return acc + cur;
    });
}
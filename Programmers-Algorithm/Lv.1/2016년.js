function solution(a, b) {
    let whatday = {
        0: 'THU', 1: 'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED',
    }
    let sum = 0;
    
    for(let i = 1; i < a; i++) {
        if(i === 4 || i === 6 || i === 9 || i === 11){
            sum += 30;
        }else if(i === 2){
            sum += 29;
        }else {
            sum += 31;
        }
    }
    
    sum += b;
    
    return whatday[sum%7];
}
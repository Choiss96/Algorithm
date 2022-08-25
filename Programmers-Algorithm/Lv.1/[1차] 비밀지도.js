function solution(n, arr1, arr2) {
    let answer = [];
    let arr = [];
    
    // arr1, arr2 정사각형 변의 길이에 맞게 이진수 변경
    for(let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2);
        arr2[i] = arr2[i].toString(2);
        for(let j = 0; j < arr1.length; j++) {
            if(arr1[i].length < n) arr1[i] = `0${arr1[i]}`;
            if(arr2[i].length < n) arr2[i] = `0${arr2[i]}`;
        }
    }
    
    // 지도 완성 시키기
    for(let i = 0; i < arr1.length; i++) {
        let a = [];
        for(let j = 0; j < arr1[i].length; j++) {
            if(arr1[i][j] === "1" || arr2[i][j] === "1") {
                a.push('#');
            } else a.push(' ');
        }
        arr.push(a.join(''));
    }
    
    return arr;
}
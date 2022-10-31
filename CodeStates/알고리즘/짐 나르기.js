function movingStuff(stuff, limit) {
    let twoStuff = 0;
    // 짐을 무게순으로 오름차순 정렬
    let sortedStuff = stuff.sort((a, b) => a - b);
    // 가장 가벼운 짐의 인덱스
    let leftIdx = 0;
    // 가장 무거운 짐의 인덱스
    let rightIdx = sortedStuff.length - 1;
    while(leftIdx < rightIdx) {
        // 가장 가벼운 짐과 무거운 짐의 합이 limit 보다 작거나 같으면 2개를 한번에 나를 수 있다
        if(sortedStuff[leftIdx] + sortedStuff[rightIdx] <= limit) {
        // 다음 짐을 확인하기 위해 가장 가벼운 짐과 무거운 짐을 가리키는 인덱스를 옮겨주고
        // 한번에 2개 옮길 수 있는 개수를 +1 해준다   
            leftIdx++;
            rightIdx--;
            twoStuff++;
            // [30 40 50 60 80 90 120 130], 140
  
        } else {
            // 위 조건에 맞지 않는 경우는 한번에 한 개만 나를 수 있는 경우이기 때문에
            // 가장 무거운 짐의 인덱스만 옮겨준다
                rightIdx--;
        }
    }
    // 전체 짐의 개수에서 한번에 2개를 나를 수 있는 경우를 빼 주면 총 필요한 박스의 개수를 구할 수 있다
    return stuff.length - twoStuff;
  }
  
  // 안 풀린 코드
  // function movingStuff(stuff, limit) {
  //   let count = 0;
  //   let sort_stuff = stuff.sort((a, b) => b - a);
  
  //   while(sort_stuff.length > 1) {
  //     for(let i = 1; i < sort_stuff.length; i++) {
  //       if(i === sort_stuff.length -1) {
  //         count++;
  //         sort_stuff.shift();
  //         break;
  //       }
  //       // [167 103 73 60 42 25]
  //       if(sort_stuff[0] + sort_stuff[i] <= limit) {
  //         count++;
  //         sort_stuff.splice(i, 1);
  //         sort_stuff.shift();
  //         break;
  //       }
  //     }
  //   }
  
  //   return count;
  // }
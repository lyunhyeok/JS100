// loop 를 이용하여 2가지의 경우의수를 구분 후 각 배열의 항목을 비교하는 방법

function solution(s1, s2) {
    var count = 0 ;
    
    if(s1.length <= s2.length){
        for(let i = 0; i < s1.length; i++){
            for(let j = 0; j < s2.length; j++){
                if(s1[i] === s2[j]) count++;
            }
        }
    }
    else{
        for(let i = 0; i < s2.length; i++){
            for(let j = 0; j < s1.length; j++){
                if(s2[i] === s1[j]) count++;
            }
        }
    }
    
    return count;
}




// fillter 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
// include 메서드는 배열이 특정 요소를 가지고 있는지 확인함

function solution(s1, s2) {
    // s1의 element를 s2에 include되었다면 true를 반환하고 intersection 배열에 추가한다
    const intersection = s1.filter((x) => s2.includes(x));
    // intersection 배열의 길이 = s1과 s2가 공통으로 가지고 있는 배열의 값의 갯수
    return intersection.length;
}

// 
function solution(s1, s2) {
    // 전개구문 (spread syntax)을 사용
    const concat = [...s1, ...s2];
    const setConcat = Array.from(new Set(concat));
  
    return concat.length - setConcat.length;
  }
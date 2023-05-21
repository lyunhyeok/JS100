// 숫자인 order을 문자열로 변경
// 변경된 문자열 order을 배열로 변경
// filter 함수를 통해 item 비교, 3,6,9만 추출
// 배열의 길이를 반환

function solution(order) {
    var answer = order + '';
    answer = Array.from(answer).filter(item => item === '3' || item === '6' || item === '9');
    
    return answer.length;
}


// has 메서드 공부

function solution(order) {
    const mySet = new Set([3,6,9]);
    return String(order).split('')
                        .filter(num => mySet.has(Number(num)))
                        .length;
}
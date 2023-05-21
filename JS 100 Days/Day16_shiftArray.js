// direction 이 left 일 경우 배열 맨 뒤에 맨 앞의 변수 넣기
// right일 경우 배열 맨뒤의 값을 맨 앞의 인덱스에 넣기
// 제거
// 1. pop -> 맨 뒤 제거
// 2. shift -> 맨 앞 제거
// 3. splice -> 특정 위치(Index 값 설정 가능)의 값 제거
// 추가
// 1. push -> 맨 뒤 추가
// 2. unshift -> 맨 앞 추가
// 3. splice -> 특정 위치(Index 값 설정 가능)의 값 추가

function solution(numbers, direction) {
    if(direction === 'left')
        numbers.push(numbers.shift());
    else
        numbers.unshift(numbers.pop());
        //numbers.splice(0,0,answer);
    
    return numbers;
}

// 위의 구문을 3항 연산자로 변경
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}
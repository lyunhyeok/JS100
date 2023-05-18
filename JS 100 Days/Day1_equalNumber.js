// 숫자 비교
// === type까지 비교해준다.
// 같으면 1 return 틀리면 -1 return

function equalNumber(num1, num2) {
    if(num1===num2) return 1
    else return -1;
}

// 삼항 연산자 이용
// condition ? answer1 : answer2;
function equalNumber2(num1, num2) {
    var answer = (num1===num2) ? 1:-1;
    return answer;
}
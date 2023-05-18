// 인수 num1 과 num2를 받아와 나눗셈의 몫을 구하는 함수
//parseInt() -> 실수를 버려 정수만 출력
//Math.floor() -> 숫자를 내림

function getQuotient(num1, num2){
    return parseInt(num1 / num2)
  }
  
  var answer = getQuotient(7,2);
  console.log(answer);
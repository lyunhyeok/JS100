// set 객체는 중복되지 않은 유일한 값들의 집합
// 동일한 값을 중복하여 포함 X / 요소 순서에 의미가 없음 / 인덱스로 요소에 접근 X 

// my_string 의 값을 가진 set 객체를 생성, sperad를 이용하여 배열로 변환 후 join을 이용하여 문자열로 출력
function solution(my_string) {
    return [...new Set(my_string)].join('');
}


// indexOf 메서드 이용

function solution(my_string) {
    var answer = '';
    // my_string 인자를 하나씩 비교하는 루프
    for(let i = 0; i < my_string.length; i++){
        // answer이 my_string의 값을 갖게되면서 중복되는 값은 1로 됨
        if(answer.indexOf(my_string[i]) === -1)
          answer += my_string[i];
    }

    return answer;
}


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
 

// indexOf를 이용하여 bison 값을 가진 최초의 인덱스

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4


// 값을 찾지 못하면 -1 반환

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// 정수 i 부터 j까지 범위 안에 k 숫자가 몇번 나오는가
// 핵심 포인트 : i와 j사이의 정수를 문자열로 나열
// 나는 문자열을 다시 글자단위로 배열로 전환
// 배열을 k정수와 비교

function solution(i, j, k) {
    let s = '';
    for(;i<=j;i++)
        s += i;
    
    return s.split(k).length-1;
}


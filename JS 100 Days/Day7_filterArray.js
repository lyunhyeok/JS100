// loop 사용

function filterArray(array, height) {
    let answer = 0;
    for(let i =0; i < array.length; i++)
        if(array[i] > height) answer++;
    
    return answer;
}


// filter 사용
// filter 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환


function filterArray(array, height) {
    //filter 메서드로 item 이 height의 내용과 비교
    //true를 반환하면 요소를 유지, false를 반환하면 요소를 지움
    var answer = array.filter(item => item > height);
    return answer.length;
}
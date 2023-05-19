// filter 메서드를 이용하여 객체 비교

function filterArray2(array, n) {
    var answer = array.filter(item=>item===n);
    return answer.length;
}

//loop

function filterArray2(array, n) {
    let answer = 0;
    for(let i = 0; i<array.length; i++)
      if(n===array[i]) answer++;

    return answer;
}
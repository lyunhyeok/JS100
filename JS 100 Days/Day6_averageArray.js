// 루프이용

function averageArray1(numbers) {
    let answer = 0;
    let i = 0;
    while(numbers[i]){
        answer += numbers[i]
        i++;
    }
    return answer / numbers.length;
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function averageArray2(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}

const averageArray3 = (numbers) => numbers.reduce((a, c) => a += c, 0) / numbers.length
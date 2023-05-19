// for of 형식

function mathOddEven(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1     // 2로나눈 나머지를 0과 1 (짝수/홀수)로 구분, 기발하다.
    }

    return answer;
}


function mathOddEven(num_list) {
    var answer = [];
    var t1 = 0;
    var t2 = 0;
    for (var i = 0; i<num_list.length; i++){
        if(num_list[i]%2 === 0)
            t1++;
        else
            t2++;
    }
    
    answer = [t1, t2];
    
    return answer;
}
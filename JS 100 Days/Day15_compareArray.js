// 가위는 2 바위는 0 보는 5 라고 주어졌을때, 주어진 가위바위보 문자열을 이기는 문자열을 리턴
// 실수했던 점이 === 비교 연산자를 이용하여 비교하였을때 상수와 문자의 값이 다르다는 것을 인지못했음
// arrRSP 배열에 들어가있는 숫자는 문자열이기에 비교를 할때 === '' 를 이용하여 문자열로 비교하여야했음.

function solution(rsp) {
    var arrRSP = Array.from(rsp);
    var answer = '';
    
    for(let i = 0; i < arrRSP.length; i++){
        if(arrRSP[i]==='2')
            answer += "0";
        else if(arrRSP[i]==='0')
            answer += '5'
        else if(arrRSP[i]==='5')
            answer += '2'
    }
    
    return answer;
}


function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}

// 삼항연산자

function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}
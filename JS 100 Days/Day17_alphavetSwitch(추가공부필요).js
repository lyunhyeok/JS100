// Switch 활용

function solution(age) {
    // 숫자를 배열로 변경
    var answer = age + '';
    var answer2 = [];
    
    answer = Array.from(answer);
    for(let i = 0; i < answer.length; i++){
        switch(answer[i]){
            case '0' : 
            answer2 += 'a';
            break;
            
            case '1' : 
            answer2 += 'b';
            break;
            
            case '2' : 
            answer2 += 'c';
            break;
            
            case '3' : 
            answer2 += 'd';
            break;
                
            case '4' : 
            answer2 += 'e';
            break;
                
            case '5' : 
            answer2 += 'f';
            break;
            
            case '6' : 
            answer2 += 'g';
            break;
            
            case '7' : 
            answer2 += 'h';
            break;
            
            case '8' : 
            answer2 += 'i';
            break;
            
            case '9' : 
            answer2 += 'j';
            break;
        }
            
    }
    
    return answer2;
}


// 문자열 인덱스 ?

function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])
      .join("");
  }
function compareArray(my_string, letter) {
    
    // 문자열을 배열로 변환후 filter 매서드를 사용하여 item 과 letter을 비교하여 letter과 다른 item만 배열에 삽입
    var answer = Array.from(my_string).filter(item=> item !=letter);
    
    // 배열을 문자열로변형
    return answer.join("");
    
}


function compareArray(my_string, letter) {
    // split 메서드로 letter을 인자로 구분하여 배열을 만듬
    const answer = my_string.split(letter).join('')
    return answer;
}
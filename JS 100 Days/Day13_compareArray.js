function compareArray(my_string, letter) {
    
    // 문자열을 배열로 변환후 filter 매서드를 사용하여 item 과 letter을 비교하여 letter과 다른 item만 배열에 삽입
    var answer = Array.from(my_string).filter(item=> item !=letter);
    
    // 배열을 문자열로변형
    return answer.join("");
    
}
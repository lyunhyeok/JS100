function solution(array, n) {
    // sort를 해주어서 숫자를 오름차순으로 정렬한다
    array = array.sort((a,b) => a-b)
    // 첫 숫자를 비교할 무한대
    var infinityNumber = Infinity;
    //결과값 저장될 곳
    var result = 0;
    
    for(let i of array){
        if(Math.abs(n-i) < infinityNumber){
            infinityNumber = Math.abs(n-i);
            result = i;
        }
            
    }
    
    return result;
}
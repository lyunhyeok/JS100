function solution(n) {
    var i = 1;
    
    while(i){
        var temp = 1;
        for(var j = 1; j <= i; j++)
            temp *= j;
        
        if(temp > n)
            return i-1;
        else
            i++;
    }
}

function solution(n) {
    for(let i = 1, v = 1; true; v *= ++i) if(v > n)
    return --i;
}


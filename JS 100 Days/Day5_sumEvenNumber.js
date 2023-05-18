// n 정수가 주어졌을때 n 보다 작은 짝수의 합을 구하기

function sumEvenNumber(n) {

    let temp = 0;

    while(n>0){
        if(n%2==0) temp += n;
        n--;
    }
        
    return temp;
}

function sumEvenNumber2(n) {

    let temp = 0;

    for(let i = 0; i <= n; i++)
        if(i%2==0) temp += i;
    
    return temp;
}

//수열을 이용

function sumEvenNumber3(n) {

    let temp = Math.floor(n/2);
    return temp*(temp+1);
}
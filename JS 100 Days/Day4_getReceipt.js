// 양꼬치 n개 만큼 먹었으며 10개당 음료수 k가 1개 서비스
// 양꼬치는 12000원 음료수는 2000원일때 금액을 계산하는 식을 쓰시오

function getReceipt(n, k) {
    var service = parseInt(n/10);
    if(k-service <= 0)
        return n*12000;
    else
        return (n*12000) + (k-service)*2000;
}
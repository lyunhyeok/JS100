// 예각, 직각, 둔각, 평각에 따른 다른 숫자 리턴

function sortAngle(angle) {
    if (0<angle && angle<90){
        return 1;
    }else if(angle == 90){
        return 2;
    }else if(90<angle && angle<180){
        return 3;
    }else if(angle == 180){
        return 4;
    }
}

//삼항 연산자를 이용해서 정리도 가능하다

function sortAngle2(angle) {
    return 0<angle && angle<90 ? 1 : angle==90 ? 2 : angle<180 ? 3 : angle == 180 ? 4 : 5 ;
}
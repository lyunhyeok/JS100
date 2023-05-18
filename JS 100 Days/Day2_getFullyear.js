// age를 입력 받았을때 출생년도를 리턴하는 함수

function getYear(age) {
    return (2022-age+1);
}

// Data().getFullYear() 메서드를 이용하여 올해로 사용


function getYear2(age) {
    return new Date().getFullYear() - age + 1;
}
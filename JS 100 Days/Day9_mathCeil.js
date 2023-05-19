// 피자7조각으로 나뉘는데 n명이 1조각이상 먹기위한 피자갯수 구하기
// n을 7로 나누어서 올림을하면 충분한 양이된다
// Math.ceil() 메서드는 소수점에서 올림을 하여 정수를 만들어준다.

function mathCeil(n) {
    return Math.ceil(n/7);
}
// before의 값의 순서를 바꾸어 after을 만들 수 있으면 1을 리턴 없으면 0 리턴

// before은 문자열 이므로 split메서드를 사용하여 '' 글자별로 잘라서 배열에 담음
// 배열이 되면 sort 메서드를 사용할 수 있으므로 배열의 순서를 적절히 바꿈
// join으로 문자열로 만들어줌
// 마찬가지로 after도 같은 방식으로 만들어준 후 두 개의 값이 같으면 1을 리턴 다르면 0 리턴

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
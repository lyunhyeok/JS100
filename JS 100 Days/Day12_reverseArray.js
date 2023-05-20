function solution(my_string) {
    // 문자열을 배열로 만들어주면 메서드를 사용하여 뒤집기가 편함
      return Array.from(my_string).reverse().join("");
    }

//Aray.from 혹은 Split 사용하여 배열로 변형
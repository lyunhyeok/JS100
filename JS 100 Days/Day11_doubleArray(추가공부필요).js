function doubleArray1(numbers) {
    for(let i = 0; i < numbers.length; i++)
        numbers[i] *= 2;
    
    return numbers;
}

// reduce 메서드 이용

function doubleArray2(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
function solution(bin1, bin2) {
    let result = 0;
    let num1 = parseInt(bin1, 2);
    let num2 = parseInt(bin2, 2);
    
    result = num1 + num2
    return result.toString(2);
}
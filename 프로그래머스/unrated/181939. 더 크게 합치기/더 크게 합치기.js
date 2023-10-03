function solution(a, b) {
    let numA = a.toString();
    let numB = b.toString();
    if(parseInt(numA + numB)<parseInt(numB + numA)) return parseInt(numB + numA)
    else return parseInt(numA + numB)
}
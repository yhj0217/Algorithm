function solution(a, b) {
    let answer = 0;
    let strA = a.toString();
    let strB = b.toString();
    
    if(parseInt(strA + strB) >= 2 * a * b) return parseInt(strA + strB)
    else return 2 * a * b;
}
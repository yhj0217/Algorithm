function solution(myString, pat) {
    let str = myString.toLowerCase();
    let letter = pat.toLowerCase();
    
    if(str.includes(letter) == true) return 1
    else return 0
}
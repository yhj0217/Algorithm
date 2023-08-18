function solution(x) {
    let str = String(x).split("").map(a => Number(a));
    let sum = 0;
    for ( let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    if(x%sum == 0){
        return true;
    }
    else
        return false;
}
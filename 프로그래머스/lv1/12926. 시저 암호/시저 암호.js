function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        if(s[i] === " ") answer += " ";
        else {
            let ascii = s.charCodeAt(i);
            if(ascii <= 90) {
                ascii += n;
                if(ascii > 90) ascii -= 26;
            }
            else {
                ascii += n;
                if(ascii > 122) ascii -= 26;
            }
            answer += String.fromCharCode(ascii);
        }
    }
    return answer;
}
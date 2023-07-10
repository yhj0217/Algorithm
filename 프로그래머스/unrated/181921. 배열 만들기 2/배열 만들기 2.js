function solution(l, r) {
    var answer = [];

    for(let i=l; i<=r; i++){
        let str = i.toString();
        let tf = true;
        for(let j=0; j<str.length; j++){
            if(str[j] !== "0" && str[j] !== "5"){
                tf = false;
                break;
            }
        }

        if(tf) answer.push(i);
    }

    if(answer.length == 0) answer.push(-1);

    return answer;
}
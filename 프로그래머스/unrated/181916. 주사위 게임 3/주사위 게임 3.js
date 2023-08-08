function solution(a, b, c, d) {
    let arr = [a,b,c,d];    
    let j = [];
    let answer = 0;
    const result = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    let srted = [];
    for(let i in result) {
        srted.push([i,result[i]]);
    }
    srted.sort((a,b)=>b[1] - a[1])
    if(srted.length == 1)
        return 1111 * parseInt(srted[0][0]);
    
    if(srted.length == 2){
        if(srted[0][1] == srted[1][1]){
            return (parseInt(srted[0][0]) + parseInt(srted[1][0])) * Math.abs(parseInt(srted[0][0]) - parseInt(srted[1][0]));
        }
        else if(srted[0][1] > srted[1][1])
            return (10 * parseInt(srted[0][0]) + parseInt(srted[1][0])) ** 2;
        else
            return (10 * parseInt(srted[1][0]) + parseInt(srted[0][0])) ** 2;
        }
    if(srted.length == 3)
        
        return parseInt(srted[1][0]) * parseInt(srted[2][0]);
                                           
    if(srted.length == 4)
        for (let i = 0; i<srted.length; i++){
            j.push(srted[i][0]);
        }
    return Math.min(...j);
}
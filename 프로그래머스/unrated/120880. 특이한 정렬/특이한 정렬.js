function solution(numlist, n) {
    const answer = numlist.sort((a,b)=>{
        const [aGap, bGap] = [Math.abs(a-n), Math.abs(b-n)];
        if(aGap === bGap) return b-a
        return aGap-bGap
    })
    return answer;
}
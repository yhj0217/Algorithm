function solution(array) {
    var answer = 0;
    let cnt = array.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
    let srt = Object.keys(cnt).sort((a,b)=>cnt[b] - cnt[a])
    if(cnt[srt[0]] === cnt[srt[1]])
        return -1;
    else
        return Number(srt[0])
}
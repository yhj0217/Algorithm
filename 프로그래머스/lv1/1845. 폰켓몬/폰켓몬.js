function solution(nums) {
    let cnt = nums.length/2;
    let pkm = [...new Set(nums)];
    if(cnt<pkm.length)
        return cnt;
    else
        return pkm.length
}
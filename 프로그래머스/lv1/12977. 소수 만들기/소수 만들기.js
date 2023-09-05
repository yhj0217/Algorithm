function solution(nums) {
    let answer = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(primeNum(sum)) answer += 1;
            }
        }
    }
    
    return answer;
}

function primeNum(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return sum
}
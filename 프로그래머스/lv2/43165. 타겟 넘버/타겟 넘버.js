function solution(numbers, target) {
    let answer = 0;
    
    function dfs(num, index){
        
        if(index === numbers.length){
            if(num === target) answer++;
            return answer;
        } 
        
        dfs(num + numbers[index], index + 1);
        dfs(num - numbers[index], index + 1);      
              
        
    }
    dfs(0,0);
    
    return answer;
}
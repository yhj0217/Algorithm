def solution(word):
    answer = 0
    arr = []
    alp = 'AEIOU'
    
    def dfs(cnt, x):
        if cnt == 5:
            return
        for i in range(len(alp)):
            arr.append(x + alp[i])
            dfs(cnt+1, x + alp[i])
            
    dfs(0,"")
    
    return arr.index(word)+1
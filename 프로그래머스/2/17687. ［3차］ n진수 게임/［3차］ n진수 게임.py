def solution(n, t, m, p):
    answer = ''
    
    def convert(n,k):
        num = '0123456789ABCDEF'
        if k==10:
            return str(n)
        else:
            if n < k:
                return num[n]
            else:
                return str(convert(n // k, k)) + num[n % k]
    
    nums = ''
    
    for i in range(t*m):
        if i == 0:
            nums += '0'
        else:
            nums += convert(i,n)
            
    for i in range(p-1, t*m, m):
        answer += nums[i]
    
    return answer
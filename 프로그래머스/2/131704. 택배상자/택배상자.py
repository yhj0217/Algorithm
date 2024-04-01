def solution(order):
    answer = 0
    sub = []
    now = 1
    
    for i in order:
        while now <= i:
            if now == i:
                answer += 1
                now += 1
                break
            else:
                sub.append(now)
                now += 1
                
        while sub and sub[-1] == i:
            sub.pop()
            answer += 1
            break
            
        if sub and sub[-1] > i:
            break
    
    return answer
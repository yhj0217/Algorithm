def solution(x, y, n):
    answer = 0
    que = []
    que.append((y,0))
    
    while que:
        now = que.pop(0)
        if now[0] == x:
            return now[1]
        if now[0] > x:
            if now[0] % 3 == 0:
                que.append((now[0]/3, now[1]+1))
            if now[0] % 2 == 0:
                que.append((now[0]/2,now[1]+1))
            que.append((now[0]-n,now[1]+1))
    return -1
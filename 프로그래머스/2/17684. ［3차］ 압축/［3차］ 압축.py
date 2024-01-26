def solution(msg):
    answer = []
    alp = {chr(i+64): i for i in range(1, 27)}
    idx = 27
    w, c = '', ''
    
    for i in msg:
        c = i
        
        if w + c in alp:
            w = w + c
        else:
            answer.append(alp[w])
            alp[w+c] = idx
            idx += 1
            w = c
    if w:
        answer.append(alp[w])
        
    return answer
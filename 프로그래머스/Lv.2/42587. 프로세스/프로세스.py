from collections import deque

def solution(priorities, location):
    answer = 0
    deq = deque(priorities)
    
    while deq:
        first = max(deq)
        temp = deq.popleft()
        if first > temp:
            deq.append(temp)
            location -= 1
            if location < 0:
                location = len(deq) - 1
        elif first == temp:
            answer += 1
            location -= 1
            if location < 0:
                break
            
    return answer
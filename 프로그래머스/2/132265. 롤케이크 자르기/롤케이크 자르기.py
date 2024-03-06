from collections import Counter

def solution(topping):
    answer = 0
    top = Counter(topping)
    rest = set()
    
    for i in topping:
        top[i] -= 1
        rest.add(i)
        if top[i] == 0:
            top.pop(i)
        if len(top) == len(rest):
            answer += 1
    return answer
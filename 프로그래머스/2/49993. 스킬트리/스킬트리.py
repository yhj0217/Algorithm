def solution(skill, skill_trees):
    answer = 0
    
    for i in skill_trees:
        alp =  ''
        for j in i:
            if j in skill:
                alp += j
        if alp == skill[0:len(alp)]:
            answer += 1
    return answer
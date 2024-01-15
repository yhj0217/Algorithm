from itertools import permutations

def solution(k, dungeons):
    answer = 0
    for i in permutations(dungeons):
        use = k
        count = 0
        for dungeon in i:
            if use >= dungeon[0]:
                count += 1
                use -= dungeon[1]
        answer = max(answer, count)
    return answer
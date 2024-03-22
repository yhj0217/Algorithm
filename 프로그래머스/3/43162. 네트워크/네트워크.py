def dfs(computers, visited, start):
    stack = [start]
    while stack:
        j = stack.pop()
        if not visited[j]:
            visited[j] = True
            for i in range(len(computers)):
                if computers[j][i] == 1 and not visited[i]:
                    stack.append(i)

def solution(n, computers):
    visited = [False] * n
    answer = 0
    for i in range(n):
        if not visited[i]:
            dfs(computers, visited, i)
            answer += 1
    return answer

import sys
from collections import deque

n, m, v = map(int, sys.stdin.readline().split())

graph = [[] for _ in range(n + 1)]

for i in range(m):
    x, y = map(int, sys.stdin.readline().split())
    graph[x].append(y)
    graph[y].append(x)

for num in graph:
    num.sort()

visited1 = [False] * (n + 1)
visited2 = [False] * (n + 1)

def dfs(v):
    print(v, end=' ')
    visited1[v] = True
    for i in graph[v]:
        if not(visited1[i]):
            dfs(i)

def bfs(v):
    q = deque([v])
    while q:
        v = q.popleft()
        if not(visited2[v]):
            visited2[v] = True
            print(v, end=' ')
            for i in graph[v]:
                if not visited2[i]:
                    q.append(i)

dfs(v)
print()
bfs(v)

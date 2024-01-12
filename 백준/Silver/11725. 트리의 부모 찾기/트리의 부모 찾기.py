import sys
from collections import deque

N = int(sys.stdin.readline())

graph = [[] for _ in range(N+1)]
parent = [0 for _ in range(N+1)]

for _ in range(N-1):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

queue = deque([1])

while queue:
    node = queue.popleft()
    for i in graph[node]:
        if parent[i] == 0:
            parent[i] = node
            queue.append(i)

for i in range(2, N+1):
    print(parent[i])
import sys
from collections import deque

N = int(sys.stdin.readline())
node = list(map(int,sys.stdin.readline().rstrip().split(' ')))
delete = int(sys.stdin.readline())

graph = [[] for _ in range(N)]

for i in range(N):
    if node[i] != -1:
        if i != delete:
            graph[node[i]].append(i)
            
def dfs(d):
    while graph[d]:
        x = graph[d].pop()
        dfs(x)
    graph[d].append(False)
dfs(delete)
cnt = 0
for i in range(N):
    if not graph[i]:
        cnt += 1

print(cnt)
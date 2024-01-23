import sys
from collections import deque

input = sys.stdin.readline
n,m = map(int,input().split())
arr = [[] for _ in range(n+1)]

for _ in range(m):
    x, y, weight = map(int, input().split())
    arr[x].append((y,weight))
    arr[y].append((x, weight))

first, second = map(int,input().split())

answer = start = 1
end = 1000000000

def bfs(mid):
    q = deque([first])
    visit = [False] * (n+1)
    visit[first] = True
    while q:
        x = q.popleft()
        for y, weight in arr[x]:
            if not visit[y] and weight >= mid:
                visit[y] = True
                q.append(y)
    return visit[second]

while start <= end:
    mid = (start+end)//2

    if bfs(mid):
        answer = mid
        start = mid + 1
    else:
        end = mid - 1
print(answer)
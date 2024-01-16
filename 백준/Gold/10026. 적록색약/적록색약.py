from collections import deque
import sys

input = sys.stdin.readline
n = int(input())

dx = [0,1,0,-1]
dy = [1,0,-1,0]

def bfs(x,y):
    q = deque([(x,y)])
    graph[x][y] = 1
    color = coor[x][y]

    while q:
        x,y = q.popleft()
        for i in range(4):
            nx,ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and graph[nx][ny] == 0:
                if coor[nx][ny] == color:
                    graph[nx][ny] = 1
                    q.append([nx,ny])


cnt1, cnt2 = 0,0

coor = []
for _ in range(n):
    coor.append(list(input().rstrip()))

graph = [[0]*n for _ in range(n)]
for i in range(n):
    for j in range(n):
        if graph[i][j] == 0:
            bfs(i,j)
            cnt1 += 1

for i in range(n):
    for j in range(n):
        if coor[i][j] == 'R':
            coor[i][j] = 'G'

graph = [[0]*n for _ in range(n)]
for i in range(n):
    for j in range(n):
        if graph[i][j] == 0:
            bfs(i,j)
            cnt2 += 1

print(cnt1, cnt2)
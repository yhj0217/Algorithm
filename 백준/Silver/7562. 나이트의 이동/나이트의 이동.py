from collections import deque
import sys

input = sys.stdin.readline
n = int(input())

dx = [1,2,2,1,-1,-2,-2,-1]
dy = [2,1,-1,-2,-2,-1,1,2]

def bfs(x,y):
    q = deque([(x,y)])
    coor[x][y] = 0

    while q:
        x,y = q.popleft()

        if x == target[0] and y == target[1]:
            return coor[x][y]

        for i in range(8):
            nx,ny = x + dx[i], y + dy[i]
            if 0 <= nx < l and 0 <= ny < l:
                if coor[nx][ny] == 0:
                    coor[nx][ny] = coor[x][y] + 1
                    q.append([nx,ny])


for _ in range(n):
    l = int(input())
    now = list(map(int, input().split()))
    target = list(map(int, input().split()))
    coor = [[0] * l for _ in range(l)]


    print(bfs(now[0],now[1]))

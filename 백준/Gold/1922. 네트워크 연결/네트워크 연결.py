import sys
input = sys.stdin.readline
n,m = int(input()), int(input())
edge = []
for i in range(m):
    x,y,z = map(int, input().split())
    edge.append([z, x, y])

edge.sort()
parent = list(range(n+1))

def find(x):
    if x == parent[x]:
        return x
    parent[x] = find(parent[x])
    return parent[x]

def union(x,y):
    x = find(x)
    y = find(y)
    if x == y:
        return
    parent[x] = y

cnt = 0
answer = 0

for i in range(m):
    weight = edge[i][0]
    start = edge[i][1]
    end = edge[i][2]
    if find(start) != find(end):
        union(start, end)
        answer += weight
        cnt += 1
    if cnt == n-1:
        break
print(answer)
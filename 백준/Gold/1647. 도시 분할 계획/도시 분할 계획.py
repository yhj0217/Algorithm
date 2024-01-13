import sys

input = sys.stdin.readline
n, m = map(int, input().split())
edge = []
for _ in range(m):
    x, y, j = map(int, input().split())
    edge.append([j, x, y])

edge.sort()
parent = list(range(n + 1))


def find(x):
    if x == parent[x]:
        return x
    parent[x] = find(parent[x])
    return parent[x]


def union(x, y):
    x = find(x)
    y = find(y)
    if x != y:
        parent[y] = x

cnt = 0
answer = 0
max_cost = 0

for i in range(m):
    weight = edge[i][0]
    start = edge[i][1]
    end = edge[i][2]
    if find(start) != find(end):
        union(start, end)
        answer += weight
        cnt += 1
        if weight > max_cost:
            max_cost = weight
    if cnt == n-1:
        break
answer -= max_cost
print(answer)

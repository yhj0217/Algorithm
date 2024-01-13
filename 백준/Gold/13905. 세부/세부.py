import sys

input = sys.stdin.readline
n, m = map(int, input().split())
s, e = map(int, input().split())
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

last = 0

while find(s) != find(e) and edge:
    weight, start, end = edge.pop()
    last = weight
    union(start, end)

print(last if find(s) == find(e) else 0)

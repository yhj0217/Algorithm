import sys

input = sys.stdin.readline
n = int(input())
edges = []

for i in range(n):
    row = list(map(int, input().split()))
    for j in range(i+1, n):
        edges.append((row[j], i, j))

edges.sort()
parent = list(range(n))

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

answer = 0

for cost, start, end in edges:
    if find(start) != find(end):
        union(start, end)
        answer += cost

print(answer)

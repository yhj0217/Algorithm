import sys

input = sys.stdin.readline
k, n = map(int,input().split())
rope = []

for _ in range(k):
    rope.append(int(input()))

l = 1
r = max(rope)

while l <= r:
    mid = (l+r) // 2
    cnt = 0
    for i in range(k):
        cnt += rope[i] // mid
    if cnt >= n:
        l = mid + 1
    else:
        r = mid - 1

print(r)

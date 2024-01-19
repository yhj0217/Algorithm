import sys

input = sys.stdin.readline
n,m = map(int,input().split())
wood = list(map(int,input().split()))
l,r = 1, max(wood)

while l <= r:
    mid = (l+r) // 2
    cnt = 0
    for i in wood:
        if i > mid:
            cnt += i - mid

    if cnt < m:
        r = mid - 1
    else:
        l = mid + 1

print(r)

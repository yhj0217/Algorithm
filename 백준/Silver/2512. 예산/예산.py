import sys

input = sys.stdin.readline
n = int(input())
money = list(map(int,input().split()))
m = int(input())
l,r = 0, max(money)

while l <= r:
    mid = (l+r) // 2
    cnt = 0
    for i in range(n):
        if money[i] > mid:
            cnt += mid
        else:
            cnt += money[i]
    if cnt <= m:
        l = mid + 1
    else:
        r = mid - 1

print(r)

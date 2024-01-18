import sys

input = sys.stdin.readline
n = int(input())
road = list(map(int,input().split()))
price = list(map(int,input().split()))
cnt = 0
min_price = price[0]

for i in range(n-1):
    if price[i] < min_price:
        min_price = price[i]

    cnt += min_price * road[i]

print(cnt)
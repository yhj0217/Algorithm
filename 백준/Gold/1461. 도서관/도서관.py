import sys

input = sys.stdin.readline
n,m = map(int,input().split())
books = list(map(int,input().split()))

plus,minus =[], []
last = 0
answer = 0

for i in books:
    last = max(abs(i),last)
    if i>0:
        plus.append(i)
    else:
        minus.append(abs(i))
plus.sort(reverse=True)
minus.sort(reverse=True)

for i in range(0, len(plus), m):
    answer += plus[i]*2
for i in range(0, len(minus), m):
    answer += minus[i]*2
print(answer-last)
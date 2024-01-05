import sys
input = sys.stdin.readline

n, m = map(int,input().split())
answer = {}
for _ in range(n):
    key, value = input().split()
    answer[key] = value

for _ in range(m):
    print(answer[input().rstrip()])


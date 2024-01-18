import sys

input = sys.stdin.readline
n = int(input())
nums = list(map(int,input().split()))
cnt = 0
nums.sort()
for i in range(0,n):
    cnt += nums[i] * (n-i)

print(cnt)
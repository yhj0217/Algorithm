import sys

n,m = map(int, sys.stdin.readline().split())
nums = []
nums += map(int, sys.stdin.readline().split())

for _ in range(m):
    nums.sort()
    total = nums[0] + nums[1]
    nums[0] = total
    nums[1] = total

answer = sum(nums)
print(answer)
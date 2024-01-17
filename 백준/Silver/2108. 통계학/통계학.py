import sys
from collections import Counter

input = sys.stdin.readline
n = int(input())
nums = []
for _ in range(n):
    nums.append(int(input()))
nums.sort()
print(round(sum(nums)/n))
print(nums[n//2])

mode = Counter(nums).most_common()
if len(nums) > 1:
    if mode[0][1] == mode[1][1]:
        print(mode[1][0])
    else:
        print(mode[0][0])
else:
    print(nums[0])

print(abs(nums[0] - nums[n-1]))
import sys

T = int(sys.stdin.readline())

for _ in range(T):
    n = int(sys.stdin.readline())

    dp = [0] * 11
    dp[0] = 1

    for i in range(1, 11):
        if i - 1 >= 0:
            dp[i] += dp[i-1]
        if i - 2 >= 0:
            dp[i] += dp[i-2]
        if i - 3 >= 0:
            dp[i] += dp[i-3]

    print(dp[n])

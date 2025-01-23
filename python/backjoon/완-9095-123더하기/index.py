import sys

sys.stdin = open("backjoon/완-9095-123더하기/input.txt")


def dp_func(n):
    dp = [1, 2, 4]
    if n <= 3:
        return dp[n - 1]
    else:
        return dp_func(n - 1) + dp_func(n - 2) + dp_func(n - 3)


T = int(input())
for test_case in range(1, T + 1):
    num = int(input())
    print(dp_func(num))

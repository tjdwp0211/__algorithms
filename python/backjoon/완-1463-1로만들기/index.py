import sys

sys.stdin = open("backjoon/완-1463-1로만들기/input.txt")

T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    dp = [0, 0, 1, 1]

    for i in range(4, N + 1):
        dp.append(dp[i - 1] + 1)
        if i % 2 == 0:
            dp[i] = min(dp[i // 2] + 1, dp[i])
        if i % 3 == 0:
            dp[i] = min(dp[i // 3] + 1, dp[i])

    print(dp[N])

# d = {1: 0, 2: 1}
# def s(n: int) -> int:
#     if n in d:
#         return d[n]
#     t = 1 + min(s(n // 3) + n % 3, s(n // 2) + n % 2)
#     d[n] = t
#     return t
# print(s(int(input())))

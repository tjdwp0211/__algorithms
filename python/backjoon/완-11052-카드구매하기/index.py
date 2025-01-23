import sys

sys.stdin = open("backjoon/완-11052-카드구매하기/input.txt")
import sys

input = sys.stdin.readline

N = int(input())
price = [0] + list(map(int, input().split()))
dp = [0 for _ in range(N + 1)]


for i in range(1, N + 1):
    for j in range(1, i + 1):
        dp[i] = max(dp[i], dp[i - j] + price[j])

print(dp[i])

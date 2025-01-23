import sys

sys.stdin = open("backjoon/완-11047-동전0/input.txt")

n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]
filtered_coins, result_use_cnt = list(filter(lambda x: x <= k, coins)), 0
filtered_coins.reverse()
for coin in filtered_coins:
    if coin <= k:
        use_num = k // coin
        k, result_use_cnt = k - (coin * use_num), result_use_cnt + use_num
    else:
        continue

print(result_use_cnt)

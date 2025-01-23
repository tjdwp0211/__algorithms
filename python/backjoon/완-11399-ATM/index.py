import sys

sys.stdin = open("backjoon/완-11399-ATM/input.txt")

N = int(input())
times, memo, basket = list(map(int, input().split())), 0, []
times.sort()

for time in times:
    memo += time
    basket.append(memo)

print(sum(basket))

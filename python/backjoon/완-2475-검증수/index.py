import sys

sys.stdin = open("backjoon/완-2475-검증수/input.txt")

print(sum(list(map(lambda x: int(x) ** 2, input().split()))) % 10)

import sys

sys.stdin = open("backjoon/완-2847-게임을만든동준이/input.txt")

from math import ceil

T = int(input())
points = [0] + [int(input()) for _ in range(T)] + [20_000]
modify_cnt = 0

for i in range(T, 0, -1):
    easy_p, normal_p, hard_p = points[i - 1], points[i], points[i + 1]

    if points[i + 1] <= points[i]:
        decrease = ceil(abs(points[i + 1] + 0.1 - points[i]))
        points[i], modify_cnt = points[i] - decrease, modify_cnt + decrease
    if points[i] <= points[i - 1]:
        decrease = ceil(abs(points[i] + 0.1 - easy_p))
        points[i - 1], modify_cnt = points[i - 1] - decrease, modify_cnt + decrease

print(modify_cnt)

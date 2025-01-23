import sys

sys.stdin = open("SWEA/5215-햄버거다이어트/input.txt")

T = int(input())

for test_case in range(1, T + 1):
    N, limit = map(int, input().split())
    score_calories = [tuple(map(int, input().split())) for _ in range(N)]

    calories, score = 0, 0

    print(f"#{test_case} {score}")

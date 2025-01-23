import sys

sys.stdin = open("SWEA/완-1217-거듭제곱/input.txt")


def func(awn, n, m):
    if m == 0:
        return awn
    awn = awn * n
    m -= 1
    return func(awn, n, m)


for test_case in range(1, 11):
    T = int(input())
    N, M = map(int, input().split())

    print(f"#{test_case} {func(1, N, M)}")

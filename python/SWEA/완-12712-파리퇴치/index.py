import sys

sys.stdin = open("SWEA/12712-파리퇴치/input.txt")


def spray_x(center_idx: tuple):
    global field, N, M
    col_idx, row_idx = center_idx
    calced = field[col_idx][row_idx]
    for i in range(1, M):
        increased_col, decreased_col = col_idx + i, col_idx - i
        increased_row, decreased_row = row_idx + i, row_idx - i

        if increased_col < N and increased_row < N:
            calced += field[increased_col][increased_row]

        if increased_col < N and 0 <= decreased_row:
            calced += field[increased_col][decreased_row]

        if 0 <= decreased_col and increased_row < N:
            calced += field[decreased_col][increased_row]

        if 0 <= decreased_col and 0 <= decreased_row:
            calced += field[decreased_col][decreased_row]

    return calced


def spray_plus(center_idx: tuple):
    global field, N, M
    col_idx, row_idx = center_idx
    calced = field[col_idx][row_idx]
    for i in range(1, M):
        increased_col, decreased_col = col_idx + i, col_idx - i
        increased_row, decreased_row = row_idx + i, row_idx - i

        if increased_col < N:
            calced += field[increased_col][row_idx]

        if 0 <= decreased_col:
            calced += field[decreased_col][row_idx]

        if increased_row < N:
            calced += field[col_idx][increased_row]

        if 0 <= decreased_row:
            calced += field[col_idx][decreased_row]

    return calced


T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    field = [list(map(int, input().split())) for _ in range(N)]
    result = 0

    for i in range(1, N - 1):
        for j in range(1, N - 1):
            result = max(result, spray_plus((i, j)), spray_x((i, j)))
    print(f"#{test_case} {result}")

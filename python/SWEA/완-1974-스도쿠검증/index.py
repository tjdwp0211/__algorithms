import sys

sys.stdin = open("SWEA/완-1974-스도쿠검증/input.txt")


def validate_func(target_arr: list):
    global able, validate_arr
    if sorted(target_arr) != validate_arr:
        return 0
    else:
        return 1


T = int(input())
for test_case in range(1, T + 1):
    field = [list(map(int, input().split())) for _ in range(9)]
    validate_arr, able = [i for i in range(1, 10)], 1

    for i in range(9):
        row_arr, col_arr = field[i], []
        left_squar_arr, center_squar_arr, right_squar_arr = [], [], []

        for j in range(9):
            col_arr.append(field[j][i])
        if i % 3 == 0:
            for k in range(i, i + 3):
                left_squar_arr.extend(field[k][0:3])
                center_squar_arr.extend(field[k][3:6])
                right_squar_arr.extend(field[k][6:9])
            if (
                validate_func(left_squar_arr) == 0
                or validate_func(center_squar_arr) == 0
                or validate_func(right_squar_arr) == 0
            ):
                print(f"#{test_case} 0")
                break
        if validate_func(col_arr) == 0 or validate_func(row_arr) == 0:
            print(f"#{test_case} 0")
            break
        elif i == 8:
            print(f"#{test_case} 1")

import sys

sys.stdin = open("SWEA/완-1974-숫자배열회전/input.txt")


def top_right_dir(start_idx):  # col-- && row++
    arr = []
    for col_i in range(N - 1, -1, -1):
        arr.append(num_arr[col_i][start_idx])
    return arr


def left_bot_dir(start_idx):  # col-- && row--
    arr = []
    for col_i in range(N - 1, -1, -1):
        arr.append(num_arr[start_idx][col_i])
    return arr


def right_top_dir(start_idx):  # col++ && row--
    arr = []
    for col_i in range(0, N):
        arr.append(num_arr[col_i][start_idx])
    return arr


T = int(input())

for test_case in range(1, T + 1):
    global N, num_arr
    N = int(input())
    num_arr = [list(map(int, input().split(" "))) for _ in range(N)]
    result = []

    for i in range(N):
        arr = []
        arr.append("".join(list(map(str, top_right_dir(i)))))
        arr.append("".join(list(map(str, left_bot_dir(-(2 * i - i + 1))))))
        arr.append("".join(list(map(str, right_top_dir(-(2 * i - i + 1))))))
        result.append(arr)

    print(f"#{test_case}")
    for i, el in enumerate(result):
        print(f'{" ".join(el)}')

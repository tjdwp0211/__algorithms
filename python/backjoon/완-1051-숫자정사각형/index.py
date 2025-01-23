import sys

sys.stdin = open("backjoon/완-1051-숫자정사각형/input.txt")

import sys

input = sys.stdin.readline


def func(line_size: int):
    basket = []
    new_line_size = line_size
    for start_h in range(len(temp) - new_line_size):
        end_h = start_h + line_size
        for start_w in range(len(temp[0]) - new_line_size):
            end_w = start_w + line_size
            top_left, top_right = temp[start_h][start_w], temp[start_h][end_w]
            bottom_left, bottom_right = temp[end_h][start_w], temp[end_h][end_w]
            if top_left == top_right == bottom_left == bottom_right:
                size = end_h + 1 - start_h
                basket.append(size * size)
            else:
                basket.append(1)
    return max(basket)


N, M = map(int, input().split())
line_size = min(N, M) - 1
temp = [list(list(input())) for _ in range(N)]
result = []

if line_size == 0:
    print(1)
else:
    while line_size:
        result.append(func(line_size))
        line_size -= 1
    print(max(result))

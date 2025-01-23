import sys

sys.stdin = open("backjoon/완-1193-분수찾기/input.txt")


num, row_or_col_idx = int(input()), 0

for i in range(num):
    if num - i > 1:
        num -= i
    else:
        row_or_col_idx = i
        break
if row_or_col_idx % 2 == 0:
    print(f"{num}/{max(1, row_or_col_idx + 1 - num)}")
else:
    print(f"{max(1, row_or_col_idx + 1 - num)}/{num}")

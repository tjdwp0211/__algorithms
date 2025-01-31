# 체스판: 8x8
# 나이트 L 자로 이동
# 1. 수평 두칸 이동
#   1-1. 수직 한칸 이동
# 2. 수직 두칸 이동
#   2-1. 수평 한칸 이동

# Column: a, b, c, d, e, f, g, h
# Row: 1, 2, 3, 4, 5, 6, 7, 8

dCol = [-1, -2, -2, -1, 1, 2, 2, 1]
dRow = [-2, -1, 1, 2, -2, -1, 1, 2]

curCol, curRow = list(input())
curCol = ord(curCol) - 97
curRow = int(curRow) - 1

count = 0
for i in range(8):
    nextCol = curCol + dCol[i]
    nextRow = curRow + dRow[i]

    if 0 <= nextCol < 8 and 0 <= nextRow < 8:
        count += 1

print(count)

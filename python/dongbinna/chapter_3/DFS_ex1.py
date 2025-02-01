# 4 5
# 00110
# 00011
# 11111
# 00000

dRow = [0, 0, -1, 1]
dCol = [-1, 1, 0, 0]

N, M = map(int, input().split())
matrix, result = [], 0

for _ in range(N):
    item = list(input())
    matrix.append(item)


def DFS(curR, curC):
    if curR < 0 or curR >= N or curC < 0 or curC >= M:
        return False

    if matrix[curR][curC] == '0':
        matrix[curR][curC] = 'x'
        DFS(curR - 1, curC)   # 상
        DFS(curR, curC - 1)   # 우
        DFS(curR + 1, curC)   # 하
        DFS(curR, curC + 1)   # 좌
        return True

    return False

for r in range(N):
    for c in range(M):
        if matrix[r][c] == '0':
            curResult = DFS(r, c)
            print(f'[{r}{c}] : {curResult}')
            if curResult:
                result += 1

print(result)

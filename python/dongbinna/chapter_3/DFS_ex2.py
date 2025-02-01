# NxM 직사각형 미로
# 4 <= N,M <= 200
# (1, 1) -> (N, M) : (0, 0) -> (N - 1, M - 1)
# 0: 괴물
# 1: 안전지대
# 탈출을 위한 최소 경로
# 시작칸, 출구칸 모두 경로에 포함. result + 2(시작칸, 출구칸)
# 5 6
# 101010
# 111111
# 000001
# 111111
# 111111


R_VECTOR = [0, 0, -1, 1]
C_VECTOR = [-1, 1, 0, 0]

N, M = map(int, input().split())
matrix, result = [], 1e9

for _ in range(N):
    item = list(input())
    matrix.append(item)


def DFS(curR, curC, depth):
    global result
    if curR == N - 1 and curC == M - 1:
        result = min(result, depth)
        return

    matrix[curR][curC] = 'X'
    for i in range(4):
        nextR = curR + R_VECTOR[i]
        nextC = curC + C_VECTOR[i]
        if 0 <= nextR < N and 0 <= nextC < M and matrix[nextR][nextC] == '1':
            DFS(nextR, nextC, depth + 1)



DFS(0, 0, 1)
print(result)
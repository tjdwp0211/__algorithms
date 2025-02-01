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


class Queue:
    def __init__(self):
        self.items = []

    def __len__(self):
        return len(self.items)

    def isEmpty(self):
        return len(self) == 0

    def pushBack(self, value):
        self.items.append(value)

    def popFront(self):
        if self.isEmpty():
            return None
        return self.items.pop(0)


R_VECTOR = [0, 0, -1, 1]
C_VECTOR = [-1, 1, 0, 0]

N, M = map(int, input().split())
matrix, result = [], 1e9

for _ in range(N):
    item = list(map(int, input()))
    matrix.append(item)

def BFS(r, c):
    q = Queue()

    matrix[r][c] = 1
    q.pushBack((r, c))

    stepCount = matrix[r][c] + 1
    while q:
        if matrix[N - 1][M - 1] != 1:
            break
        size = len(q)
        for _ in range(size):
            curR, curC = q.popFront()

            for i in range(4):
                nextR = curR + R_VECTOR[i]
                nextC = curC + C_VECTOR[i]
                if 0 <= nextR < N and 0 <= nextC < M and matrix[nextR][nextC] == 1:
                    matrix[nextR][nextC] = stepCount
                    q.pushBack((nextR, nextC))
        stepCount += 1

BFS(0, 0)
print(matrix[N - 1][M - 1])


# def LESSON_BFS(r, c):
#     q = Queue()
#
#     matrix[r][c] = 1
#     q.pushBack((r, c))
#
#     while q:
#         curR, curC = q.popFront()
#         for i in range(4):
#             nextR = curR + R_VECTOR[i]
#             nextC = curC + C_VECTOR[i]
#
#             if nextR < 0 or nextR >= N or nextC < 0 or nextC >= M:
#                 continue
#             if matrix[nextR][nextC] == 0:
#                 continue
#
#             if matrix[nextR][nextC] == 1:
#                 matrix[nextR][nextC] = matrix[curR][curC] + 1
#                 q.pushBack((nextR, nextC))
#
# LESSON_BFS(0, 0)
# print(matrix[N - 1][M - 1])


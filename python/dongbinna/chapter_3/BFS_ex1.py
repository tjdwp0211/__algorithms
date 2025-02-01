# NxM 크기 얼음틀
# 1 <= N, M <= 1_000
# 0: 얼음 부분
# 1: 벽
# 2차원 행렬로 얼음틀이 주어짐.
# 만들 수 있는 얼음의 갯수
# 4 5
# 00110
# 00011
# 11111
# 00000

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


dRow = [0, 0, -1, 1]
dCol = [-1, 1, 0, 0]

N, M = map(int, input().split())
matrix, result = [], 0

for _ in range(N):
    item = list(input())
    matrix.append(item)

def BFS(r, c):
    global result

    q = Queue()

    matrix[r][c] = '+'
    q.pushBack((r, c))
    while q:
        curRow, curCol = q.popFront()
        for i in range(4):
            nextRow = curRow + dRow[i]
            nextCol = curCol + dCol[i]
            if 0 <= nextRow < N and 0 <= nextCol < M and matrix[nextRow][nextCol] == '0':
                matrix[nextRow][nextCol] = 'x'
                q.pushBack((nextRow, nextCol))
    result += 1


for r in range(N):
    for c in range(M):
        if matrix[r][c] == '0':
            BFS(r, c)

print(result)
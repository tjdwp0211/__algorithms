# NxN
# (1, 1) (N, N) -> (0, 0) (N - 1, N - 1)
# L R U D
# 벗어나는 움직임은 무시해야 함.
# 5
# R R R U D D


X_VECTOR = [0, 0, -1, 1]
Y_VECTOR = [-1, 1, 0, 0]

N = int(input())
order = input().split()
matrix = [[0] * N for _ in range(N)]

dictionary = {'L': 0,'R': 1,'U': 2,'D': 3}

currentLocation = (0, 0)
for dir in order:
    dx = X_VECTOR[dictionary[dir]]
    dy = Y_VECTOR[dictionary[dir]]

    nextX = currentLocation[0] + dx
    nextY = currentLocation[1] + dy

    if 0 <= nextX < N and 0 <= nextY < N:
        currentLocation = (nextX, nextY)

print(currentLocation[0] + 1, currentLocation[1] + 1)

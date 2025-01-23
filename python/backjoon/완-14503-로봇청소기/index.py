import sys

sys.stdin = open("backjoon/완-13503-로봇청소기/input.txt")

max_r, max_c = map(int, input().split())
cur_r, cur_c, d = map(int, input().split())
visited = [[0] * max_c for _ in range(max_r)]
room = [list(map(int, input().split())) for _ in range(max_r)]
visited[cur_r][cur_c], cnt = 2, 1
check_c = [0, 1, 0, -1]
check_r = [-1, 0, 1, 0]

while True:
    flag = False
    for _ in range(4):
        d = (d + 3) % 4
        nr = cur_r + check_r[d]
        nc = cur_c + check_c[d]
        if (0 <= nc <= max_c) and (0 <= nr <= max_r) and (room[nr][nc] == 0):
            if visited[nr][nc] == 0:
                visited[nr][nc] = 1
                cnt += 1
                cur_c, cur_r = nc, nr
                flag = True
                break
    if not flag:
        if room[cur_r - check_r[d]][cur_c - check_c[d]] == 1:
            print(cnt)
            break
        else:
            cur_c = cur_c - check_c[d]
            cur_r = cur_r - check_r[d]


# ---------------------------------------------------------------
# 14499 주사위 굴리기
# def turn(dir, dice):
#     a, b, c, d, e, f = dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]
#     if dir == 1: #동
#         dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = d, b, a, f, e, c
#     elif dir == 2: #서
#         dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = c, b, f, a, e, d
#     elif dir == 3: #북
#         dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = e, a, c, d, f, b
#     else:
#         dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = b, f, c, d, a, e
# n, m, x, y, k = map(int, input().split())

# board = [list(map(int, input().split())) for _ in range(n)]
# dx = [0, 0, -1, 1]
# dy = [1, -1, 0, 0]
# dice = [0, 0, 0, 0, 0, 0]

# moves = list(map(int, input().split()))

# nx, ny = x, y
# for i in moves:
#     nx += dx[i - 1]
#     ny += dy[i - 1]

#     if nx < 0 or nx >= n or ny < 0 or ny >= m:
#         nx -= dx[i - 1]
#         ny -= dy[i - 1]
#         continue
#     turn(i, dice)
#     if board[nx][ny] == 0:
#         board[nx][ny] = dice[-1]
#     else:
#         dice[-1] = board[nx][ny]
#         board[nx][ny] = 0

#     print(dice[0])
# 4 2 0 0 8
# 0 2
# 3 4
# 5 6
# 7 8
# 4 4 4 1 3 3 3 2

# 2 2 0 0 16
# 0 2
# 3 4
# 4 4 4 4 1 1 1 1 3 3 3 3 2 2 2 2

# 3 3 1 1 9
# 1 2 3
# 4 0 5
# 6 7 8
# 1 3 2 2 4 4 1 1 3

# 3 3 0 0 16
# 0 1 2
# 3 4 5
# 6 7 8
# 4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2

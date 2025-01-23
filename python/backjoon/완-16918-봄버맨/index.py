import sys, copy

sys.stdin = open("backjoon/완-16918-봄버맨/input.txt")

dy = [0, 0, 1, -1]
dx = [1, -1, 0, 0]


def boom(y, x):
    room[y][x] = "."
    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if 0 <= ny < room_y and 0 <= nx < room_x:
            room[ny][nx] = "."


def trap_boom(li):
    for y in range(room_y):
        for x in range(room_x):
            if li[y][x] == ".":
                li[y][x] = "O"


global room_y, room_x, room, backup_room
room_y, room_x, timer = map(int, input().split())
room = [list(input()) for _ in range(room_y)]
backup_room = []

for t in range(1, timer + 1):
    if t == 1:
        backup_room = copy.deepcopy(room)
    elif t % 2 == 1:
        for y in range(room_y):
            for x in range(room_x):
                if backup_room[y][x] == "O":
                    boom(y, x)
        backup_room = copy.deepcopy(room)
    else:
        trap_boom(room)
for result in room:
    print("".join(map(str, result)))

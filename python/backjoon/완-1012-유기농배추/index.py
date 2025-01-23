import sys

sys.setrecursionlimit(10**6)
sys.stdin = open("backjoon/완-1012-유기농배추/input.txt")

# -----------------------------------------풀이 1-----------------------------------------
dx = [0, 0, 1, -1]  # 좌, 우
dy = [1, -1, 0, 0]  # 상, 하
# 받은 좌표에 for문을 돌며 더해질 값들
# 상하 좌우를 확인하기 위해 설정해둔 배열


def update_templet(point):
    x, y = point
    visited[y][x] = 1
    # 함수가 확인한 곳이라고 visited를 업데이트
    for i in range(4):
        # 상하 좌우를 확인하기 위한 for문
        new_x = x + dx[i]
        new_y = y + dy[i]
        if templet[new_y][new_x] and not visited[new_y][new_x]:
            # (상or하or좌or우)가 1(배추가 있는 곳) and 함수가 확인한 곳이 아니라면
            update_templet([new_x, new_y])
            # (상or하or좌or우)에서 (상or하or좌or우)를 또 다시 확인


T = int(input())

for test_case in range(1, T + 1):
    width, height, num = map(int, input().split())
    templet = [[0] * (width + 2) for _ in range(height + 2)]
    # 배추를 심어질 것
    visited = [[0] * (width + 2) for _ in range(height + 2)]
    # 함수를 돌며 확인된 그룹의 좌표들을 방문했다는 표시를 위해 만든 것
    # 이유: 함수에서 확인이 된 좌표를 2중 for문에서는 모르기 때문에.

    for i in range(num):
        # templet에 배추를 심는 로직. 배추가 심어진 곳은 0 -> 1로 초기화
        x, y = map(int, input().split())
        templet[y + 1][x + 1] = 1

    result = 0
    for temp_y in range(1, height + 1):
        for temp_x in range(1, width + 1):
            if templet[temp_y][temp_x] and not visited[temp_y][temp_x]:
                # 현재 위치가 1(배추가 있는 곳) and 함수가 확인한 곳이 아니라면
                result += 1
                update_templet([temp_x, temp_y])

    print(result)
# -----------------------------------------풀이 1-----------------------------------------

# -----------------------------------------풀이 2-----------------------------------------
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def update_templet(x, y):
    templet[y][x] = 0
    for i in range(4):
        new_x = x + dx[i]
        new_y = y + dy[i]
        if templet[new_y][new_x]:
            update_templet(new_x, new_y)


T = int(input())

for test_case in range(1, T + 1):
    width, height, num = map(int, input().split())
    templet = [[0] * (width + 10) for _ in range(height + 10)]

    for i in range(num):
        x, y = map(int, input().split())
        templet[y + 1][x + 1] = 1

    result = 0
    for temp_y in range(1, height + 1):
        for temp_x in range(1, width + 1):
            if templet[temp_y][temp_x]:
                result += 1
                update_templet(temp_x, temp_y)

    print(result)
# -----------------------------------------풀이 2-----------------------------------------

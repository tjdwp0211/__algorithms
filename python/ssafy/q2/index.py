import sys

sys.stdin = open("ssafy/q2/input.txt")

# 폭죽 축제를 한다. 발사대에서 폭죽을 발사하는데, 발사대는 시작점(0), 끝점(X) 두 지점에서 발사된다.
# 폭죽은 1초마다 시작점에 발사된 폭죽은 +1, 끝점(X)에서 발사된 폭죽은 -1 만큼 이동한다.

# 두 폭죽이 만나면 터지지만, 진행 경로에 지연장치들이 있다.
# 지연장치 좌표(C)와 지연 시간(D)가 N개 만큼 주어진다.
# 폭죽이 진행하다가 지연장치를 마주치면 마주친 해당 폭죽은 D초만큼 지연되고다른 폭죽은 지연장치를 만나지 않았다면, 계속 진행 방향에 맞게 진행한다.

# 두 폭죽이 만나 터지는 좌표를 출력하다.
# (단, 지연장치 위에서 두 촉죽이 만나 터질 수도 있다.)

from collections import defaultdict

T = int(input())

for test_case in range(1, T + 1):
    N, D = map(int, input().split())
    start = 0
    delay_infos = defaultdict(int)
    for _ in range(N):
        c, d = map(int, input().split())
        delay_infos[c] = d

    for i in range(D // 2):
        start += 1
        D -= 1
        if start in delay_infos.keys():
            poped = delay_infos.pop(start)
            for j in range(poped):
                D -= 1
                if start == D:
                    break
        if D in delay_infos.keys():
            poped = delay_infos.pop(D)
            for j in range(poped):
                start += 1
                if start == D:
                    break
        if start == D:
            break
    print(f"#{test_case} {start}")

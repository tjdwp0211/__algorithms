# 미래도시(START)에는 1~N 회사 있음.
# 특정 회사끼리 도로로 양방향 연결
# A는 K번 회사 방문 후, X번 회사를 가는 것이 목표
# 1 <= N(회사 수), M(간선 수) <= 100
# 1 <= K(경유지) <= 100
# 단, X번 회사로 도달할 수 없다면, -1 출력
# K => X
# 플로이드워셜

# 5 7
# 1 2
# 1 3
# 1 4
# 2 4
# 3 4
# 3 5
# 4 5
# 4 5

N, M = map(int, input().split())
dpTable = [[1e9] * (N + 1) for _ in range(N + 1)]

for i in range(M):
    a, b = map(int, input().split())
    dpTable[a][b], dpTable[b][a] = 1, 1


X, K = map(int, input().split())


for k in range(1, N + 1):       # 경유지
    for a in range(1, N + 1):   # 다른 정점들
        for b in range(1, N + 1):
            dpTable[a][b] = min(dpTable[a][b], dpTable[a][k] + dpTable[k][b])

# for g in dpTable[1:]: print(g[1:])
distance = dpTable[1][K] + dpTable[K][X]
if distance == 1e9:
    print(-1)
else:
    print(distance)

import sys

sys.stdin = open("backjoon/완-14501-퇴사/input.txt")

n = int(input())
table = [list(map(int, input().split())) for _ in range(n)] + [[0, 0]]
dp = [0] * (n + 1)

for i in range(n - 1, -1, -1):
    time, price = table[i]
    if time + i <= n:
        dp[i] = max(price + dp[time + i], dp[i + 1])
    else:
        dp[i] = dp[i + 1]

print(dp[0])


# ----------------------------------------------------------
# 미완-17144-미세먼지안녕
# https://www.acmicpc.net/problem/17144
# https://resilient-923.tistory.com/359
# import sys, copy
# input = sys.stdin.readline

# def dust_in(x,y):
#     temp = 0
#     for i in range(4):
#         nx = x + dx[i]
#         ny = y + dy[i]
#         if 0<= nx < r and 0<= ny < c and graph[nx][ny] != -1:
#             temp += (graph[nx][ny] // 5)
#     return temp

# def dust_out(x,y):
#     temp = 0
#     cnt = 0
#     for i in range(4):
#         nx = x + dx[i]
#         ny = y + dy[i]
#         if 0<= nx < r and 0<= ny < c and graph[nx][ny] != -1:
#             cnt += 1
#     temp += (graph[x][y] // 5) * cnt
#     return temp

# def air_clean(graph,new_graph):
#     # 위쪽 반시계
#     graph[air-1][1] = 0
#     for i in range(2, c):
#         graph[air-1][i] = new_graph[air-1][i-1]

#     for i in range(air-1):
#         graph[i][-1] = new_graph[i+1][-1]

#     for i in range(c-1):
#         graph[0][i] = new_graph[0][i+1]

#     for i in range(1, air-1):
#         graph[i][0] = new_graph[i-1][0]

#     for i in range(1, air-1):
#         for j in range(1, c-1):
#             graph[i][j] = new_graph[i][j]

#     # 아래쪽 시계
#     graph[air][1] = 0
#     for i in range(2, c):
#         graph[air][i] = new_graph[air][i-1]

#     for i in range(air+1, r):
#         graph[i][-1] = new_graph[i-1][-1]

#     for i in range(c-1):
#         graph[r-1][i] = new_graph[r-1][i+1]

#     for i in range(air+1, r-1):
#         graph[i][0] = new_graph[i+1][0]


#     for i in range(air+1, r-1):
#         for j in range(1, c-1):
#             graph[i][j] = new_graph[i][j]


# dx = [0,0,1,-1]
# dy = [1,-1,0,0]

# r,c,t = map(int,input().split())
# graph = []
# for _ in range(r):
#     graph.append(list(map(int,input().split())))

# air = 0
# for i in range(r):
#     if graph[i][0] == -1:
#         air = i + 1
#         break

# for _ in range(t):
#     new_graph = copy.deepcopy(graph)
#     for i in range(r):
#         for j in range(c):
#             if graph[i][j] != -1:
#                 total_dust = (dust_in(i,j) - dust_out(i,j))
#                 new_graph[i][j] += total_dust
#     air_clean(graph,new_graph)

# result = 0
# for i in range(r):
#     for j in range(c):
#         if graph[i][j] != -1:
#             result += graph[i][j]

# print(result)

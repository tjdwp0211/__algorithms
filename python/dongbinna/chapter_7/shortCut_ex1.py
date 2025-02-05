# N 개의 도시가 존재
# message send => a ... k ... b
# X -> Y 는 있지만, Y -> X 가 없을 수도 있음 (방향성 존재)
# C 에서 메세지를 최대한 많은 도시로 보낼 예정
# 각 도시 번호와 간선의 정보가 주어짐.
# C에서 보낸 메세지를 받게 되는 [도시의 개수]와 [도시들이 모두 메세지를 받는데 까지 걸리는 시간]
# 1 <= N(정점 갯수) <= 30_000
# 1 <= M(간선 갯수) <= 200_000
# 1 <= C(시작점) <= N
# X: a 도시
# Y: b 도시
# Z: 전달 시간

# 3 2 1
# 1 2 4
# 1 3 2

import heapq

N, M, START = map(int, input().split())
graph = [[] for _ in  range(N + 1)]
hq, distance = [], [1e9 for _ in range(N + 1)]

for _ in range(M):
    fromNode, toNode, timeCost = map(int, input().split())
    heapq.heappush(graph[fromNode], (timeCost, toNode))

heapq.heappush(hq, (0, START))


while hq:
    dist, curNode = heapq.heappop(hq)
    distance[curNode] = dist

    if distance[curNode] < dist:
        continue


    for timeCost, nextNode in graph[curNode]:
        calcCurToNext = distance[curNode] + timeCost
        if distance[nextNode] > calcCurToNext:
            distance[nextNode] = calcCurToNext
            heapq.heappush(hq, (calcCurToNext, nextNode))


maxDistance, gotMessageCount = START, 0
for dist in distance[1:N]:
    if dist != 1e9:
        maxDistance = max(maxDistance, dist)
        gotMessageCount += 1

print(gotMessageCount, maxDistance)

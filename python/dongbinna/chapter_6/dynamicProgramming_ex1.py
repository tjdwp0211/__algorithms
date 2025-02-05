# 식량 창고는 일직선으로 생김
# 각 창고엔 정해진 수의 식량 존재
# 예시로 창고_1을 털게 되면 창고_0, 창고_2에 알림이 감.
# 최소 한 칸 이상 덜어진 식량창고를 약탈해야 함.
# ex)
# 창고: [1, 3, 1, 5]
# PICK: (0, 2) => 2
# PICK: (1, 3) => 8
# PICK(2, 4)가 가장 최대로 얻을 수 있음.
# 최대로 식량을 얻을 수 있는 프로그래밍 작성

# 3 <= N <= 100
# 0 <= K <= 1_000
# 4
# 1 3 1 5
# 5
# 8 10 1 1 1
# 5
# 8 5 1 5 1

# 8 (1, 3)
# 11 (1, 4)
# 13 (0, 3)

# ai = max(a_i-1, a_i-2 + k_i)
N = int(input())
kList = list(map(int, input().split()))
bottomUpDPTable = [0] * N
bottomUpDPTable[0] = kList[0]
bottomUpDPTable[1] = max(kList[0], kList[1])

for i in range(2, N):
    print(bottomUpDPTable)
    bottomUpDPTable[i] = max(bottomUpDPTable[i - 1], bottomUpDPTable[i - 2] + kList[i])

print(bottomUpDPTable[N - 1])


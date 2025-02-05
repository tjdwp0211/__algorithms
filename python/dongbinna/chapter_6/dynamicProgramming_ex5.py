# 전투력을 가진 N명의 병사가 무작위로 나열
# 전투력 높은 병사가 앞으로
# -> 내림차순 배치
# 앞쪽 병사 > 뒤쪽 병사
# 배치 과정에서 특정한 위치에 있는 병사를 열외 시키는 방법을 이용한다.
# 그러면서 남아있는 병사의 수가 최대가 되도록 하고 싶다.
# ex) N = 7
# [1 2 3 4 5 6 7]   =>  [1 2 4 5 7]
# [15 11 4 8 5 2 4] =>  [15 11 8 5 4]
# 1 <= N <= 2_000
# 1 <= el <= 10_000_000

# 0 <= j < i
# D[i] = max(D[i], D[j] + 1) if array[j] < array[i]


# 7
# 15 11 4 8 5 2 4

N = int(input())
group = list(map(int, input().split()))
group.reverse()

dp = [1] * N
for i in range(1, N):
    for j in range(i):
        if group[j] < group[i]:
            dp[i] = max(dp[i], dp[j] + 1)

print(N - max(dp))
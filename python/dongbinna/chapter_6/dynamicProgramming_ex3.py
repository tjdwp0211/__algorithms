# N가지 종류 화폐
# 화폐들의 개수를 최소한 이용해 M원이 되도록
# ex)
# 2, 3원 / M = 15
# 3 * 5 = 15원
# 1 <= N <= 100
# 1 <= M <= 10_000

# 2 15
# 2
# 3
# 3 4
# 3
# 5
# 7

# N = 3, M = 7
# 2, 3, 5
# step_1
# 0 1 2 3 4 5 6 7
# 0 ? 1 ? 2 ? 3 ?
# step_2
# 0 1 2 3 4 5 6 7
# 0 ? 1 1 2 2 2 2


N, M = map(int, input().split())
bills = [int(input()) for _ in range(N)]
dpTable = [10_001] * (M + 1)
dpTable[0] = 0

# BottomUp
for b in bills:
    for i in range(b, M + 1):
        # 현재 금액(i) - 현재 화폐(b) => 계산된 i-b 가 존재
        if dpTable[i - b] != 10_001:
            print(f'Bill is {b} / cur check {i}, and {i - b} is cached / {dpTable[i]} -> ', end='')
            # 현재값과 계산된_i-b + 1 의 값을 비교
            dpTable[i] = min(dpTable[i], dpTable[i - b] + 1)
            print(dpTable[i])
            print(f'{dpTable[:M + 1]}')
    print()

if dpTable[M] == 10_001:
    print(-1)
else:
    print(dpTable[M])




# NxM 금광 (?, ?)에는 weight가 존재
# 출발 가능한 열 (0, 0), (1, 0), (2, 0), ..., (N - 1, 0)
# 이후 M - 1 번에 걸쳐 아래 행동을 취함
# - 행동_1: 오른쪽 위   => (?-1, ?+1)
# - 행동_2: 오른쪽      => (?, ?+1)
# - 행동_3: 오른쪽 아래  => (?+1, ?+1)
# result: 채굴자가 얻을 수 있는 최대 금의 크기

# 1
# 3 4
# 1 3 3 2 2 1 4 1 0 6 4 7
# 4 4
# 1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2

# 19
# 16



T = int(input())
for testCase in range(T):
    N, M = map(int, input().split())
    dp = []


    inputField = list(map(int, input().split()))
    for i in range(N):
        dp.append(inputField[i*M:(i + 1)*M])
        print(f'ROOT: {dp[i]}')

    for j in range(1, M):
        for i in range(N):
            # 왼쪽 위에서 오는 경우
            leftUp, leftDown = 0, 0
            if i != 0:
                leftUp = dp[i - 1][j - 1]

            # 왼쪽 아래에서 오는 경우
            if i != N - 1:
                leftDown = dp[i + 1][j - 1]

            # 왼쪽에서 오는 경우
            left = dp[i][j - 1]
            print(f'LU={leftUp}, LD={leftDown}, LS={left} | Max is {max(leftUp, leftDown, left)}')
            for el in dp: print(f'[{i}][{j}] : {el}')
            print()
            dp[i][j] = dp[i][j] + max(leftUp, leftDown, left)




    result = 0
    for i in range(N):
        result = max(result, dp[i][M - 1])
    print(result)


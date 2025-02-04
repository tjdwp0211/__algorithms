# N개의 원소로 구성된 A, B 두 배열이 있음.
# 1 <= N <= 100_000
# 원소는 모두 자연수
# K 번의 SWAP 연산 수행 가능 (0 <= K <= N)
# SWAP ==> A[?], B[?] = B[?], A[?]

# A 배열의 모든 원소 합이 최대가 되도록.
# ex) N=5, K=3
# A: [1, 2, 5, 4, 3] => [6, 6, 5, 4, 5]
# B: [1, 2, 5, 4, 3] => [3, 5, 1, 2, 5]
# result = 26

# 5 3
# 1 2 5 4 3
# 5 5 6 6 5


N, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort()
B.sort()

for i in range(N):
    if K > 0 and A[i] <= B[N - (i + 1)]:
        A[i], B[N - (i + 1)] = B[N - (i + 1)], A[i]
        K -= 1

print(sum(A))


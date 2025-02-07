# 에라토스테네스의 체 알고리즘
# N보다 작거나 같은 소수의 집합을 찾을 때 사용

import math

def Eratosthenes():
    N = 1_000
    array = [True for i in range(N + 1)]


    # 2 ~ N의 제곱근(루트N)까지 모든 수를 확인.
    for i in range(2, int(math.sqrt(N)) + 1):
        if array[i]: # i가 소수인 경우(남은 수인 경우)
            j = 2   # i를 제외한 i의 모든 배수 지우기
            while i * j <= N:
                array[i * j] = False
                j += 1

    for i in range(2, N + 1):
        if array[i]:
            print(i, end=' ')


def twoPointer():
    N, M = 5, 5
    data = [1, 2, 3, 2, 5]

    count = 0
    intervalSum = 0
    end = 0

    for start in range(N):
        while intervalSum < M and end < N:
            intervalSum += data[end]
            end += 1
        if intervalSum == M:
            count += 1
        intervalSum -= data[start]

def prefixSum():
    N = 5
    data = [10, 20, 30, 40, 50]

    sumValue = 0
    prefixSum = [0]
    for i in data:
        sumValue += i
        prefixSum.append(sumValue)

    left = 3
    right = 4

    print(prefixSum[right] - prefixSum[left - 1])
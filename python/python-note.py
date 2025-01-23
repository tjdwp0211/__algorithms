import sys
from math import *

# ------------------------------------------------------------------------

# 지정된 정수 인자의 최대 공약수를 반환합니다.
print("gcd: ", gcd(12, 39))  # === 3

# ------------------------------------------------------------------------

# 음이 아닌 정수 n의 정수 제곱근을 반환합니다.
print("isqrt: ", isqrt(121))  # === 11

# ------------------------------------------------------------------------

# 공간 복잡도 신경 쓰기: int(N ** 0.5)
# 시간 복잡도 신경 쓰기: math.isqrt(N)

# ------------------------------------------------------------------------


# 약수 구하기
def getDivisonNums(num):
    check_divison_nums = []

    for i in range(1, isqrt(num) + 1):
        if (num % i) == 0:
            check_divison_nums.append(i)
            if (i**2) != num:
                check_divison_nums.append(num // i)
    check_divison_nums.sort()
    return check_divison_nums


print("약수 구하기: ", getDivisonNums(100))

# ------------------------------------------------------------------------


# 소수인지 아닌지 판별하는 로직
def divisorCheck(num):
    for i in range(2, isqrt(num) + 1):
        if (num % i) == 0 | i == 1:
            return
    return True


print("소수인가?", divisorCheck(100))

# ------------------------------------------------------------------------


# 소인수분해 함수
def factorization(x):
    d = 2
    basket = [1]
    while d <= x:
        if x % d == 0:
            x = x // d
            basket.append(d)
        else:
            d = d + 1
    return basket


print("소인수 분해된 것들:", factorization(18))

# ------------------------------------------------------------------------

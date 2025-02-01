def recursive(i):
    if i == 50:
        return
    print(f"START: {i}")
    recursive(i + 1)
    print(f"END: {i}")

# ==================N!(팩토리얼)==================
def factorialIterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def factorialRecursive(n):
    if n <= 1:
        return 1
    return n * factorialRecursive(n - 1)
# ==================N!(팩토리얼)==================

# ==================유클리드 호제법=================
# ex) GCD(192, 162)
# 단계   A       B
# 1     192     162
# 2     162     30
# 3     30      12
# 4     12      6
def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)
# ==================유클리드 호제법==================
print(gcd(192, 162))

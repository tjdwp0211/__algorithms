n, k = map(int, input().split())
count = 0

while n > 2:
    if n % k == 1:
        n = n - 1
    else:
        n = n // k
    count += 1

print(count)
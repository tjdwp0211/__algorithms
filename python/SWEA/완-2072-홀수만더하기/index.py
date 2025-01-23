import sys
sys.stdin = open('SWEA/완-2072-홀수만더하기/input.txt', 'r')

T = int(input())

for test_case in range(T):
    numbers = list(map(int, input().split()))
    result = 0
    for i in range(len(numbers)):
        if (numbers[i] % 2) ==  True:
            result += numbers[i]
        
    print('#'+str(test_case), result)

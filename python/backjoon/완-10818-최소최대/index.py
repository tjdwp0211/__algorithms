import sys
sys.stdin = open('backjoon/완-10818-최소최대/input.txt', 'r')

test_case_length = int(input())

numbers = list(map(int, input().split()))
print(min(numbers), max(numbers))
    

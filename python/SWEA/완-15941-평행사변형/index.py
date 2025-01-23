import sys
sys.stdin = open('SWEA/완-15941-평행사변형/input.txt')

T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    print(f'#{test_case} {N * N}')
import sys
sys.stdin = open('SWEA/완-1244-최대상금/input.txt')
# https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15Khn6AN0CFAYD

T = int(input())

for test_case in range(1, T + 1):
    num, chance = input().split()
    chance = int(chance)
    
    data_set = set([num])
    sub_set = set()
    
    for _ in range(chance):
        while data_set:
            test_num = list(data_set.pop())
            for i in range(len(test_num)):
                # print('picked  : ',test_num)
                for j in range(i+1, len(test_num)):
                    test_num[i], test_num[j] = test_num[j], test_num[i]
                    # print('change 1: ',test_num)
                    sub_set.add(''.join(test_num))
                    test_num[i], test_num[j] = test_num[j], test_num[i]
                    # print('change 2: ',test_num, '\n')
                    
        data_set, sub_set = sub_set, data_set
    # print('\n',data_set,'\n','\n')
    print(f'#{test_case} {max(data_set)}')
    

import sys
from collections import defaultdict
from operator import *
sys.stdin = open('SWEA/16003-화면캡쳐/input.txt')
# https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AYYAGjgqPgcDFARc

def generate_file(name, idx, string):
    global files
    if len(files) >= 50: return
    print('[1번]',string,'name:',name, 'idx:',idx)
    name += str(idx)
    
    if int(name) <= N: files.append(name+'.png')
    
    for i in range(10):
        print('[2번]',string,'name:',name, 'strI:',i)
        if int(name+str(i)) <= N: generate_file(name, i, '재귀 함수:')
        
        else: break
    return
 
 
T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    files = list()
    for i in range(1, 10):
        generate_file('', i, '메인 함수:')
        
    folder = ' '.join(files[:min(50, len(files))])
    print(f'#{test_case} {folder}')
    
    

# T = int(input())

# for test_case in range(1, T + 1):
#     EXTENTION = '.png'
#     input_num = input()
#     spread_input_num = list(input_num)
    
#     set_folder = set()
    
    
#     for i in range(0, len(spread_input_num)):
#         cur_exponent = int(spread_input_num[i]) * 10 ** i
#         if int(spread_input_num[i]) == 0:
#             cur_exponent = 10 ** i
#         else:
#             cur_exponent = int(spread_input_num[i]) * 10 ** i
#         for j in range(i+1, int(input_num)+1, cur_exponent):
#             set_folder.add(j)
            
#     folder_list = list(set_folder)
#     print('list:', folder_list)
#     folder_list.sort(key= lambda x: [str(x)[i] for i in range(len(str(x)))])
#     print('sort:', folder_list)
    
#     join_with_extention = list(map(lambda x: str(x) + EXTENTION, folder_list[0:50]))
    
#     print(f"#{test_case} {' '.join(join_with_extention)}")
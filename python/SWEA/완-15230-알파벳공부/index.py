import sys
sys.stdin = open('SWEA/완-15230-알파벳공부/input.txt')

T = int(input())
for test_case in range(1, T + 1):
    form_list = list('abcdefghijklmnopqrstuvwxyz')
    input_list = list(input())
    
    
    same_with_form_list = 0
    for i in range (0, len(input_list)):
        if(form_list[i] == input_list[i]):
            same_with_form_list += 1
        else: break

    print(f'#{test_case} {same_with_form_list}')
    



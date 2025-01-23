import sys
sys.stdin = open('SWEA/완-1926-간단한369게임/input.txt', 'r')

input_num = int(input())

arr = list(range(1, input_num + 1))
result = ''

for i in range(input_num):
        spred = list(str(arr[i]))
        
        three,six,nine = spred.count(str(3)), spred.count(str(6)),spred.count(str(9))
        clap_sound, whole_clapping = '-', three + six + nine
        
        if whole_clapping != 0:
            result += f'{clap_sound * whole_clapping} '
        else:
            result += f'{arr[i]} '
            
print(result)
import sys
sys.stdin = open('programmers/완-핸드폰번호가리기/input.txt')

def solution(phone_number):
    break_idx = len(phone_number)-4
    masked_num = '*' * (break_idx) + phone_number[break_idx:len(phone_number)]
    
    return masked_num
    
    

num1 = '027778888'
num2 = '01033334444'

solution(num2)
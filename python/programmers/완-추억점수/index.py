import sys
from collections import defaultdict
sys.stdin = open('programmers/완-추억점수/input.txt')
# https://school.programmers.co.kr/learn/courses/30/lessons/176963

def solution(names, yearnings, photos):
    result = []
    dict = defaultdict(int)
    for i in range(len(yearnings)):
        dict[names[i]] = yearnings[i]
    
    for i in range(len(photos)):
        photo_yearning = 0
        for j in range(len(photos[i])):
            photo_yearning += dict[photos[i][j]]
        result.append(photo_yearning)
        
    return result

solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])
solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]])
solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"],["kein", "deny", "may"], ["kon", "coni"]])




import sys
from collections import defaultdict
sys.stdin = open('programmers/완-달리기경주/input.txt')

def solution(players, callings):
    key_R_value_N = defaultdict(str)
    key_N_value_R = defaultdict(int)
    
    for i in range(len(players)):
        key_R_value_N[i+1], key_N_value_R[players[i]] = players[i], i+1
    
    for call_name in callings:
        higher_rank, rower_rank = key_N_value_R[call_name] - 1, key_N_value_R[call_name]
        changed_name, chaning_name = key_R_value_N[higher_rank], key_R_value_N[rower_rank]
        key_N_value_R[changed_name] = rower_rank
        
        key_R_value_N[higher_rank], key_R_value_N[rower_rank] = chaning_name, changed_name
        key_N_value_R[changed_name], key_N_value_R[chaning_name] = rower_rank, higher_rank

    key_R_value_N = sorted(key_R_value_N.items(), key=lambda x: x[0])
    key_R_value_N = list(x[1] for x in key_R_value_N)
    
    return key_R_value_N
    
    
players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]
solution(players, callings)

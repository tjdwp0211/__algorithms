# 알파벳 + 숫자(0~9)로 구성된 문자열
# 알파벳 오름차순 정렬 및, 숫자 모두 더해 출력
# K1KA5CB7
# AJKDLSI412K4JSJ9D

sentence = list(input())
numbers = [str(i) for i in range(10)]

sortedSentence = sorted(sentence, key = lambda x: int(x) if x in numbers else -ord(x))

calcNumber = 0
while sortedSentence[len(sortedSentence) - 1] in numbers:
    calcNumber += int(sortedSentence[len(sortedSentence) - 1])
    sortedSentence.pop()

sortedSentence.reverse()
print(f'{''.join(sortedSentence)}{calcNumber}')
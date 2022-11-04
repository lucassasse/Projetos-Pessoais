import random
listaNums = []
def sorteio(num):
    i = 0
    while i < num:
        numSorteado = random.randint(1, 60)
        if numSorteado not in listaNums:
            listaNums.append(numSorteado)
            i += 1
    list.sort(listaNums)
    print(listaNums)
sorteio(int(input("Quantos números a serem sorteados?")))
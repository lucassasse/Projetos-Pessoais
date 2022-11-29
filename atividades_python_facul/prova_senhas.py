import random

ranking = [[10, " "], [10, " "], [10, " "]]
# ranking = []
jogadorAtual = []

def rePlay(jogadorAtual):
    print("Deseja Jogar novamente?")
    escolha = input("1 - Sim, mesmo jogador! | 2 - Sim, outro jogador! | 3 - Não!")
    if escolha == "1":
        jogadorAtual.pop(0)
        sortearNumeros()
    elif escolha == "2":
        novoJogador()
    elif escolha == "3":
        print("Ok! Até a próxima!")
    else:
        print("Por favor, selecione uma opção válida.")
        rePlay(jogadorAtual)

def novoJogador():
    global jogadorAtual
    jogadorAtual = []
    jogadorAtual.insert(1, input("Qual seu nome?"))
    sortearNumeros()

def sortearNumeros():
    numerosSorteados = []
    while len(numerosSorteados) < 4:
        numSorteado = random.randint(1, 6)
        if numSorteado not in numerosSorteados:
            numerosSorteados.append(numSorteado)
    print(numerosSorteados)
    tentativas = 0
    chutes(numerosSorteados, tentativas)

def chutes(numerosSorteados, tentativas):
    if tentativas < 10:
        chute = input("Digite 4 números ou 'sair'")
        if chute == "sair":
            print("Você desistiu! Os números sorteados eram: ", numerosSorteados)
        elif len(chute) < 4 or len(chute) > 4:
            print("Chute inválido.")
            chutes(numerosSorteados, tentativas)
        else:
            tentativas += 1
            verificacao(chute, numerosSorteados, tentativas)
    else:
        print("Lamento, suas tentativas acabaram.")
        fimDeJogo(tentativas)

def verificacao(chute, numerosSorteados, tentativas):
    listaNumerosChute = []
    for x in chute:
        listaNumerosChute.append(int(x))
    if numerosSorteados == listaNumerosChute:
        print("Parabéns, você acertou! Os números eram: ", numerosSorteados)
        fimDeJogo(tentativas)
    else:
        numerosColocados = 0
        numerosDeslocados = 0
        for x in numerosSorteados:
            cont = 0
            while cont < 4:
                if x == int(listaNumerosChute[cont]) and numerosSorteados[cont] != int(listaNumerosChute[cont]):
                    numerosDeslocados += 1
                if x == int(listaNumerosChute[cont]) and numerosSorteados[cont] == int(listaNumerosChute[cont]):
                    numerosColocados += 1
                cont += 1
        print("Você acertou ", numerosColocados, " numero(s) colocado(s) e ", numerosDeslocados,
              " numero(s) deslocado(s)")
        chutes(numerosSorteados, tentativas)

def fimDeJogo(tentativas):
    print("Seu total de tentativas foi de: ", tentativas)
    jogadorAtual.insert(0, tentativas)
    rank()

def rank():
    ranking.sort()
    cont = 0
    while cont < len(ranking):
        if ranking[cont][0] >= jogadorAtual[0]:
            ranking.insert(cont, jogadorAtual)
            if len(ranking) > 3:
                ranking.pop()
            break
        else:
            cont += 1
    print(ranking)
    rePlay(jogadorAtual)

novoJogador()
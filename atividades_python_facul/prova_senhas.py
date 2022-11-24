import random
ranking = [["Lucas", 4], ["Marco", 7], ["Pedro", 8]]
jogadorAtual = []

def rePlay():
    print("Suas tentativas acabaram! Deseja Jogar novamente?")
    escolha = input("1 - Sim, mesmo jogador! | 2 - Sim, outro jogador! | 3 - Não!")
    if escolha == "1":
        sortearNumeros()
    elif escolha == "2":
        novoJogador()
    elif escolha == "3":
        print("Ok! Até a próxima!")
    else:
        print("Por favor, selecione uma opção válida.")
        rePlay()

def novoJogador():
    global jogadorAtual
    jogadorAtual = []
    jogadorAtual.append(input("Qual seu nome?"))
    sortearNumeros()
    
def sortearNumeros():
    numerosSorteados = []
    while len(numerosSorteados) < 4:
        numSorteado = random.randint(1, 7)
        if numSorteado not in numerosSorteados:
            numerosSorteados.append(numSorteado)
    print(numerosSorteados)
    chutes(numerosSorteados)
    
def chutes(numerosSorteados):
    tentativas = 0
    while tentativas < 3:
        chute = input("Digite 4 números ou 'sair'")
        if chute == "sair":
            print("Você desistiu! Os números sorteados eram: ", numerosSorteados)
            break
        else:
            tentativas += 1
            verificacao(chute)
    if tentativas == 10:
        fimDeJogo()

def verificacao(chute):
    print(chute)
    
def fimDeJogo(tentativas):
    print("Seu total de tentativas foi de: ", tentativas)
    jogadorAtual.append(tentativas)
    rank()

def rank():
    print(jogadorAtual)
    rePlay()

novoJogador()
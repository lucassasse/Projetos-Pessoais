import random
ranking = [["vazio", 0], ["vazio", 0], ["vazio", 0]]

tentativas = 0
def sortearNumeros():
    numerosSorteados = []
    while len(numerosSorteados) < 4:
        numerosSorteados.append(random.randrange(1,7))
    tentativa(numerosSorteados)
    
def tentativa(numerosSorteados):
    chute = input("Digite 4 números: (ou 'sair')")
    verificacaoPrimária(chute, numerosSorteados)

def verificacaoPrimária(chute, numerosSorteados):
    listaNumerosChute = []
    listaNumerosChute = list(chute)
    if chute == "sair":
        print("Fim de jogo. Os números eram: ", numerosSorteados)
        logicaRank()
    elif tentativas >= 10:
        print("Suas tentativas acabaram!")
    elif (len(chute) < 4) or (len(chute) > 4):
        print("Digite 4 números.")
    elif not chute.isdigit():
        print("Digite apenas números.")
    else:
        print("Passou!")
        tentativas += 1
        verificacaoNumeros(chute, listaNumerosChute, numerosSorteados)

def verificacaoNumeros(chute, listaNumerosChute, numerosSorteados):
    print(chute, listaNumerosChute, numerosSorteados)
    logicaRank()

def logicaRank():
    ranking.sort()
    print("Ranking", ranking)

sortearNumeros()
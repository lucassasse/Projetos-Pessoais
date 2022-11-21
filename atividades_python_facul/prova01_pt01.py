def criarLista():
    listaNum = []
    numeroAtual = float(input("Digite um número:"))
    while numeroAtual != 0:
        listaNum.append(numeroAtual)
        numeroAtual = float(input("Digite um número:"))
    maiorNumero(listaNum)
    
def maiorNumero(listaNum):
    if len(listaNum) == 0:
        print("Lista vazia!")
    else:
        listaNum.sort()
        print(listaNum[len(listaNum)-1])
    
criarLista()
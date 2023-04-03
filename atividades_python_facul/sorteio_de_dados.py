from random import randint;

def start():
    while True:
        escolha = input("Jogar = 1 | Sair = 2: ");
        if(escolha == '1'):
            numeroSorteado = JogarDado();
            chute = captarChute();
            exibirSorteio(chute, numeroSorteado);
        elif(escolha == '2'):
            return;
        else:
            print("Favor, digite uma opção válida!");

def JogarDado():
    numeroSorteado = randint(1,6);
    return numeroSorteado;

def captarChute():
    while True:
        chute = int(input("Qual número vai cair? (1 ~ 6): "));
        if(chute > 0 and chute < 7):
            return int(chute);
        else:
            print("Digite um número válido!")

def exibirSorteio(chute, numeroSorteado):
    print("Número do chute: ", chute);
    print("O número sorteado foi: ", numeroSorteado);
    if(chute == numeroSorteado):
        print("Parabéns, você ganhou!");
    else:
        print("Sinto muito, você perdeu :(");

start();

'''
1) João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o
rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o
estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar
uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que
leia a variável peso (peso de peixes) e calcule o excesso. Gravar no variável excesso a
quantidade de quilos além do limite e na variável multa o valor da multa que João deverá
pagar. Imprima os dados do programa com as mensagens adequadas.

pesoPeixes = float(input("Quantos kg de peixes hoje patrão?"))
excesso = pesoPeixes - 50
if excesso >= 0:
    print("O peso excedeu em", excesso,"kgs")
    multa = excesso * 4
    print("O valor da multa é de: R$", multa)
else:
    print("Sem multa hoje patrão!")

2) Tendo como dado de entrada a altura (h) de uma pessoa,
construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
a. Para homens: (72.7*h) – 58
b. Para mulheres: (62.1*h) - 44.7
altura = float(input("Qual sua altura?"))
genero = input("Qual seu gênero? masculino(m) ou feminíno(f)")
if genero == 'm':
    pesoIdeal = (72.7 * altura) - 58
    print("Seu peso ideal é de:", pesoIdeal)
else:
    pesoIdeal = (62.1 * altura) - 44.7
    print("Seu peso ideal é de:", pesoIdeal)

3) Faça um algoritmo que leia as duas notas parciais obtidas por um aluno numa disciplina
ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento    Conceito
Entre 9.0 e 10.0              A
Entre 7.5 e 9.0               B
Entre 6.0 e 7.5               C
Entre 4.0 e 6.0               D
Entre 4.0 e zero              E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a
mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

nota01 = float(input("Digíte a primeira nota:"))
nota02 = float(input("Digíte a segunda nota:"))
media = (nota01 + nota02) / 2
if media <= 4:
    print("Sua primeira nota foi:", nota01, "A segunda nota foi:", nota02)
    print("Sua média foi de:", media, "e seu conceito foi: E")
    print('Você foi "REPROVADO"')
elif media <= 6:
    print("Sua primeira nota foi:", nota01, "A segunda nota foi:", nota02)
    print("Sua média foi de:", media, "e seu conceito foi: D")
    print('Você foi "REPROVADO"')
elif media <= 7.5:
    print("Sua primeira nota foi:", nota01, "A segunda nota foi:", nota02)
    print("Sua média foi de:", media, "e seu conceito foi: C")
    print('Você foi "APROVADO"')
elif media <= 9:
    print("Sua primeira nota foi:", nota01, "A segunda nota foi:", nota02)
    print("Sua média foi de:", media, "e seu conceito foi: B")
    print('Você foi "APROVADO"')
else:
    print("Sua primeira nota foi:", nota01, "A segunda nota foi:", nota02)
    print("Sua média foi de:", media, "e seu conceito foi: A")
    print('Você foi "APROVADO"')

4) Faça um algoritmo que leia um número inteiro menor que 1000 e imprima a quantidade
de centenas, dezenas e unidades do mesmo. Observando os termos no plural a colocação
do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidades
12 = 1 dezena e 2 unidades
Testar com as seguintes entradas: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20,
10, 21, 11, 1, 7 e 16
O programa deve estar em uma estrutura de repetição que só deve ser interrompida quando
o usuário digitar um número menor que 0 (zero).

numInt = int(input("Dígite um número inteiro entre 0 e 999"))
while numInt >= 0:
    unidade = numInt % 10
    dezena = (numInt % 100) // 10
    centena = numInt // 100
    if numInt < 10:
        if unidade <= 1:
            print(f"{unidade} unidade")
        else:
            print(f"{unidade} unidades")
    elif numInt < 100:
        if dezena <= 1 and unidade <= 1:
            print(f"{dezena} dezena e {unidade} unidade")
        elif dezena > 1 and unidade > 1:
            print(f"{dezena} dezenas e {unidade} unidades")
        elif dezena <= 1 and unidade > 1:
            print(f"{dezena} dezena e {unidade} unidades")
        else:
            print(f"{dezena} dezenas e {unidade} unidade")
    elif numInt < 1000:
        if centena <= 1 and dezena <= 1 and unidade <= 1:
            print(f"{centena} centena, {dezena} dezena e {unidade} unidade")
        elif centena > 1 and dezena > 1 and unidade > 1:
            print(f"{centena} centenas, {dezena} dezenas e {unidade} unidades")
        elif centena > 1 and dezena <= 1 and unidade <= 1:
            print(f"{centena} centenas, {dezena} dezena e {unidade} unidade")
        elif centena <= 1 and dezena > 1 and unidade <= 1:
            print(f"{centena} centena, {dezena} dezenas e {unidade} unidade")
        elif centena <= 1 and dezena <= 1 and unidade > 1:
            print(f"{centena} centena, {dezena} dezena e {unidade} unidades")
        elif centena > 1 and dezena > 1 and unidade <= 1:
            print(f"{centena} centenas, {dezena} dezenas e {unidade} unidade")
        elif centena <= 1 and dezena > 1 and unidade > 1:
            print(f"{centena} centena, {dezena} dezenas e {unidade} unidades")
        #elif centena > 1 and dezena <= 1 and unidade > 1:
        else:
            print(f"{centena} centenas, {dezena} dezena e {unidade} unidades")
    else:
        print("Numero superior ao permitido")
    numInt = int(input("Dígite um número inteiro entre 0 e 999"))

5) Faça um algoritmo para um caixa eletrônico. O programa deverá perguntar ao usuário o
valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas
disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo
de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na
máquina.
a. Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100,
uma nota de 50, uma nota de 5 e uma nota de 1;
b. Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100,
uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

print("Bem vindo ao BP - Seu Banco Pessoal!")
print("As notas disponíveis para saque são de R$ 1,00, R$ 5,00, R$ 10,00, R$ 50,00 e R$ 100,00")
print("O valor mínimo para saque é de R$ 10,00 e o valor máximo é de R$ 600,00")
valorSaque = float(input("Digite o valor do saque:"))
'''




'''
6) Faça um algoritmo que peça um número inteiro e devolva a tabuada desse número. Ao
final ele deve perguntar se você deseja fornecer um outro número, se sim uma nova
tabuada deverá ser exibida, agora com um novo número também fornecido pelo usuário,
caso contrário despeça-se do usuário e saia do programa.

numInteiro = int(input("Digite um número inteiro para saber a tabuada deste número:"))
valorBase = 1
while valorBase <= 10:
    resultado = numInteiro * valorBase
    print(valorBase, "x", numInteiro, "=", resultado)
    valorBase = valorBase + 1
    if valorBase == 10:
        pergunta = input("Você deseja realizar um novo cálculo? 'S' ou 'N'?")
        if pergunta == "S":
            int(input("Digite um número inteiro para saber a tabuada deste número:"))
            valorBase = 1
        else:
            break
'''
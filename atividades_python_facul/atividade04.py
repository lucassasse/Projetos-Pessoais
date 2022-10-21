'''
1) O fatorial de um número é a multiplicação desse número por todos os seus antecessores até chegar a 1. Por exemplo, o fatorial de 5 é 5*4*3*2*1 que é igual a 120.
Faça uma função em python que dado um número inteiro positivo n, ela devolva o fatorial deste número. Teste com alguns números.
'''
import math
def fatorial(num):
    print(math.factorial(num))
fatorial(int(input("digite um número:")))
'''
2) O termial de um número é a soma desse número por todos os seus antecessores até chegar a 1. Por exemplo, o termial de 5 é 5+4+3+2+1 que é igual a 15.
Faça uma função em python que dado um número inteiro positivo n, ela devolva o termial deste número. Permita que o usuário escolha os números que deseja
conhecer seu termial e só interrompa quando ele digitar 0 (zero).
'''
def termial(num):
    if num > 0:
        result = 0
        while num > 0:
            result += num
            num -= 1
        print(result)
        termial(int(input("digite um número:")))
termial(int(input("digite um número:")))
'''
3) Construa uma função em python que dado um número ela retorne a tabuada desse número.
Novamente aqui permita que o usuário escolha qual tabuada deseja saber e só interrompa quando ele digitar um número negativo.
'''
def tabuada(num):
    i = 1
    if num >= 0:
        while i <= 10:
            print(num * i)
            i = i + 1
        tabuada(int(input("digite um número:")))
tabuada(int(input("digite um número:")))
'''
4) Desenvolva uma função que peça como parâmetro os 3 lados de um triângulo.
A função deverá devolver se os valores passados como parâmetro de entrada compõem um triângulo
e, se sim, que tipo ele se enquadra (equilátero, isósceles ou escaleno).
Regras:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes.
'''
def tringulo(a,b,c):
    lados = [a,b,c]
    lados.sort()
    if (lados[0] + lados[1]) <= lados[2]:
        print("Não é possivel fazer um triângulo com estas medidas")
    elif lados[0] == lados[1] and lados[0] == lados[2]:
        print("Triângulo Equilátero")
    elif lados[0] == lados[1] and lados[0] != lados[2] or lados[0] == lados[2] and lados[0] != lados[1] or lados[1] == lados[2] and lados[1] != lados[0]:
        print("Triângulo Isósceles")
    else:
        print("Triângulo Escaleno")
print("Informe 3 medidas para descobrir qual tipo de triângulo se trata:")
tringulo(int(input("Primeiro número: ")), int(input("Segundo número: ")), int(input("Terceiro número:")))
'''
5) Implemente uma função que pergunte ao usuário o valor de um saque no caixa eletrônico
(terminal ATM) e com isso ela retorne quantas notas de cada valor serão fornecidas.
As notas disponíveis serão as de 1, 5, 10, 50, 100 e 200 reais. A função não deve se preocupar
com a quantidade de notas existentes na máquina e ela deve compor o conjunto de notas
considerando sempre, se couber dentro do solicitado, a nota de maior valor.
Exemplo: para sacar a quantia de 1356 reais, a função fornece 6 notas de 200 reais, uma
nota de 100 reais, uma nota de 50 reais, uma nota de 5 reais e uma nota de 1 real.
'''
def saque(valorSaque):
    cedula200 = 0
    cedula100 = 0
    cedula50 = 0
    cedula10 = 0
    cedula5 = 0
    cedula1 = 0
    if valorSaque < 1:
        print("Lamentamos mas é impossível sacar este valor!")
    else:
        while valorSaque > 200:
            cedula200 += 1
            valorSaque -= 200
            if valorSaque < 200:
                print(f"Cedulas de 200 = {cedula200}")
        while valorSaque > 100:
            cedula100 += 1
            valorSaque -= 100
            if valorSaque < 100:
                print(f"Cedulas de 100 = {cedula100}")
        while valorSaque > 50:
            cedula50 += 1
            valorSaque -= 50
            if valorSaque < 50:
                print(f"Cedulas de 50 = {cedula50}")
        while valorSaque > 10:
            cedula10 += 1
            valorSaque -= 10
            if valorSaque < 10:
                print(f"Cedulas de 10 = {cedula10}")
        while valorSaque > 5:
            cedula5 += 1
            valorSaque -= 5
            if valorSaque < 5:
                print(f"Cedulas de 5 = {cedula5}")
        while valorSaque >= 1:
            cedula1 += 1
            valorSaque -= 1
            if valorSaque < 1:
                print(f"Cedulas de 1 = {cedula1}")
saque(int(input("Digite o valor a ser sacado:")))
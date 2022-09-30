#1) Faça um algoritmo que mostre a mensagem "Alô mundo" na tela.
print("Alô mundo")

#2) Faça um algoritmo que peça um número e então mostre a mensagem O número informado foi [número].
numero1 = input("Insira um número: ")
print("O número informado foi", numero1)

#3) Faça um algoritmo que peça dois números e imprima a soma.
numero2 = int(input("Insira o primeiro número: "))
numero3 = int(input("Insira o segundo número: "))
print("A soma entre os número é: ", numero2 + numero3)

#4) Faça um algoritmo que peça as 4 notas bimestrais e mostre a média.
notas = []
notas.append(input("nota 1: "))
notas.append(input("nota 2: "))
notas.append(input("nota 3: "))
notas.append(input("nota 4: "))
media = (int(notas[0]) + int(notas[1])+ int(notas[2]) + int(notas[3])) / len(notas)
print("A média final é:", media)

#5) Faça um algoritmo que converta metros para centímetros.
metros = int(input("Metros a serem convertidos em centímetros: "))
print(metros*100, "centimetros.")

#6) Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área.
raio = int(input("Qual o tamanho do raio?"))
areaCinculo = 3.1416*(raio**2)
print("A área é de:", areaCinculo)

#7) Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
tempInF = int(input("Temperatura em Fahrenheit: "))
tempoInC = 5* (tempInF - 32) / 9
print(tempoInC, "°C")

'''
8) Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
a. Salário bruto.
b. Quanto pagou ao INSS.
c. Quanto pagou ao sindicato.
d. O salário líquido.
e. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto: R$
- IR (11%): R$
- INSS (8%): R$
- Sindicato (5%): R$
= Salário Líquido: R$
Obs: Salário Bruto - Descontos = Salário Líquido
'''
valorHora = int(input("Quanto você recebe por hora?"))
horasTrabalhadas = int(input("Quantas horas você trabalhou?"))
salarioBruto = valorHora * horasTrabalhadas
pagoIR = salarioBruto / 100 * 11
pagoINSS = salarioBruto / 100 * 8
pagoSindicato = salarioBruto / 100 * 5
salarioLiquido = salarioBruto - pagoIR - pagoINSS - pagoSindicato
print("+ Salário Bruto: R$", salarioBruto)
print("- IR (11%): R$", pagoIR)
print("- INSS (8%): R$", pagoINSS)
print("- Sindicato (5%): R$", pagoSindicato)
print("= Salário Líquido: R$", salarioLiquido)

#1) Faça um algoritmo para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
#Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros que custam R$ 80,00.
#Informe ao usuário a quantidade de latas de tinta a serem compradas e o preço total.
mtsQuadrados = int(input("Quantos m²s você deseja pintar?"))
litrosNecessários = mtsQuadrados / 3
latas = litrosNecessários / 18
if litrosNecessários % 18 != 0:
    latas += .5
    latas = round(latas)
valor = latas * 80
print("Você precisará de", latas, "lata(s) para pintar", mtsQuadrados, "m²s")
print("O valor total da compra será de: R$", valor)

#2) Faça um algoritmo que verifique se uma letra digitada é vogal ou consoante.
letra = input("Digite uma letra para descobrir se a mesma é vogal ou consoante")
if letra.isdigit():
    print("Digite apenas letras!")
elif letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u":
    print('A letra "' + letra + '" é uma vogal!')
else:
    print('A letra "' + letra + '" não é uma vogal!')


#3) Faça um algoritmo para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
#a. A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
#b. A mensagem "Reprovado", se a média for menor do que sete;
#c. A mensagem "Aprovado com Distinção", se a média for igual a dez.

nota1 = int(input("Digite a primeira nota: "))
nota2 = int(input("Digite a segunda nota: "))
media = (nota1 + nota2) / 2
if media > 10:
    print("Nota inválida")
elif media >= 7:
    print("Aprovado")
elif media < 7:
    print("Reprovado")
elif media == 10:
    print("Aprovado com Distinção")
else:
    print("Nota inválida")

#4) Faça um algoritmo que leia três números e mostre o maior deles
print("Digite 3 números para saber qual o maior:")
numero1 = int(input())
numero2 = int(input())
numero3 = int(input())
if numero1 > numero2 and numero1 > numero3:
    print("O maior número é o:", numero1)
elif numero2 > numero1 and numero2 > numero3:
    print("O maior número é o:", numero2)
elif numero3 > numero1 and numero3 > numero2:
    print("O maior número é o:", numero3)
else:
    print("Há números iguais.")

#5) Faça um algoritmo que leia três números e mostre o maior e o menor deles.
print("Digite 3 números para saber qual o maior e qual o menor:")
numLista = []
numLista.append(int(input()))
numLista.append(int(input()))
numLista.append(int(input()))
print("O maior número é", min(numLista), "e o menor é:", max(numLista))

#6) Faça um algoritmo que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
listaProdutos = ["Banana", "Laranja", "Maçã"]
listaProdutosValor = []
listaProdutosValor.append(int(input("Qual o valor da " + listaProdutos[0])))
listaProdutosValor.append(int(input("Qual o valor da " + listaProdutos[1])))
listaProdutosValor.append(int(input("Qual o valor da " + listaProdutos[2])))
result = min(listaProdutosValor)
result = listaProdutosValor.index(min(listaProdutosValor))
print("Você deve comprar", listaProdutos[result], "por ser o produto mais barato")

#7) Faça um algoritmo que leia três números e mostre-os em ordem decrescente.
print("Digite três números para serem organizados em ordem decrescente:")
listaNums = []
listaNums.append(int(input()))
listaNums.append(int(input()))
listaNums.append(int(input()))
#listaNums.sort(reverse=True) - Modifica a lista original
listaOrdenada = sorted(listaNums, reverse=True) #Mantem a lista original
print("Os números em ordem são: ", listaOrdenada)

#8) Faça um algoritmo que leia um número e exiba o dia correspondente da semana.
#(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer como valor inválido (uma mensagem indicando isso).
numDia = int(input("Digite um número de 1 a 7 para saber qual dia da semana correspondente:"))
diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
print("O dia da semana é:", diaSemana[numDia-1])

#9) Faça um algoritmo que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique,
#caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
#Dicas:
#Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#Triângulo Equilátero: três lados iguais;
#Triângulo Isósceles: quaisquer dois lados iguais;
#Triângulo Escaleno: três lados diferentes
print("Informe 3 medidas para descobrir qual tipo de triângulo se trata:")
lados = []
lados.append(int(input()))
lados.append(int(input()))
lados.append(int(input()))
lados.sort()
print(lados)
if (lados[0] + lados[1]) <= lados[2]:
    print("Não é possivel fazer um triângulo com estas medidas")
elif lados[0] == lados[1] and lados[0] == lados[2]:
    print("Triângulo Equilátero")
elif lados[0] == lados[1] and lados[0] != lados[2] or lados[0] == lados[2] and lados[0] != lados[1] or lados[1] == lados[2] and lados[1] != lados[0]:
    print("Triângulo Isósceles")
else:
    print("Triângulo Escaleno")

#10) Faça um algoritmo que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
ano = int(input("Informe o ano para saber se ele é bissexto:"))
if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
    print("O ano", ano, "é bissexto!")
else:
    print("O ano", ano, "não é bissexto!")
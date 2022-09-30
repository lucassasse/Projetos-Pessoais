idade = int(input('Qual sua idade? '))

if idade < 16:
    result = 16 - idade
    print("Você ainda não pode votar, faltam", result, "anos")
elif idade >= 16 and idade < 18 or idade >= 70:
    print("Seu voto é facultativo")
else:
    result2 = 70 - idade
    print("Você é obrigado a votar! - Seu voto será facultativo em", result2, "anos")
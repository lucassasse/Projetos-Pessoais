conta = input("Você desesa calcular a área do: 'RET' do 'TRI' ou do 'CIR'?")

if conta == 'RET' or conta == 'TRI' or conta == 'CIR':
    while conta == 'RET' or conta == 'TRI' or conta == 'CIR':
        if conta == 'RET':
            base = float(input("Digite o valor da base: "))
            altura = float(input("Digite o valor da altura: "))
            area = base * altura
            print("A área do retângulo é de:", area)
            conta = input("Você desesa calcular a área do: 'RET' do 'TRI' ou do 'CIR'?")
        elif conta == 'TRI':
            base = float(input("Digite o valor da base: "))
            altura = float(input("Digite o valor da altura: "))
            area = round(((base * altura) / 2),2)
            print("A área do triângulo é de:", area)
            conta = input("Você desesa calcular a área do: 'RET' do 'TRI' ou do 'CIR'?")
        elif conta == 'CIR':
            raio = float(input("Digite o valor do raio: "))
            area = round((3.1415 * raio**2),2)
            print("O área do círculo é de", area)
            conta = input("Você desesa calcular a área do: 'RET' do 'TRI' ou do 'CIR'?")
else:
    print("Nenhuma opção válida foi selecionada")
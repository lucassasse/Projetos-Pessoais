import math

def areaRetangulo():
    b = float(input("Primeira medida = "))
    h = float(input("Segunda medida = "))
    area = b * h
    print("Área do Retângulo = ", area)
    escolhaForma()

def areaTriangulo():
    b = float(input("Primeira medida = "))
    h = float(input("Segunda medida = "))
    area = (b * h) / 2
    print("Área do Triângulo = ", area)
    escolhaForma()

def areaCircunferencia():
    r = float(input("Raio da Circunferência = "))
    area = math.pi * (r**2)
    print("Área da Circunferência = ", area)
    escolhaForma()

def escolhaForma():
    print("Deseja descobrir a área de qual forma geométrica?")
    print("Retangulo, Triângulo ou Circunfêrencia? Nenhum = 0")
    forma = input("Qual área?:")
    formaLower = forma.lower()
    if formaLower == "retângulo":
        areaRetangulo()
    elif formaLower == "triângulo":
        areaTriangulo()
    elif formaLower == "circunferência":
        areaCircunferencia()
    else:
        print("Tchau!")
        
escolhaForma()
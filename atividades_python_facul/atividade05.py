#listaAlunos = [["lucas",1,2,3],["Marco", 4,5,6],["José", 7,8,9]]
listaAlunos = []

def createList():
    aluno = []
    nomeAluno = input("Nome do aluno:")
    while nomeAluno != "fim":
        aluno.append(nomeAluno)
        nota=float(input("Nota do aluno:"))
        while nota >= 0:
            aluno.append(nota)
            nota=float(input("Nota do aluno:"))
        nomeAluno = input("Nome do aluno:")
        listaAlunos.append(aluno)
        aluno = []
    listaAlunos.sort()
    calcularMedia(listaAlunos)

def calcularMedia(listaAlunos):
    listaMediaAlunos = []
    for aluno in listaAlunos:
        tam=len(aluno)
        media = aluno[1:]
        soma = 0
        for num in media:
            soma += num
        if tam > 1:
            media = soma / (tam-1)
        else:
            media = 0
        aluno.append(media)
    print(listaAlunos)
    
createList()
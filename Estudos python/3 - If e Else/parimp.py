#Entre com um número e verificar se este número é par ou impar

vNum = int(input("Entre com um número"))

if vNum % 2 == 0:
    vResultado = "par"
else:
    vResultado = "impar"
print("O número é:", vResultado)
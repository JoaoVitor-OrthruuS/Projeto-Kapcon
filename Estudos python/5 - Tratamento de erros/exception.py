numero1 = int(input("Digite o primeiro número"))
numero2 = int(input("Digite o segundo número"))
try:
    resultado = numero1 / numero2
    print("O resultado é:",resultado)
except ZeroDivisionError:
    print("não é possível divisão por zero")

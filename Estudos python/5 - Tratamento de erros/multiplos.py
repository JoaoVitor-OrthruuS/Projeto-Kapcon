try:
    numero1 = float(input("Entre com primeiro número:"))
    numero2 = float(input("Entre com o segundo número"))
    numero1 = numero1 / numero2
    print("o resultado é:",numero1)
except ValueError:
    print("valor inválido!")
except ZeroDivisionError:
    print("Não é possível uma divisão por zero")
input("Pressione enter para sair...")

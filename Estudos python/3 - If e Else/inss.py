salario = float(input("Digite um número"))

if salario <= 1693.72:
    desconto = salario * 8/100
elif salario > 1693.72 and salario < 2822.90:
    desconto = salario * 9/100
elif salario > 2822.91 and salario < 5645.80:
    desconto = salario * 11/100
else:
    desconto = 621.04

print("O desconto no seu salário será de: R$",desconto)
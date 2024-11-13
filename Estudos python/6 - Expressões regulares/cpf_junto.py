#Valida o CPF sem pontos nem Hífen

import re

cpf = str(input("Entre com um cpf, sem pontos:"))
if re.search("\d{11}", cpf):
    print("Número CPF válido")
else:
    print("Número do CPF fora do padrão")
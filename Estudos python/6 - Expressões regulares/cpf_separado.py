#valida o cpf com pontos e hífens
import re

cpf = str(input("Entre com um CPF, com pontos e hífen"))
if re.search("\d{3}.\d{3}.\d{3}-\d{2}", cpf):
    print("Número CPF validado")
else:
    print("Número CPF fora do padrão")
input("Pressione Enter para sair")
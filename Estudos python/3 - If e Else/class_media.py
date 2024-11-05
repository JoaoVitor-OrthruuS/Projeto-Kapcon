#Recebe a média de um aluno e classifica o conceito

media = float(input("Entre com a média do aluno:"))

if media <= 5:
    conceito = "regular"
elif media < 7:
    conceito = "bom"
else:
    conceito = "excelente"
print("conceito:", conceito)
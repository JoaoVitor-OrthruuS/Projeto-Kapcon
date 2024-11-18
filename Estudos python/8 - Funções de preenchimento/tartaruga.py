import turtle

# Configurar a tela
screen = turtle.Screen()
screen.bgcolor("lightblue")
screen.title("Exemplo do Turtle")

# Criar uma tartaruga
t = turtle.Turtle()
t.shape("turtle")
t.color("green")
t.speed(3)

# Desenhar um quadrado
for _ in range(4):
    t.forward(100)
    t.right(90)

# Manter a janela aberta
screen.mainloop()
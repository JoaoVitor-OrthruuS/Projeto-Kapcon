import sqlite3
import hashlib

# script para criar o banco de dados e a tabela

conn = sqlite3.connect('empresa.db')
cursor = conn.cursor()
#cursor.execute(
#    'CREATE TABLE usuario(nome TEXT NOT NULL,senha TEXT NOT NULL);'
#    )

# script para inserir dados do login
conn = sqlite3.connect('empresa.db')
cursor = conn.cursor()
vnome = input('Digite o nome para o login: ')
vsenha = input('Digite uma senha para o login: ')
d = hashlib.md5()
d.update(vsenha.encode('utf-8'))
cursor.execute('insert into usuario values ("%s", "%s")' % (vnome, d))
conn.commit()
print("senha hash gerada: ",d.hexdigest())
input("Pressione ENTER para sair...")

# script para listar os logins dos usuários
conn = sqlite3.connect('empresa.db')
cursor = conn.cursor()
cursor.execute('SELECT * FROM usuario;' )
for i in cursor.fetchall():
       print(i)
input('Pressione ENTER para sair...')
import pyodbc

class Api():
    def __init__(self,nombre_bd):
        self.conn_str = (
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost\\SQLEXPRESS;"
        f"DATABASE={nombre_bd};"
        "Trusted_Connection=yes;"
        )

    def obtener_conexion(self):
        return pyodbc.connect(self.conn_str)
    
    def comprobar_login(self,conexion, usuario,contraseña):
        cur =conexion.cursor()
        cur.execute ("""select * from usuarios
                     where nombre_usuario =%s and contraseña_uusario =%s"""
                     ,(usuario,contraseña)
                     )
        retorno =cur.fetchone()
        cur.close()
        if retorno:
            return True
        else:
            return False
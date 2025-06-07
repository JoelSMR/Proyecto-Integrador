import pyodbc

class Api():
    def __init__(self,nombre_bd):
        self.conn_str = (
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost;"
        f"DATABASE={nombre_bd};"
        "Trusted_Connection=yes;"
        )

    def obtener_conexion(self):
        return pyodbc.connect(self.conn_str)
    
    def comprobar_login(self,conexion, usuario,contraseña):
        cur =conexion.cursor()
        errores =[]
        try:
            cur.execute ("""select * from usuarios
                     where nombre_usuario = ? and contraseña_usuario = ?"""
                     ,(usuario,contraseña)
                     )
        except Exception as e:
            errores.append(e)
        retorno =cur.fetchone()
        cur.close()
        if errores:
            return errores
        if retorno:
            return True
        else:
            return False
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

    def crear_usuario(self,
                      conexion,
                      primer_nombre,segundo_nombre,
                      primer_apellido,segundo_apellido,
                      cedula_ciudadania,
                      usuario,contraseña,
                      rol_id):
        cursor = conexion.cursor()
        cursor.execute("""select id 
                       from usuarios 
                       where cedula_ciudadania=?""",(cedula_ciudadania,)
                       )
        res =cursor.fetchone()
        if res:
            return
        
        cursor.execute("""insert into usuarios 
                       (primer_nombre,segundo_nombre,
                       primer_apellido,segundo_apellido,
                       cedula_ciudadania,nombre_usuario,contraseña_usuario)
                       OUTPUT INSERTED.id
                       VALUES (?,?,?,?,?,?,?)""",
                       (primer_nombre,segundo_nombre,
                        primer_apellido,segundo_apellido,
                        cedula_ciudadania,usuario,contraseña)
                        )
        
        id_usuario_creado =cursor.fetchone()[0]
        conexion.commit()
        cursor.execute("""insert into rolesxusuario (usuario_id,rol_id)
                       VALUES (?,?)""",(id_usuario_creado,rol_id))
        conexion.commit()
        cursor.close()
        
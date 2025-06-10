from flask import Flask, request, jsonify
from flask_cors import  CORS
from backend.API.BD import Api

app = Flask(__name__)
CORS(app)
api = Api("gestion_cesde")
@app.route("/comprobar_login", methods=["POST"])
def comprobar_inicio_sesion():
    peticion = request.json
    con =api.obtener_conexion()
    loguea =  api.comprobar_login(con,peticion["usuario"],peticion["contraseña"])
    con.close()
    if loguea:
        return jsonify({"mensaje":"Inicio Sesion Exitoso",
                        "loguea":True})
    else:
        return jsonify({"mensaje":"Denegado",
                        "loguea":False})

@app.route("/crear_usuario",methods = ["POST"])
def crear_usuario():
    peticion = request.json
    if not peticion:
        return jsonify({"mensaje":"no json valido"}),400
    primer_nombre = peticion.get("primer_nombre")
    segundo_nombre = peticion.get("segundo_nombre")
    primer_apellido = peticion.get("primer_apellido")
    segundo_apellido = peticion.get("segundo_apellido")
    cedula_ciudadania = peticion.get("cedula_ciudadania")
    nombre_usuario = peticion.get("nombre_usuario")
    contraseña_usuario = peticion.get("contraseña_usuario")
    rol_id = peticion.get("rol_id")
    try:
        conexion = api.obtener_conexion()
        api.crear_usuario(conexion,primer_nombre,segundo_nombre,
                          primer_apellido,segundo_apellido,cedula_ciudadania,
                          nombre_usuario,contraseña_usuario,rol_id
                          )
        conexion.close()
        return jsonify({"mensaje":"Creacion de usuario Exitosa"})
    except Exception as e:
        return jsonify({"mensaje":f"error {e}"})
if __name__ == '__main__':
    app.run(debug=True)


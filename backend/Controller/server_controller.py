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

if __name__ == '__main__':
    app.run(debug=True)


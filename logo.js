import { alertaRedireccion, almacenarLocalStorage } from './utils/funciones.js'

almacenarLocalStorage()
//localStorage.setItem("usuarios", JSON.stringify("usuarios"));
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function buscarUsuario() {
  let correo = document.getElementById("correo").value;
  let contrasena = document.querySelector("#contrasena").value;
  let usuarioEncontrado = usuarios.find(
    (item) => correo == item.correo && contrasena == item.contrasena
  );

  return usuarioEncontrado;
}

function iniciarSesion() {
  if (buscarUsuario()) {
    alertaRedireccion(
      "Bienvenido",
      "Será redireccionado en unos segundos",
      1000,
      "success"
    );
  } else {
    alert("No existe")
  }
}

document.getElementById("button").addEventListener("click", iniciarSesion)